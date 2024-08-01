void main() {
  int idade = 18;
  double Altura = 1.80;
  String nome = "Gustavo";
  bool chuva = true;

  dynamic qualmeuvalor = 123;
  //print("O Minha idade é " + idade.toString());
  print(qualmeuvalor.runtimeType);

  List<String> frutas = [" maça", " banana", "pera", "carambola", "tomatè"];
  print(frutas.length);
  print(frutas[2]);
  print(frutas.elementAt(1));

  Map<String, dynamic> registrouser = {
    "Nome": 'Gustavo',
    "FormaPag": 'Debito',
    " Valor": '200'
  };
  print(registrouser);

  Set<int> numeros = {1, 2, 4, 4};
  print(numeros);
}
