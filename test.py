import os, json
import cherrypy
from time import sleep
from urllib.parse import urlparse
#assume pip install utillc
from utillc import *

class HelloWorld(object):
    @cherrypy.expose
    def read_chunk() :
        return 1
    
    @cherrypy.expose
    def log(self, data=None) :
        p = urlparse(data);
        rp = os.path.relpath(p.path, start = "/")
        print(rp)
        
    @cherrypy.expose
    def process(self, data=None) :
        EKOX(data);
        #cherrypy.response.headers['Content-Type'] = 'application/json'
        return json.dumps({ 'v' : int(data)*int(data)})
        
        
    @cherrypy.expose
    def index(self):
        return "Hello World!"


def ff() :
    PATH = os.path.abspath(os.path.dirname(__file__))
    class Root(object): pass
    
    conf = {
        '/': {
            'tools.sessions.on': True,
            'tools.staticdir.on': True,
            'tools.staticdir.dir': PATH,
            'tools.staticdir.index': 'server.html'
        }
    }

    cherrypy.config.update({ "server.logToScreen" : False })
    cherrypy.config.update({'log.screen': False})
    #cherrypy.config.update({'server.socket_host': '192.168.1.27'})
    cherrypy.config.update({'server.socket_port': 9697})
    cherrypy.quickstart(HelloWorld(), "/", conf)

if __name__ == "__main__" :
    ff()
