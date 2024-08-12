from flask import Flask, render_template, request
from flask_sqlalchemy import SQLAlchemy

app=Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='postgresql://postgres:Fishclaws123@localhost/hairapp'
db=SQLAlchemy(app)



class Data(db.Model):
    def __init__(self, pfirst,plast,pemail,pmessage):
        self.first_name=pfirst
        self.last_name=plast
        self.email=pemail
        self.message=pmessage

    
    __tablename__='userinfo'
    id=db.Column(db.Integer,primary_key=True)
    first_name=db.Column(db.String(120))
    last_name=db.Column(db.String(120))
    email=db.Column(db.String(120))
    message=db.Column(db.String(1000))


with app.app_context():
    db.create_all()

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/discover")
def discover():
    return render_template("discover.html")

@app.route("/products")
def products():
    return render_template("products.html")

@app.route("/style")
def style():
    return render_template("style.html")

@app.route("/thanks",methods=['POST'])
def thanks():
    if request.method=='POST':
        first_name=request.form['first_name']
        last_name=request.form['last_name']
        email=request.form['email']
        message=request.form['message']

        data=Data(first_name, last_name, email,message)
        db.session.add(data)
        db.session.commit()
        return render_template('thanks.html')

if __name__ == '__main__':
    app.debug=True
    app.run()