from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/guess', methods=['POST'])
def guess():
    data = request.json
    user_input = data.get('input')
    # AI guessing logic here
    response = {"message": f"I guess you are thinking about {user_input}!"}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
