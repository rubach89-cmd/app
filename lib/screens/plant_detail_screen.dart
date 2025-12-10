import 'package:flutter/material.dart';
import '../models/plant.dart';
import 'diary_screen.dart';

class PlantDetailScreen extends StatelessWidget {
  final Plant plant;
  PlantDetailScreen({required this.plant});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(plant.name),
        actions: [
          IconButton(
            icon: Icon(Icons.book),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (_) => DiaryScreen(plantId: plant.id, plantName: plant.name),
                ),
              );
            },
          )
        ],
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(plant.description, style: TextStyle(fontSize: 16)),
            SizedBox(height: 12),
            Text('Såtid: ${plant.sowing}', style: TextStyle(fontWeight: FontWeight.bold)),
            SizedBox(height: 8),
            Text('Modningstid: ${plant.daysToMaturity} dager'),
            SizedBox(height: 8),
            Text('Plassbehov: ${plant.spacing}'),
            SizedBox(height: 12),
            Text('Tips:', style: TextStyle(fontWeight: FontWeight.bold)),
            SizedBox(height: 6),
            Text(plant.tips),
          ],
        ),
      ),
    );
  }
}
