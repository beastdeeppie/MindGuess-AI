import time
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

# Function to get the total number of cars from the page
def get_total_cars():
    url = "https://www.carwale.com/used/bangalore/"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find the total number of cars in Bangalore
    total_cars_text = soup.find('span', {'id': 'total_cars_id'}).text  # Adjust the ID to match the actual HTML element
    total_cars = int(total_cars_text.split()[0])  # Assuming the format is "3334 Used Cars"
    
    return total_cars

# Function to find and return the new car ad link when the number of cars changes
def get_latest_car_ad():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get("https://www.carwale.com/used/bangalore/page-1/")
    
    # Wait for the page to load, then scrape the first car listing link
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    
    # Find the first car ad listing (you may need to adjust this based on the HTML structure)
    car_listing = soup.find('a', {'class': 'card-detail-block'})['href']
    
    driver.quit()
    
    # Construct the full URL of the car listing
    car_link = f"https://www.carwale.com{car_listing}"
    return car_link

def monitor_car_listings():
    last_car_count = get_total_cars()  # Get the initial car count
    print(f"Initial car count: {last_car_count}")
    
    while True:
        time.sleep(60)  # Wait for 1 minute before checking again
        current_car_count = get_total_cars()
        
        if current_car_count > last_car_count:
            print(f"New cars found! Current car count: {current_car_count}")
            latest_car_ad = get_latest_car_ad()
            print(f"New car ad link: {latest_car_ad}")
            last_car_count = current_car_count  # Update the car count after finding a new listing
        else:
            print(f"No new cars. Current car count: {current_car_count}")

if __name__ == "__main__":
    monitor_car_listings()
