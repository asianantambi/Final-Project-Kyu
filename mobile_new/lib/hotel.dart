import 'dart:js';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/src/foundation/key.dart';
import 'package:flutter/src/widgets/framework.dart';

class MyWidget extends StatelessWidget {
  const MyWidget({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {}
}

// fetching from db

Future<List<dynamic>> getUsers() async {
  var widget;
  QuerySnapshot querySnapshot = await FirebaseFirestore.instance
      .collection('room_data')
      .where('userId', isNotEqualTo: widget._signUpData.uID)
      .get();

  // Get data from docs and convert map to List
  final allData = querySnapshot.docs.map((doc) => doc.data()).toList();

  //  setState(() {
  var userData = allData;
  // });

  for (var i = 0; i < allData.length; i++) {
    var room_data;
    // room_data.add(userData[i]["roomType"].toString());
    roomType:
    var roomType;
    (roomType.of(context).settings.arguments as Map)["roomType"].toString();
  }

  Future<List> room_data;

  widget._HotelItem.roomType = room_data;

  widget._HotelItem.roomNo = room_data;
  widget._HotelItem.facilities = room_data;

  widget._HotelItem.bookingFee = room_data;

  widget._HotelItem.price = room_data;

  return room_data;
}
