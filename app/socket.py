from flask_socketio import SocketIO, emit

import os


# configure cors_allowed_origins
if os.environ.get('FLASK_ENV') == 'production':
    origins = [
        'http://pokecupid-aa.herokuapp.com',
        'https://pokecupid-aa.herokuapp.com'
    ]
else:
    origins = "*"

# initialize your socket instance
socketio = SocketIO(cors_allowed_origins=origins)


# handle chat messages
@socketio.on("chat")
def handle_chat(data):
    emit("chat", data, broadcast=True)



@socketio.on("delete")
def handle_delete(data):
    emit("delete", data, broadcast=True)
