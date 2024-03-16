// and gate module
module and_gate(a, b, c);
  input a, b;
  output c;
  assign c = a & b;
endmodule

// NOR GATE
module nor_gate(a, b, c);
  input a, b;
  output c;
  assign c = ~(a | b);
endmodule

// AND GATE WITH NOR GATE 
module and_nor(a, b, c);
  input a, b;
  output c;
  wire w1, w2;
  nor_gate n1(a, b, w1);
  nor_gate n2(w1, w1, c);
endmodule
