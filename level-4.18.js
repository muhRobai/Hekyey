myFunction = (value) =>{
  let statusOk = {
    'a1' :['a2','a3','a4','a5','a6','a7','a8','b1','c1','d1','e1','f1','g1','h1','b2','c3','d4','e5','f6','g7','h8'], //ok
    'a2' :['a1','a3','a4','a5','a6','a7','a8','b2','c2','d2','e2','f2','g2','h2','b1','b3','c4','d5','e6','f7','g8'], //ok
    'a3' :['a1','a2','a4','a5','a6','a7','a8','b3','c3','d3','e3','f3','g3','h3','b2','c1','c4','d5','e6','f7','g8'], //ok
    'a4' :['a1','a2','a3','a5','a6','a7','a8','b4','c4','d4','e4','f4','g4','h4','b3','c2','d1','b5','c6','d7','e8'], //ok
    'a5' :['a1','a2','a3','a4','a6','a7','a8','b5','c5','d5','e5','f5','g5','h5','b4','c3','d2','e1','b6','c7','d8'], //ok
    'a6' :['a1','a2','a3','a4','a5','a7','a8','b6','c6','d6','e6','f6','g6','h6','b5','c4','d3','e2','f1','b7','c8'], //ok
    'a7' :['a1','a2','a3','a4','a5','a6','a8','b7','c7','d7','e7','f7','g7','h7','b6','c5','d4','e3','f2','g1','b8'], //ok
    'a8' :['a1','a2','a3','a4','a5','a6','a7','b8','c8','d8','e8','f8','g8','h8','b7','c6','d5','e4','f3','g2','h1'], //ok
    'b1' :['b2','b3','b4','b5','b6','b7','b8','a1','c1','d1','e1','f1','g1','h1','a2','c2','d3','e4','f5','g5','f6','g7','h8'], //ok
    'b2' :['b1','b3','b4','b5','b6','b7','b8','a2','c2','d2','e2','f2','g2','h2','a3','a1','c1','c3','d4','e5','f6','g7','f8'], //ok
    'b3' :['b1','b2','b4','b5','b6','b7','b8','a3','c3','d3','e3','f3','g3','h3','a4','c2','d1','a2','c4','d5','e6','f7','g8','h8'],
    'b4' :['b1','b2','b3','b5','b6','b7','b8','a4','c4','d4','e4','f4','g4','h4','a5','c3','d2','e1','a3','c5','d6','e7','f8'],
    'b5' :['b1','b2','b3','b4','b6','b7','b8','a5','c5','d5','e5','f5','g5','h5','a6','c4','d3','e2','f1','a4','c6','d7','e8'],
    'b6' :['b1','b2','b3','b4','b5','b7','b8','a6','c6','d6','e6','f6','g6','h6','a7','c5','d4','e3','f2','g1','a5','c7','d8'],
    'b7' :['b1','b2','b3','b4','b5','b6','b8','a7','c7','d7','e7','f7','g7','h7','a8','c6','d5','e4','f3','g2','a5','c7','d8'],

  }
  let a1 = ['a2','a3','a4','a5','a6','a7','a8','b1','c1','d1','e1','f1','g1','h1','b2','c3','d4','e5','f6','g7','h8']
  let a2 = []
  let item = value.split(" ")
}

myFunction('e1 e3')