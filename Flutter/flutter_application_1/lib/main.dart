import 'package:flutter/material.dart';

import './Questao.dart';

void main() => runApp(new PerguntaApp());

class PerguntaAppState extends State<PerguntaApp> {
  var perguntaSelecionada = 0;

  void responder() {
    setState(() {
      perguntaSelecionada++;
    });
    print('Respondido, pergunta atual é ${perguntaSelecionada}');
  }

  @override
  Widget build(BuildContext context) {
    List<String> perguntas = [
      'Quem é o mais inteligente da sala?',
      'Qual a materia mais legal?',
    ];

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Minhas Perguntas"),
          backgroundColor: Color.fromARGB(99, 0, 0, 255),
        ),
        body: Column(
          children: [
            Questao(perguntas.elementAt(perguntaSelecionada)),
            ElevatedButton(onPressed: responder, child: Text('Resposta 1')),
            ElevatedButton(onPressed: responder, child: Text('Resposta 2')),
            ElevatedButton(onPressed: responder, child: Text('Resposta 3'))
          ],
        ),
      ),
    );
  }
}

class PerguntaApp extends StatefulWidget {
  @override
  PerguntaAppState createState() {
    return PerguntaAppState();
  }
}
