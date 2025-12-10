import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import '../models/plant.dart';
import 'plant_detail_screen.dart';

class PlantListScreen extends StatefulWidget {
  @override
  _PlantListScreenState createState() => _PlantListScreenState();
}

class _PlantListScreenState extends State<PlantListScreen> {
  List<Plant> plants = [];

  @override
  void initState() {
    super.initState();
    loadPlants();
  }

  Future<void> loadPlants() async {
    final data = await rootBundle.loadString('assets/plants.json');
    final List<dynamic> jsonResult = json.decode(data);
    setState(() {
      plants = jsonResult.map((j) => Plant.fromJson(j)).toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Planteguide Ibestad'),
      ),
      body: ListView.builder(
        itemCount: plants.length,
        itemBuilder: (context, index) {
          final p = plants[index];
          return ListTile(
            title: Text(p.name),
            subtitle: Text(p.sowing),
            trailing: Text('${p.daysToMaturity} dager'),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => PlantDetailScreen(plant: p)),
              );
            },
          );
        },
      ),
    );
  }
}
