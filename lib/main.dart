import 'package:flutter/material.dart';
import 'screens/plant_list_screen.dart';

void main() {
  runApp(PlanteguideApp());
}

class PlanteguideApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Planteguide Ibestad',
      theme: ThemeData(
        primarySwatch: Colors.green,
      ),
      home: PlantListScreen(),
    );
  }
}
