import "dart:ffi";
import "dart:io";

void main() {
  const double pi = 13.1415;
  //final double pi;

  //print('Qual o raio');
  //raio = double.parse(stdin.readLineSync()!);
  //double resultado = ((2 * pi) * raio);

  // print("A circuferencia e de: ${resultado}");

  if (pi == 13.1415) {
    print("Valor Correto");
  } else {
    print("Valor errado");
  }
}
