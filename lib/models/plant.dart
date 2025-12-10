class Plant {
  final int id;
  final String name;
  final String description;
  final String sowing;
  final int daysToMaturity;
  final String spacing;
  final String tips;

  Plant({
    required this.id,
    required this.name,
    required this.description,
    required this.sowing,
    required this.daysToMaturity,
    required this.spacing,
    required this.tips,
  });

  factory Plant.fromJson(Map<String, dynamic> json) {
    return Plant(
      id: json['id'],
      name: json['name'],
      description: json['description'],
      sowing: json['sowing'],
      daysToMaturity: json['days_to_maturity'],
      spacing: json['spacing'],
      tips: json['tips'],
    );
  }
}
