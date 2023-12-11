

#### logging utility for javascript

Avoid painfull repetition like :

100. a=23
101. console.log("a=" + String(a));

instead :

100. a=23;
101. LOG(a)

this will print on the console: <br>
your_file.js:101 : a=23

with line numer and name of source file.

i wrote  the equivalent for Java, C++ and python in some other repos of mine

The format is accepted by emacs enabling easy tracing the execution using 'next error'. 

- clone / download in the source directory
- in the html : <script src=lclog.js />



