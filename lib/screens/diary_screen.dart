import 'dart:convert';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:image_picker/image_picker.dart';

class DiaryScreen extends StatefulWidget {
  final int plantId;
  final String plantName;
  DiaryScreen({required this.plantId, required this.plantName});

  @override
  _DiaryScreenState createState() => _DiaryScreenState();
}

class _DiaryScreenState extends State<DiaryScreen> {
  final _controller = TextEditingController();
  List<dynamic> entries = [];
  final picker = ImagePicker();

  @override
  void initState() {
    super.initState();
    loadEntries();
  }

  Future<void> loadEntries() async {
    final prefs = await SharedPreferences.getInstance();
    final key = 'diary_${widget.plantId}';
    final raw = prefs.getString(key);
    if (raw != null) {
      setState(() {
        entries = json.decode(raw);
      });
    }
  }

  Future<void> saveEntries() async {
    final prefs = await SharedPreferences.getInstance();
    final key = 'diary_${widget.plantId}';
    await prefs.setString(key, json.encode(entries));
  }

  Future<void> addEntry({String? imagePath}) async {
    if (_controller.text.trim().isEmpty && imagePath == null) return;
    final entry = {
      'date': DateTime.now().toIso8601String(),
      'note': _controller.text.trim(),
      'image': imagePath ?? '',
    };
    setState(() {
      entries.insert(0, entry);
      _controller.clear();
    });
    await saveEntries();
  }

  Future<void> pickImage() async {
    final picked = await picker.pickImage(source: ImageSource.camera, imageQuality: 70);
    if (picked != null) {
      await addEntry(imagePath: picked.path);
    }
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Widget _buildEntry(item) {
    return Card(
      margin: EdgeInsets.symmetric(vertical: 8),
      child: ListTile(
        title: Text(item['note'] ?? ''),
        subtitle: Text(item['date'] ?? ''),
        leading: item['image'] != null && (item['image'] as String).isNotEmpty
            ? Image.file(File(item['image']), width: 56, fit: BoxFit.cover)
            : null,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Dagbok - ${widget.plantName}'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(12.0),
        child: Column(
          children: [
            TextField(
              controller: _controller,
              decoration: InputDecoration(
                labelText: 'Skriv notat...',
                suffixIcon: IconButton(
                  icon: Icon(Icons.send),
                  onPressed: () => addEntry(),
                ),
              ),
            ),
            SizedBox(height: 8),
            Row(
              children: [
                ElevatedButton.icon(
                  onPressed: pickImage,
                  icon: Icon(Icons.camera_alt),
                  label: Text('Ta bilde'),
                ),
              ],
            ),
            SizedBox(height: 12),
            Expanded(
              child: entries.isEmpty
                  ? Center(child: Text('Ingen oppføringer ennå'))
                  : ListView.builder(
                      itemCount: entries.length,
                      itemBuilder: (context, i) => _buildEntry(entries[i]),
                    ),
            ),
          ],
        ),
      ),
    );
  }
}
