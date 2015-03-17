
/** city indexes **/
db.getCollection("city").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** makes indexes **/
db.getCollection("makes").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** models indexes **/
db.getCollection("models").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** passport indexes **/
db.getCollection("passport").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** region indexes **/
db.getCollection("region").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** styles indexes **/
db.getCollection("styles").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** user indexes **/
db.getCollection("user").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** user indexes **/
db.getCollection("user").ensureIndex({
  "email": NumberInt(1)
},{
  "unique": true
});

/** city records **/
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a251884f15bcc41e13"),
  "id": NumberInt(1),
  "region_id": NumberInt(16),
  "name": "Абазовка",
  "phone_code": "5322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a251884f15bcc41e14"),
  "id": NumberInt(2),
  "region_id": NumberInt(15),
  "name": "Авангард",
  "phone_code": "4851"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a251884f15bcc41e15"),
  "id": NumberInt(3),
  "region_id": NumberInt(5),
  "name": "Авдеевка",
  "phone_code": "622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a251884f15bcc41e16"),
  "id": NumberInt(4),
  "region_id": NumberInt(1),
  "name": "Аграрное",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a251884f15bcc41e17"),
  "id": NumberInt(5),
  "region_id": NumberInt(2),
  "name": "Агрономичное",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a251884f15bcc41e18"),
  "id": NumberInt(6),
  "region_id": NumberInt(14),
  "name": "Агрономия",
  "phone_code": "5132"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a251884f15bcc41e19"),
  "id": NumberInt(7),
  "region_id": NumberInt(22),
  "name": "Адамполь",
  "phone_code": "3850"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a251884f15bcc41e1a"),
  "id": NumberInt(8),
  "region_id": NumberInt(11),
  "name": "Аджамка",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a251884f15bcc41e1b"),
  "id": NumberInt(9),
  "region_id": NumberInt(1),
  "name": "Азовское",
  "phone_code": "6564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a251884f15bcc41e1c"),
  "id": NumberInt(10),
  "region_id": NumberInt(8),
  "name": "Акимовка",
  "phone_code": "6131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a251884f15bcc41e1d"),
  "id": NumberInt(11),
  "region_id": NumberInt(11),
  "name": "Александрия",
  "phone_code": "5235"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a251884f15bcc41e1e"),
  "id": NumberInt(12),
  "region_id": NumberInt(11),
  "name": "Александровка",
  "phone_code": "5242"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e1f"),
  "id": NumberInt(13),
  "region_id": NumberInt(5),
  "name": "Александровка",
  "phone_code": "6269"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e20"),
  "id": NumberInt(14),
  "region_id": NumberInt(12),
  "name": "Александровка",
  "phone_code": "6434"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e21"),
  "id": NumberInt(15),
  "region_id": NumberInt(15),
  "name": "Александровка",
  "phone_code": "4868"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e22"),
  "id": NumberInt(16),
  "region_id": NumberInt(15),
  "name": "Александровка",
  "phone_code": "4855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e23"),
  "id": NumberInt(17),
  "region_id": NumberInt(20),
  "name": "Александровка",
  "phone_code": "5764"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e24"),
  "id": NumberInt(18),
  "region_id": NumberInt(10),
  "name": "Александровка",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e25"),
  "id": NumberInt(19),
  "region_id": NumberInt(12),
  "name": "Александровск",
  "phone_code": "642"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e26"),
  "id": NumberInt(20),
  "region_id": NumberInt(4),
  "name": "Александрополь",
  "phone_code": "5616"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e27"),
  "id": NumberInt(21),
  "region_id": NumberInt(4),
  "name": "Алексеевка",
  "phone_code": "5662"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e28"),
  "id": NumberInt(22),
  "region_id": NumberInt(5),
  "name": "Алексеево-Дружковка",
  "phone_code": "6272"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e29"),
  "id": NumberInt(23),
  "region_id": NumberInt(12),
  "name": "Алмазная",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e2a"),
  "id": NumberInt(24),
  "region_id": NumberInt(18),
  "name": "Алтыновка",
  "phone_code": "5453"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e2b"),
  "id": NumberInt(25),
  "region_id": NumberInt(1),
  "name": "Алупка",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e2c"),
  "id": NumberInt(26),
  "region_id": NumberInt(1),
  "name": "Алушта",
  "phone_code": "6560"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e2d"),
  "id": NumberInt(27),
  "region_id": NumberInt(12),
  "name": "Алчевск",
  "phone_code": "6442"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e2e"),
  "id": NumberInt(28),
  "region_id": NumberInt(5),
  "name": "Амвросиевка",
  "phone_code": "6259"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e2f"),
  "id": NumberInt(29),
  "region_id": NumberInt(15),
  "name": "Ананьев",
  "phone_code": "4863"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e30"),
  "id": NumberInt(30),
  "region_id": NumberInt(7),
  "name": "Андреевка",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e31"),
  "id": NumberInt(31),
  "region_id": NumberInt(6),
  "name": "Андреевка",
  "phone_code": "4231"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e32"),
  "id": NumberInt(32),
  "region_id": NumberInt(8),
  "name": "Андреевка",
  "phone_code": "6153"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e33"),
  "id": NumberInt(33),
  "region_id": NumberInt(4),
  "name": "Андреевка",
  "phone_code": "5638"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e34"),
  "id": NumberInt(34),
  "region_id": NumberInt(4),
  "name": "Андреевка",
  "phone_code": "5638"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e35"),
  "id": NumberInt(35),
  "region_id": NumberInt(18),
  "name": "Андрияшивка",
  "phone_code": "5448"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e36"),
  "id": NumberInt(36),
  "region_id": NumberInt(6),
  "name": "Андрушевка",
  "phone_code": "4136"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e37"),
  "id": NumberInt(37),
  "region_id": NumberInt(6),
  "name": "Андрушки",
  "phone_code": "4137"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e38"),
  "id": NumberInt(38),
  "region_id": NumberInt(22),
  "name": "Аннополь",
  "phone_code": "3842"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e39"),
  "id": NumberInt(39),
  "region_id": NumberInt(7),
  "name": "Анталовцы",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e3a"),
  "id": NumberInt(40),
  "region_id": NumberInt(21),
  "name": "Антоновка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e3b"),
  "id": NumberInt(41),
  "region_id": NumberInt(17),
  "name": "Антоновка",
  "phone_code": "3634"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e3c"),
  "id": NumberInt(42),
  "region_id": NumberInt(17),
  "name": "Антополь",
  "phone_code": "0362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e3d"),
  "id": NumberInt(43),
  "region_id": NumberInt(12),
  "name": "Антрацит",
  "phone_code": "6431"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e3e"),
  "id": NumberInt(44),
  "region_id": NumberInt(4),
  "name": "Апостолово",
  "phone_code": "5656"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e3f"),
  "id": NumberInt(45),
  "region_id": NumberInt(14),
  "name": "Арбузинка",
  "phone_code": "5132"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e40"),
  "id": NumberInt(46),
  "region_id": NumberInt(1),
  "name": "Армянск",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e41"),
  "id": NumberInt(47),
  "region_id": NumberInt(5),
  "name": "Артема",
  "phone_code": "6272"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e42"),
  "id": NumberInt(48),
  "region_id": NumberInt(16),
  "name": "Артемовка",
  "phone_code": "5347"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e43"),
  "id": NumberInt(49),
  "region_id": NumberInt(5),
  "name": "Артемово",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e44"),
  "id": NumberInt(50),
  "region_id": NumberInt(12),
  "name": "Артемовск",
  "phone_code": "6441"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e45"),
  "id": NumberInt(51),
  "region_id": NumberInt(5),
  "name": "Артемовск",
  "phone_code": "6274"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e46"),
  "id": NumberInt(52),
  "region_id": NumberInt(5),
  "name": "Артемовское",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e47"),
  "id": NumberInt(53),
  "region_id": NumberInt(15),
  "name": "Арциз",
  "phone_code": "4845"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e48"),
  "id": NumberInt(54),
  "region_id": NumberInt(21),
  "name": "Аскания-Нова",
  "phone_code": "5538"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e49"),
  "id": NumberInt(55),
  "region_id": NumberInt(4),
  "name": "Аулы",
  "phone_code": "5617"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e4a"),
  "id": NumberInt(56),
  "region_id": NumberInt(18),
  "name": "Ахтырка",
  "phone_code": "5446"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e4b"),
  "id": NumberInt(57),
  "region_id": NumberInt(1),
  "name": "Аэрофлотский",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e4c"),
  "id": NumberInt(58),
  "region_id": NumberInt(20),
  "name": "Бабаи",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e4d"),
  "id": NumberInt(59),
  "region_id": NumberInt(23),
  "name": "Бабанка",
  "phone_code": "4744"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e4e"),
  "id": NumberInt(60),
  "region_id": NumberInt(2),
  "name": "Бабин",
  "phone_code": "4345"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e4f"),
  "id": NumberInt(61),
  "region_id": NumberInt(17),
  "name": "Бабин",
  "phone_code": "3650"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e50"),
  "id": NumberInt(62),
  "region_id": NumberInt(10),
  "name": "Бабинцы",
  "phone_code": "4477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e51"),
  "id": NumberInt(63),
  "region_id": NumberInt(1),
  "name": "Багерово",
  "phone_code": "6557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e52"),
  "id": NumberInt(64),
  "region_id": NumberInt(10),
  "name": "Багрин",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e53"),
  "id": NumberInt(65),
  "region_id": NumberInt(17),
  "name": "Базальтовое",
  "phone_code": "3657"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e54"),
  "id": NumberInt(66),
  "region_id": NumberInt(23),
  "name": "Байбузы",
  "phone_code": "472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e55"),
  "id": NumberInt(67),
  "region_id": NumberInt(19),
  "name": "Байковцы",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e56"),
  "id": NumberInt(68),
  "region_id": NumberInt(12),
  "name": "Байрачки",
  "phone_code": "6441"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e57"),
  "id": NumberInt(69),
  "region_id": NumberInt(8),
  "name": "Балабино",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e58"),
  "id": NumberInt(70),
  "region_id": NumberInt(20),
  "name": "Балаклея",
  "phone_code": "5749"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e59"),
  "id": NumberInt(71),
  "region_id": NumberInt(2),
  "name": "Балки",
  "phone_code": "43410"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e5a"),
  "id": NumberInt(72),
  "region_id": NumberInt(4),
  "name": "Баловка",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e5b"),
  "id": NumberInt(73),
  "region_id": NumberInt(14),
  "name": "Баловное",
  "phone_code": "5167"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e5c"),
  "id": NumberInt(74),
  "region_id": NumberInt(15),
  "name": "Балта",
  "phone_code": "4866"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e5d"),
  "id": NumberInt(75),
  "region_id": NumberInt(14),
  "name": "Бандурка",
  "phone_code": "5161"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e5e"),
  "id": NumberInt(76),
  "region_id": NumberInt(18),
  "name": "Баничи",
  "phone_code": "5444"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e5f"),
  "id": NumberInt(77),
  "region_id": NumberInt(13),
  "name": "Баня лысовицкая",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e60"),
  "id": NumberInt(78),
  "region_id": NumberInt(2),
  "name": "Бар",
  "phone_code": "43410"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e61"),
  "id": NumberInt(79),
  "region_id": NumberInt(7),
  "name": "Баранинцы",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e62"),
  "id": NumberInt(80),
  "region_id": NumberInt(6),
  "name": "Барановка",
  "phone_code": "4144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e63"),
  "id": NumberInt(81),
  "region_id": NumberInt(20),
  "name": "Барвенково",
  "phone_code": "5757"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e64"),
  "id": NumberInt(82),
  "region_id": NumberInt(7),
  "name": "Барвинок",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e65"),
  "id": NumberInt(83),
  "region_id": NumberInt(14),
  "name": "Бармашово",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e66"),
  "id": NumberInt(84),
  "region_id": NumberInt(10),
  "name": "Барышевка",
  "phone_code": "4476"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e67"),
  "id": NumberInt(85),
  "region_id": NumberInt(13),
  "name": "Басовка",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e68"),
  "id": NumberInt(86),
  "region_id": NumberInt(24),
  "name": "Батурин",
  "phone_code": "4635"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e69"),
  "id": NumberInt(87),
  "region_id": NumberInt(7),
  "name": "Батьево",
  "phone_code": "3141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e6a"),
  "id": NumberInt(88),
  "region_id": NumberInt(22),
  "name": "Бахматовцы",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e6b"),
  "id": NumberInt(89),
  "region_id": NumberInt(24),
  "name": "Бахмач",
  "phone_code": "4635"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e6c"),
  "id": NumberInt(90),
  "region_id": NumberInt(5),
  "name": "Бахмутское",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e6d"),
  "id": NumberInt(91),
  "region_id": NumberInt(1),
  "name": "Бахчисарай",
  "phone_code": "6554"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e6e"),
  "id": NumberInt(92),
  "region_id": NumberInt(14),
  "name": "Баштанка",
  "phone_code": "5158"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e6f"),
  "id": NumberInt(93),
  "region_id": NumberInt(7),
  "name": "Бедевля",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e70"),
  "id": NumberInt(94),
  "region_id": NumberInt(20),
  "name": "Безлюдовка",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e71"),
  "id": NumberInt(95),
  "region_id": NumberInt(10),
  "name": "Безпятное",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e72"),
  "id": NumberInt(96),
  "region_id": NumberInt(24),
  "name": "Безугловка",
  "phone_code": "4631"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e73"),
  "id": NumberInt(97),
  "region_id": NumberInt(19),
  "name": "Белая",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e74"),
  "id": NumberInt(98),
  "region_id": NumberInt(5),
  "name": "Белая гора",
  "phone_code": "6272"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e75"),
  "id": NumberInt(99),
  "region_id": NumberInt(6),
  "name": "Белая Криница",
  "phone_code": "4132"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e76"),
  "id": NumberInt(100),
  "region_id": NumberInt(17),
  "name": "Белая криница",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e77"),
  "id": NumberInt(101),
  "region_id": NumberInt(10),
  "name": "Белая Церковь",
  "phone_code": "4463"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e78"),
  "id": NumberInt(102),
  "region_id": NumberInt(15),
  "name": "Белгород-Днестровский",
  "phone_code": "4849"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e79"),
  "id": NumberInt(103),
  "region_id": NumberInt(13),
  "name": "Белз",
  "phone_code": "3257"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e7a"),
  "id": NumberInt(104),
  "region_id": NumberInt(16),
  "name": "Белики",
  "phone_code": "5343"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e7b"),
  "id": NumberInt(105),
  "region_id": NumberInt(3),
  "name": "Белин",
  "phone_code": "3352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e7c"),
  "id": NumberInt(106),
  "region_id": NumberInt(15),
  "name": "Белино",
  "phone_code": "4866"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e7d"),
  "id": NumberInt(107),
  "region_id": NumberInt(5),
  "name": "Белицкое",
  "phone_code": "6277"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e7e"),
  "id": NumberInt(108),
  "region_id": NumberInt(7),
  "name": "Белки",
  "phone_code": "3144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e7f"),
  "id": NumberInt(109),
  "region_id": NumberInt(19),
  "name": "Белобожница",
  "phone_code": "3552"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e80"),
  "id": NumberInt(110),
  "region_id": NumberInt(12),
  "name": "Беловодск",
  "phone_code": "6466"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e81"),
  "id": NumberInt(111),
  "region_id": NumberInt(18),
  "name": "Беловоды",
  "phone_code": "542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e82"),
  "id": NumberInt(112),
  "region_id": NumberInt(1),
  "name": "Белоглинка",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e83"),
  "id": NumberInt(113),
  "region_id": NumberInt(10),
  "name": "Белогородка",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e84"),
  "id": NumberInt(114),
  "region_id": NumberInt(1),
  "name": "Белогорск",
  "phone_code": "6559"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e85"),
  "id": NumberInt(115),
  "region_id": NumberInt(22),
  "name": "Белогорье",
  "phone_code": "3841"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e86"),
  "id": NumberInt(116),
  "region_id": NumberInt(12),
  "name": "Белое",
  "phone_code": "642"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e87"),
  "id": NumberInt(117),
  "region_id": NumberInt(21),
  "name": "Белозерка",
  "phone_code": "5547"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e88"),
  "id": NumberInt(118),
  "region_id": NumberInt(5),
  "name": "Белозерское",
  "phone_code": "6277"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e89"),
  "id": NumberInt(119),
  "region_id": NumberInt(23),
  "name": "Белозорье",
  "phone_code": "472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e8a"),
  "id": NumberInt(120),
  "region_id": NumberInt(19),
  "name": "Белокриница",
  "phone_code": "3546"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e8b"),
  "id": NumberInt(121),
  "region_id": NumberInt(5),
  "name": "Белокузьминовка",
  "phone_code": "6272"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e8c"),
  "id": NumberInt(122),
  "region_id": NumberInt(12),
  "name": "Белокуракино",
  "phone_code": "6462"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e8d"),
  "id": NumberInt(123),
  "region_id": NumberInt(18),
  "name": "Белополье",
  "phone_code": "5443"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e8e"),
  "id": NumberInt(124),
  "region_id": NumberInt(12),
  "name": "Белореченский",
  "phone_code": "6436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e8f"),
  "id": NumberInt(125),
  "region_id": NumberInt(24),
  "name": "Белошицкая слобода",
  "phone_code": "4657"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e90"),
  "id": NumberInt(126),
  "region_id": NumberInt(20),
  "name": "Белый колодезь",
  "phone_code": "5741"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e91"),
  "id": NumberInt(127),
  "region_id": NumberInt(15),
  "name": "Беляевка",
  "phone_code": "4852"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e92"),
  "id": NumberInt(128),
  "region_id": NumberInt(6),
  "name": "Бердичев",
  "phone_code": "4143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e93"),
  "id": NumberInt(129),
  "region_id": NumberInt(8),
  "name": "Бердянск",
  "phone_code": "6153"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e94"),
  "id": NumberInt(130),
  "region_id": NumberInt(8),
  "name": "Бердянское",
  "phone_code": "6153"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e95"),
  "id": NumberInt(131),
  "region_id": NumberInt(7),
  "name": "Берегово",
  "phone_code": "3141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e96"),
  "id": NumberInt(132),
  "region_id": NumberInt(25),
  "name": "Берегомет",
  "phone_code": "3730"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e97"),
  "id": NumberInt(133),
  "region_id": NumberInt(19),
  "name": "Бережаны",
  "phone_code": "3548"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e98"),
  "id": NumberInt(134),
  "region_id": NumberInt(11),
  "name": "Бережинка",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e99"),
  "id": NumberInt(135),
  "region_id": NumberInt(18),
  "name": "Береза",
  "phone_code": "5444"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e9a"),
  "id": NumberInt(136),
  "region_id": NumberInt(14),
  "name": "Березанка",
  "phone_code": "5153"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e9b"),
  "id": NumberInt(137),
  "region_id": NumberInt(24),
  "name": "Березанка",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e9c"),
  "id": NumberInt(138),
  "region_id": NumberInt(10),
  "name": "Березань",
  "phone_code": "4476"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e9d"),
  "id": NumberInt(139),
  "region_id": NumberInt(13),
  "name": "Березина",
  "phone_code": "3241"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e9e"),
  "id": NumberInt(140),
  "region_id": NumberInt(15),
  "name": "Березино",
  "phone_code": "4847"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41e9f"),
  "id": NumberInt(141),
  "region_id": NumberInt(24),
  "name": "Березна",
  "phone_code": "4644"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ea0"),
  "id": NumberInt(142),
  "region_id": NumberInt(14),
  "name": "Березнеговатое",
  "phone_code": "5168"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ea1"),
  "id": NumberInt(143),
  "region_id": NumberInt(17),
  "name": "Березно",
  "phone_code": "3653"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ea2"),
  "id": NumberInt(144),
  "region_id": NumberInt(20),
  "name": "Березовка",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ea3"),
  "id": NumberInt(145),
  "region_id": NumberInt(15),
  "name": "Березовка",
  "phone_code": "4856"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ea4"),
  "id": NumberInt(146),
  "region_id": NumberInt(7),
  "name": "Березово",
  "phone_code": "3142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ea5"),
  "id": NumberInt(147),
  "region_id": NumberInt(20),
  "name": "Берека",
  "phone_code": "05748"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ea6"),
  "id": NumberInt(148),
  "region_id": NumberInt(3),
  "name": "Берестечко",
  "phone_code": "3379"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ea7"),
  "id": NumberInt(149),
  "region_id": NumberInt(17),
  "name": "Берестовец",
  "phone_code": "3657"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ea8"),
  "id": NumberInt(150),
  "region_id": NumberInt(21),
  "name": "Берислав",
  "phone_code": "5546"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ea9"),
  "id": NumberInt(151),
  "region_id": NumberInt(2),
  "name": "Бершадь",
  "phone_code": "4352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eaa"),
  "id": NumberInt(152),
  "region_id": NumberInt(10),
  "name": "Беспечная",
  "phone_code": "4468"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eab"),
  "id": NumberInt(153),
  "region_id": NumberInt(6),
  "name": "Бехи",
  "phone_code": "04142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eac"),
  "id": NumberInt(154),
  "region_id": NumberInt(16),
  "name": "Биологичное",
  "phone_code": "532"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ead"),
  "id": NumberInt(155),
  "region_id": NumberInt(20),
  "name": "Бирки",
  "phone_code": "5747"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eae"),
  "id": NumberInt(156),
  "region_id": NumberInt(13),
  "name": "Бисковичи",
  "phone_code": "3236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eaf"),
  "id": NumberInt(157),
  "region_id": NumberInt(1),
  "name": "Ближнее",
  "phone_code": "6562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eb0"),
  "id": NumberInt(158),
  "region_id": NumberInt(20),
  "name": "Близнюки",
  "phone_code": "5754"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eb1"),
  "id": NumberInt(159),
  "region_id": NumberInt(10),
  "name": "Блиставица",
  "phone_code": "4477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eb2"),
  "id": NumberInt(160),
  "region_id": NumberInt(24),
  "name": "Бобрик",
  "phone_code": "4631"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eb3"),
  "id": NumberInt(161),
  "region_id": NumberInt(12),
  "name": "Бобриково",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eb4"),
  "id": NumberInt(162),
  "region_id": NumberInt(11),
  "name": "Бобринец",
  "phone_code": "5257"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eb5"),
  "id": NumberInt(163),
  "region_id": NumberInt(13),
  "name": "Бобрка",
  "phone_code": "3263"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eb6"),
  "id": NumberInt(164),
  "region_id": NumberInt(24),
  "name": "Бобровица",
  "phone_code": "4632"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eb7"),
  "id": NumberInt(165),
  "region_id": NumberInt(12),
  "name": "Боброво",
  "phone_code": "6452"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eb8"),
  "id": NumberInt(166),
  "region_id": NumberInt(7),
  "name": "Богдан",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eb9"),
  "id": NumberInt(167),
  "region_id": NumberInt(11),
  "name": "Богдановка",
  "phone_code": "6556"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eba"),
  "id": NumberInt(168),
  "region_id": NumberInt(18),
  "name": "Богдановка",
  "phone_code": "5449"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ebb"),
  "id": NumberInt(169),
  "region_id": NumberInt(10),
  "name": "Богдановка",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ebc"),
  "id": NumberInt(170),
  "region_id": NumberInt(10),
  "name": "Богдановка",
  "phone_code": "4475"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ebd"),
  "id": NumberInt(171),
  "region_id": NumberInt(22),
  "name": "Богдановцы",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ebe"),
  "id": NumberInt(172),
  "region_id": NumberInt(20),
  "name": "Богодухов",
  "phone_code": "5758"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ebf"),
  "id": NumberInt(173),
  "region_id": NumberInt(9),
  "name": "Богородчаны",
  "phone_code": "3471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ec0"),
  "id": NumberInt(174),
  "region_id": NumberInt(5),
  "name": "Богоявленка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ec1"),
  "id": NumberInt(175),
  "region_id": NumberInt(4),
  "name": "Богуслав",
  "phone_code": "5672"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ec2"),
  "id": NumberInt(176),
  "region_id": NumberInt(10),
  "name": "Богуслав",
  "phone_code": "4461"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ec3"),
  "id": NumberInt(177),
  "region_id": NumberInt(9),
  "name": "Боднаров",
  "phone_code": "3472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ec4"),
  "id": NumberInt(178),
  "region_id": NumberInt(16),
  "name": "Божковское",
  "phone_code": "5322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ec5"),
  "id": NumberInt(179),
  "region_id": NumberInt(19),
  "name": "Боков",
  "phone_code": "3542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ec6"),
  "id": NumberInt(180),
  "region_id": NumberInt(15),
  "name": "Болград",
  "phone_code": "4846"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ec7"),
  "id": NumberInt(181),
  "region_id": NumberInt(9),
  "name": "Болехов",
  "phone_code": "3477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ec8"),
  "id": NumberInt(182),
  "region_id": NumberInt(11),
  "name": "Большая Виска",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ec9"),
  "id": NumberInt(183),
  "region_id": NumberInt(17),
  "name": "Большой Олексин",
  "phone_code": "3622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eca"),
  "id": NumberInt(184),
  "region_id": NumberInt(1),
  "name": "Бондаренково",
  "phone_code": "6557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ecb"),
  "id": NumberInt(185),
  "region_id": NumberInt(6),
  "name": "Бондари",
  "phone_code": "4148"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ecc"),
  "id": NumberInt(186),
  "region_id": NumberInt(6),
  "name": "Бондаривка",
  "phone_code": "04142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ecd"),
  "id": NumberInt(187),
  "region_id": NumberInt(3),
  "name": "Боратин",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ece"),
  "id": NumberInt(188),
  "region_id": NumberInt(24),
  "name": "Борзна",
  "phone_code": "4653"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ecf"),
  "id": NumberInt(189),
  "region_id": NumberInt(13),
  "name": "Борислав",
  "phone_code": "3248"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ed0"),
  "id": NumberInt(190),
  "region_id": NumberInt(10),
  "name": "Борисполь",
  "phone_code": "4495"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ed1"),
  "id": NumberInt(191),
  "region_id": NumberInt(16),
  "name": "Борки",
  "phone_code": "5353"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ed2"),
  "id": NumberInt(192),
  "region_id": NumberInt(13),
  "name": "Борки",
  "phone_code": "3259"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ed3"),
  "id": NumberInt(193),
  "region_id": NumberInt(20),
  "name": "Боровая",
  "phone_code": "5759"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ed4"),
  "id": NumberInt(194),
  "region_id": NumberInt(10),
  "name": "Боровая",
  "phone_code": "4465"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ed5"),
  "id": NumberInt(195),
  "region_id": NumberInt(12),
  "name": "Боровеньки",
  "phone_code": "6454"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ed6"),
  "id": NumberInt(196),
  "region_id": NumberInt(12),
  "name": "Боровское",
  "phone_code": "6452"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ed7"),
  "id": NumberInt(197),
  "region_id": NumberInt(25),
  "name": "Боровцы",
  "phone_code": "3736"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ed8"),
  "id": NumberInt(198),
  "region_id": NumberInt(10),
  "name": "Бородянка",
  "phone_code": "4477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ed9"),
  "id": NumberInt(199),
  "region_id": NumberInt(21),
  "name": "Борозенское",
  "phone_code": "4349"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eda"),
  "id": NumberInt(200),
  "region_id": NumberInt(18),
  "name": "Боромля",
  "phone_code": "5458"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41edb"),
  "id": NumberInt(201),
  "region_id": NumberInt(24),
  "name": "Боромыки",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41edc"),
  "id": NumberInt(202),
  "region_id": NumberInt(7),
  "name": "Боронява",
  "phone_code": "3142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41edd"),
  "id": NumberInt(203),
  "region_id": NumberInt(10),
  "name": "Бортничи",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ede"),
  "id": NumberInt(204),
  "region_id": NumberInt(19),
  "name": "Борщев",
  "phone_code": "3541"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41edf"),
  "id": NumberInt(205),
  "region_id": NumberInt(15),
  "name": "Борщи",
  "phone_code": "4862"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ee0"),
  "id": NumberInt(206),
  "region_id": NumberInt(2),
  "name": "Бохоники",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ee1"),
  "id": NumberInt(207),
  "region_id": NumberInt(25),
  "name": "Бояны",
  "phone_code": "3733"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ee2"),
  "id": NumberInt(208),
  "region_id": NumberInt(10),
  "name": "Боярка",
  "phone_code": "4498"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ee3"),
  "id": NumberInt(209),
  "region_id": NumberInt(4),
  "name": "Брагиновка",
  "phone_code": "5671"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ee4"),
  "id": NumberInt(210),
  "region_id": NumberInt(4),
  "name": "Брагиновка",
  "phone_code": "5671"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ee5"),
  "id": NumberInt(211),
  "region_id": NumberInt(2),
  "name": "Браилов",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ee6"),
  "id": NumberInt(212),
  "region_id": NumberInt(14),
  "name": "Братское",
  "phone_code": "5131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ee7"),
  "id": NumberInt(213),
  "region_id": NumberInt(4),
  "name": "Братское",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ee8"),
  "id": NumberInt(214),
  "region_id": NumberInt(2),
  "name": "Брацлав",
  "phone_code": "4331"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ee9"),
  "id": NumberInt(215),
  "region_id": NumberInt(24),
  "name": "Бригинцы",
  "phone_code": "4646"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eea"),
  "id": NumberInt(216),
  "region_id": NumberInt(21),
  "name": "Брилевка",
  "phone_code": "5542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eeb"),
  "id": NumberInt(217),
  "region_id": NumberInt(15),
  "name": "Бритовка",
  "phone_code": "4849"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eec"),
  "id": NumberInt(218),
  "region_id": NumberInt(10),
  "name": "Бровары",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eed"),
  "id": NumberInt(219),
  "region_id": NumberInt(2),
  "name": "Бродецкое",
  "phone_code": "4342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eee"),
  "id": NumberInt(220),
  "region_id": NumberInt(13),
  "name": "Броды",
  "phone_code": "3266"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eef"),
  "id": NumberInt(221),
  "region_id": NumberInt(6),
  "name": "Броницкая Гута",
  "phone_code": "4141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ef0"),
  "id": NumberInt(222),
  "region_id": NumberInt(9),
  "name": "Брошнив",
  "phone_code": "3474"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ef1"),
  "id": NumberInt(223),
  "region_id": NumberInt(9),
  "name": "Брошнив-осада",
  "phone_code": "3474"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ef2"),
  "id": NumberInt(224),
  "region_id": NumberInt(6),
  "name": "Брусилов",
  "phone_code": "4162"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ef3"),
  "id": NumberInt(225),
  "region_id": NumberInt(13),
  "name": "Брюховичи",
  "phone_code": "322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ef4"),
  "id": NumberInt(226),
  "region_id": NumberInt(12),
  "name": "Брянка",
  "phone_code": "6443"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ef5"),
  "id": NumberInt(227),
  "region_id": NumberInt(17),
  "name": "Бугаевка",
  "phone_code": "3633"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ef6"),
  "id": NumberInt(228),
  "region_id": NumberInt(17),
  "name": "Бугрин",
  "phone_code": "3650"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ef7"),
  "id": NumberInt(229),
  "region_id": NumberInt(14),
  "name": "Бугское",
  "phone_code": "5134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ef8"),
  "id": NumberInt(230),
  "region_id": NumberInt(19),
  "name": "Буданов",
  "phone_code": "3551"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ef9"),
  "id": NumberInt(231),
  "region_id": NumberInt(18),
  "name": "Будивельное",
  "phone_code": "5444"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41efa"),
  "id": NumberInt(232),
  "region_id": NumberInt(18),
  "name": "Будилка",
  "phone_code": "5445"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41efb"),
  "id": NumberInt(233),
  "region_id": NumberInt(23),
  "name": "Будище",
  "phone_code": "472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41efc"),
  "id": NumberInt(234),
  "region_id": NumberInt(23),
  "name": "Будки",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41efd"),
  "id": NumberInt(235),
  "region_id": NumberInt(20),
  "name": "Буды",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41efe"),
  "id": NumberInt(236),
  "region_id": NumberInt(23),
  "name": "Бужанка",
  "phone_code": "4749"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41eff"),
  "id": NumberInt(237),
  "region_id": NumberInt(10),
  "name": "Бузовая",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f00"),
  "id": NumberInt(238),
  "region_id": NumberInt(23),
  "name": "Бузуков",
  "phone_code": "0472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f01"),
  "id": NumberInt(239),
  "region_id": NumberInt(18),
  "name": "Буймеровка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f02"),
  "id": NumberInt(240),
  "region_id": NumberInt(15),
  "name": "Бурлача балка",
  "phone_code": "4868"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f03"),
  "id": NumberInt(241),
  "region_id": NumberInt(22),
  "name": "Буртын",
  "phone_code": "3843"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f04"),
  "id": NumberInt(242),
  "region_id": NumberInt(9),
  "name": "Бурштын",
  "phone_code": "3438"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f05"),
  "id": NumberInt(243),
  "region_id": NumberInt(18),
  "name": "Бурынь",
  "phone_code": "5454"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f06"),
  "id": NumberInt(244),
  "region_id": NumberInt(13),
  "name": "Буск",
  "phone_code": "3264"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f07"),
  "id": NumberInt(245),
  "region_id": NumberInt(16),
  "name": "Бутенки",
  "phone_code": "5343"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f08"),
  "id": NumberInt(246),
  "region_id": NumberInt(3),
  "name": "Буцин",
  "phone_code": "3346"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f09"),
  "id": NumberInt(247),
  "region_id": NumberInt(10),
  "name": "Буча",
  "phone_code": "4497"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f0a"),
  "id": NumberInt(248),
  "region_id": NumberInt(13),
  "name": "Бучалы",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f0b"),
  "id": NumberInt(249),
  "region_id": NumberInt(19),
  "name": "Бучач",
  "phone_code": "3544"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f0c"),
  "id": NumberInt(250),
  "region_id": NumberInt(7),
  "name": "Буштыно",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f0d"),
  "id": NumberInt(251),
  "region_id": NumberInt(6),
  "name": "Быковка",
  "phone_code": "4146"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f0e"),
  "id": NumberInt(252),
  "region_id": NumberInt(5),
  "name": "Былбасовка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f0f"),
  "id": NumberInt(253),
  "region_id": NumberInt(6),
  "name": "Быстрик",
  "phone_code": "4143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f10"),
  "id": NumberInt(254),
  "region_id": NumberInt(17),
  "name": "Быстричи",
  "phone_code": "3653"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f11"),
  "id": NumberInt(255),
  "region_id": NumberInt(2),
  "name": "В.Киреевка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f12"),
  "id": NumberInt(256),
  "region_id": NumberInt(20),
  "name": "Валки",
  "phone_code": "5753"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f13"),
  "id": NumberInt(257),
  "region_id": NumberInt(4),
  "name": "Валовое",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f14"),
  "id": NumberInt(258),
  "region_id": NumberInt(12),
  "name": "Валуйское",
  "phone_code": "6472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f15"),
  "id": NumberInt(259),
  "region_id": NumberInt(25),
  "name": "Валя кузьмина",
  "phone_code": "3734"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f16"),
  "id": NumberInt(260),
  "region_id": NumberInt(23),
  "name": "Валява",
  "phone_code": "4734"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f17"),
  "id": NumberInt(261),
  "region_id": NumberInt(13),
  "name": "Ваньковичи",
  "phone_code": "3236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f18"),
  "id": NumberInt(262),
  "region_id": NumberInt(2),
  "name": "Вапнярка",
  "phone_code": "4350"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f19"),
  "id": NumberInt(263),
  "region_id": NumberInt(24),
  "name": "Варва",
  "phone_code": "4636"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f1a"),
  "id": NumberInt(264),
  "region_id": NumberInt(19),
  "name": "Варваринцы",
  "phone_code": "3551"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f1b"),
  "id": NumberInt(265),
  "region_id": NumberInt(17),
  "name": "Варковичи",
  "phone_code": "3656"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f1c"),
  "id": NumberInt(266),
  "region_id": NumberInt(7),
  "name": "Вары",
  "phone_code": "3141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f1d"),
  "id": NumberInt(267),
  "region_id": NumberInt(8),
  "name": "Васильевка",
  "phone_code": "6175"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f1e"),
  "id": NumberInt(268),
  "region_id": NumberInt(23),
  "name": "Васильков",
  "phone_code": "4741"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f1f"),
  "id": NumberInt(269),
  "region_id": NumberInt(10),
  "name": "Васильков",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f20"),
  "id": NumberInt(270),
  "region_id": NumberInt(4),
  "name": "Васильковка",
  "phone_code": "5639"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f21"),
  "id": NumberInt(271),
  "region_id": NumberInt(20),
  "name": "Васищево",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f22"),
  "id": NumberInt(272),
  "region_id": NumberInt(6),
  "name": "Васьковичи",
  "phone_code": "4142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f23"),
  "id": NumberInt(273),
  "region_id": NumberInt(23),
  "name": "Ватутино",
  "phone_code": "4740"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f24"),
  "id": NumberInt(274),
  "region_id": NumberInt(20),
  "name": "Ватутино",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f25"),
  "id": NumberInt(275),
  "region_id": NumberInt(12),
  "name": "Вахрушево",
  "phone_code": "6432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f26"),
  "id": NumberInt(276),
  "region_id": NumberInt(25),
  "name": "Вашковцы",
  "phone_code": "3730"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f27"),
  "id": NumberInt(277),
  "region_id": NumberInt(20),
  "name": "Введенка",
  "phone_code": "5746"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f28"),
  "id": NumberInt(278),
  "region_id": NumberInt(21),
  "name": "Великая Александровка",
  "phone_code": "5532"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f29"),
  "id": NumberInt(279),
  "region_id": NumberInt(16),
  "name": "Великая Багачка",
  "phone_code": "5345"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f2a"),
  "id": NumberInt(280),
  "region_id": NumberInt(7),
  "name": "Великая бакта",
  "phone_code": "3141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f2b"),
  "id": NumberInt(281),
  "region_id": NumberInt(8),
  "name": "Великая Белозерка",
  "phone_code": "6156"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f2c"),
  "id": NumberInt(282),
  "region_id": NumberInt(19),
  "name": "Великая Березовица",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f2d"),
  "id": NumberInt(283),
  "region_id": NumberInt(3),
  "name": "Великая глуша",
  "phone_code": "3362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f2e"),
  "id": NumberInt(284),
  "region_id": NumberInt(13),
  "name": "Великая горожанка",
  "phone_code": "3241"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f2f"),
  "id": NumberInt(285),
  "region_id": NumberInt(7),
  "name": "Великая добронь",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f30"),
  "id": NumberInt(286),
  "region_id": NumberInt(24),
  "name": "Великая дорога",
  "phone_code": "4631"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f31"),
  "id": NumberInt(287),
  "region_id": NumberInt(24),
  "name": "Великая дочь",
  "phone_code": "4653"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f32"),
  "id": NumberInt(288),
  "region_id": NumberInt(21),
  "name": "Великая кардашинка",
  "phone_code": "5539"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f33"),
  "id": NumberInt(289),
  "region_id": NumberInt(16),
  "name": "Великая круча",
  "phone_code": "5358"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f34"),
  "id": NumberInt(290),
  "region_id": NumberInt(21),
  "name": "Великая Лепетиха",
  "phone_code": "5543"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f35"),
  "id": NumberInt(291),
  "region_id": NumberInt(15),
  "name": "Великая Михайловка",
  "phone_code": "4859"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f36"),
  "id": NumberInt(292),
  "region_id": NumberInt(5),
  "name": "Великая Новоселка",
  "phone_code": "6243"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f37"),
  "id": NumberInt(293),
  "region_id": NumberInt(17),
  "name": "Великая омеляна",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f38"),
  "id": NumberInt(294),
  "region_id": NumberInt(18),
  "name": "Великая Писаревка",
  "phone_code": "5457"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f39"),
  "id": NumberInt(295),
  "region_id": NumberInt(11),
  "name": "Великая северинка",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f3a"),
  "id": NumberInt(296),
  "region_id": NumberInt(18),
  "name": "Великая чернеччина",
  "phone_code": "542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f3b"),
  "id": NumberInt(297),
  "region_id": NumberInt(23),
  "name": "Великая яблоновка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f3c"),
  "id": NumberInt(298),
  "region_id": NumberInt(19),
  "name": "Великие Борки",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f3d"),
  "id": NumberInt(299),
  "region_id": NumberInt(18),
  "name": "Великие вильмы",
  "phone_code": "542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f3e"),
  "id": NumberInt(300),
  "region_id": NumberInt(19),
  "name": "Великие гаи",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f3f"),
  "id": NumberInt(301),
  "region_id": NumberInt(13),
  "name": "Великие Глебовичи",
  "phone_code": "3263"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f40"),
  "id": NumberInt(302),
  "region_id": NumberInt(10),
  "name": "Великие гуляки",
  "phone_code": "4465"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f41"),
  "id": NumberInt(303),
  "region_id": NumberInt(19),
  "name": "Великие Дедеркалы",
  "phone_code": "3558"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f42"),
  "id": NumberInt(304),
  "region_id": NumberInt(21),
  "name": "Великие копаны",
  "phone_code": "5542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f43"),
  "id": NumberInt(305),
  "region_id": NumberInt(6),
  "name": "Великие Коровинцы",
  "phone_code": "4139"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f44"),
  "id": NumberInt(306),
  "region_id": NumberInt(16),
  "name": "Великие крынки",
  "phone_code": "5365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f45"),
  "id": NumberInt(307),
  "region_id": NumberInt(7),
  "name": "Великие лазы",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f46"),
  "id": NumberInt(308),
  "region_id": NumberInt(7),
  "name": "Великие лучки",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f47"),
  "id": NumberInt(309),
  "region_id": NumberInt(13),
  "name": "Великие Мосты",
  "phone_code": "3257"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f48"),
  "id": NumberInt(310),
  "region_id": NumberInt(6),
  "name": "Великие низгорцы",
  "phone_code": "4143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f49"),
  "id": NumberInt(311),
  "region_id": NumberInt(20),
  "name": "Великие проходы",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f4a"),
  "id": NumberInt(312),
  "region_id": NumberInt(17),
  "name": "Великий алексин",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f4b"),
  "id": NumberInt(313),
  "region_id": NumberInt(7),
  "name": "Великий Березный",
  "phone_code": "3135"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f4c"),
  "id": NumberInt(314),
  "region_id": NumberInt(20),
  "name": "Великий Бурлук",
  "phone_code": "5752"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f4d"),
  "id": NumberInt(315),
  "region_id": NumberInt(7),
  "name": "Великий Бычков",
  "phone_code": "3132"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f4e"),
  "id": NumberInt(316),
  "region_id": NumberInt(19),
  "name": "Великий Глубочек",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f4f"),
  "id": NumberInt(317),
  "region_id": NumberInt(17),
  "name": "Великий житин",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f50"),
  "id": NumberInt(318),
  "region_id": NumberInt(25),
  "name": "Великий кучуров",
  "phone_code": "3735"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f51"),
  "id": NumberInt(319),
  "region_id": NumberInt(13),
  "name": "Великий Любень",
  "phone_code": "3231"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f52"),
  "id": NumberInt(320),
  "region_id": NumberInt(2),
  "name": "Великий мытник",
  "phone_code": "43388"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f53"),
  "id": NumberInt(321),
  "region_id": NumberInt(3),
  "name": "Великий омеляник",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f54"),
  "id": NumberInt(322),
  "region_id": NumberInt(15),
  "name": "Великодолинское",
  "phone_code": "4851"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f55"),
  "id": NumberInt(323),
  "region_id": NumberInt(13),
  "name": "Великое колодно",
  "phone_code": "3254"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f56"),
  "id": NumberInt(324),
  "region_id": NumberInt(13),
  "name": "Великоселки",
  "phone_code": "3254"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f57"),
  "id": NumberInt(325),
  "region_id": NumberInt(12),
  "name": "Великоцк",
  "phone_code": "6465"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f58"),
  "id": NumberInt(326),
  "region_id": NumberInt(11),
  "name": "Вельшанка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f59"),
  "id": NumberInt(327),
  "region_id": NumberInt(2),
  "name": "Вендичаны",
  "phone_code": "4337"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f5a"),
  "id": NumberInt(328),
  "region_id": NumberInt(10),
  "name": "Веприк",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f5b"),
  "id": NumberInt(329),
  "region_id": NumberInt(22),
  "name": "Вербка",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f5c"),
  "id": NumberInt(330),
  "region_id": NumberInt(4),
  "name": "Вербки",
  "phone_code": "5672"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f5d"),
  "id": NumberInt(331),
  "region_id": NumberInt(11),
  "name": "Верблюжка",
  "phone_code": "5241"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f5e"),
  "id": NumberInt(332),
  "region_id": NumberInt(9),
  "name": "Вербовец",
  "phone_code": "3478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f5f"),
  "id": NumberInt(333),
  "region_id": NumberInt(23),
  "name": "Вербовец",
  "phone_code": "4742"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f60"),
  "id": NumberInt(334),
  "region_id": NumberInt(12),
  "name": "Вергулевка",
  "phone_code": "6563"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f61"),
  "id": NumberInt(335),
  "region_id": NumberInt(23),
  "name": "Вергуны",
  "phone_code": "472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f62"),
  "id": NumberInt(336),
  "region_id": NumberInt(17),
  "name": "Вересневое",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f63"),
  "id": NumberInt(337),
  "region_id": NumberInt(6),
  "name": "Вересы",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f64"),
  "id": NumberInt(338),
  "region_id": NumberInt(24),
  "name": "Вертиевка",
  "phone_code": "4631"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f65"),
  "id": NumberInt(339),
  "region_id": NumberInt(4),
  "name": "Верхнеднепровск",
  "phone_code": "5658"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f66"),
  "id": NumberInt(340),
  "region_id": NumberInt(7),
  "name": "Верхнее водяное",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f67"),
  "id": NumberInt(341),
  "region_id": NumberInt(13),
  "name": "Верхнее синевидное",
  "phone_code": "3251"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f68"),
  "id": NumberInt(342),
  "region_id": NumberInt(1),
  "name": "Верхнесадовое",
  "phone_code": "692"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f69"),
  "id": NumberInt(343),
  "region_id": NumberInt(21),
  "name": "Верхние серогозы",
  "phone_code": "5540"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f6a"),
  "id": NumberInt(344),
  "region_id": NumberInt(21),
  "name": "Верхний Рогачик",
  "phone_code": "5545"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f6b"),
  "id": NumberInt(345),
  "region_id": NumberInt(9),
  "name": "Верхний струтинь",
  "phone_code": "3474"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f6c"),
  "id": NumberInt(346),
  "region_id": NumberInt(8),
  "name": "Верхний токмак первый",
  "phone_code": "6140"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f6d"),
  "id": NumberInt(347),
  "region_id": NumberInt(23),
  "name": "Верхнячка",
  "phone_code": "4745"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f6e"),
  "id": NumberInt(348),
  "region_id": NumberInt(8),
  "name": "Верхняя криница",
  "phone_code": "6175"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f6f"),
  "id": NumberInt(349),
  "region_id": NumberInt(18),
  "name": "Верхняя сыроватка",
  "phone_code": "542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f70"),
  "id": NumberInt(350),
  "region_id": NumberInt(17),
  "name": "Верхов",
  "phone_code": "03654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f71"),
  "id": NumberInt(351),
  "region_id": NumberInt(9),
  "name": "Верховина",
  "phone_code": "3432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f72"),
  "id": NumberInt(352),
  "region_id": NumberInt(4),
  "name": "Верховцево",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f73"),
  "id": NumberInt(353),
  "region_id": NumberInt(14),
  "name": "Веселиново",
  "phone_code": "5163"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f74"),
  "id": NumberInt(354),
  "region_id": NumberInt(8),
  "name": "Веселое",
  "phone_code": "6136"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f75"),
  "id": NumberInt(355),
  "region_id": NumberInt(21),
  "name": "Веселое",
  "phone_code": "4330"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f76"),
  "id": NumberInt(356),
  "region_id": NumberInt(4),
  "name": "Веселое",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f77"),
  "id": NumberInt(357),
  "region_id": NumberInt(14),
  "name": "Весняное",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f78"),
  "id": NumberInt(358),
  "region_id": NumberInt(25),
  "name": "Виженка",
  "phone_code": "3730"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f79"),
  "id": NumberInt(359),
  "region_id": NumberInt(25),
  "name": "Вижница",
  "phone_code": "3730"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f7a"),
  "id": NumberInt(360),
  "region_id": NumberInt(15),
  "name": "Визирка",
  "phone_code": "4855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f7b"),
  "id": NumberInt(361),
  "region_id": NumberInt(1),
  "name": "Вилино",
  "phone_code": "6554"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f7c"),
  "id": NumberInt(362),
  "region_id": NumberInt(15),
  "name": "Вилково",
  "phone_code": "4843"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f7d"),
  "id": NumberInt(363),
  "region_id": NumberInt(2),
  "name": "Вилы",
  "phone_code": "4348"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f7e"),
  "id": NumberInt(364),
  "region_id": NumberInt(23),
  "name": "Вильховец",
  "phone_code": "4740"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f7f"),
  "id": NumberInt(365),
  "region_id": NumberInt(13),
  "name": "Винники",
  "phone_code": "322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f80"),
  "id": NumberInt(366),
  "region_id": NumberInt(13),
  "name": "Винники",
  "phone_code": "3244"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f81"),
  "id": NumberInt(367),
  "region_id": NumberInt(2),
  "name": "Винница",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f82"),
  "id": NumberInt(368),
  "region_id": NumberInt(10),
  "name": "Винницкие ставы",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f83"),
  "id": NumberInt(369),
  "region_id": NumberInt(2),
  "name": "Винницкие хутора",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f84"),
  "id": NumberInt(370),
  "region_id": NumberInt(1),
  "name": "Виноградное",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f85"),
  "id": NumberInt(371),
  "region_id": NumberInt(7),
  "name": "Виноградов",
  "phone_code": "3143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f86"),
  "id": NumberInt(372),
  "region_id": NumberInt(22),
  "name": "Виньковцы",
  "phone_code": "3846"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f87"),
  "id": NumberInt(373),
  "region_id": NumberInt(10),
  "name": "Вита-почтовая",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f88"),
  "id": NumberInt(374),
  "region_id": NumberInt(1),
  "name": "Витино",
  "phone_code": "6563"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f89"),
  "id": NumberInt(375),
  "region_id": NumberInt(11),
  "name": "Витязевка",
  "phone_code": "6562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f8a"),
  "id": NumberInt(376),
  "region_id": NumberInt(19),
  "name": "Вишневец",
  "phone_code": "3550"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f8b"),
  "id": NumberInt(377),
  "region_id": NumberInt(4),
  "name": "Вишневое",
  "phone_code": "5651"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f8c"),
  "id": NumberInt(378),
  "region_id": NumberInt(10),
  "name": "Вишневое",
  "phone_code": "4498"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f8d"),
  "id": NumberInt(379),
  "region_id": NumberInt(12),
  "name": "Вишневое",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f8e"),
  "id": NumberInt(380),
  "region_id": NumberInt(22),
  "name": "Вишневчик",
  "phone_code": "3859"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f8f"),
  "id": NumberInt(381),
  "region_id": NumberInt(3),
  "name": "Владимир-Волынский",
  "phone_code": "3342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f90"),
  "id": NumberInt(382),
  "region_id": NumberInt(17),
  "name": "Владимирец",
  "phone_code": "3634"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f91"),
  "id": NumberInt(383),
  "region_id": NumberInt(17),
  "name": "Владимирец",
  "phone_code": "3634"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f92"),
  "id": NumberInt(384),
  "region_id": NumberInt(20),
  "name": "Владимировка",
  "phone_code": "5756"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f93"),
  "id": NumberInt(385),
  "region_id": NumberInt(5),
  "name": "Владимировка",
  "phone_code": "6214"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f94"),
  "id": NumberInt(386),
  "region_id": NumberInt(11),
  "name": "Владимировка",
  "phone_code": "5233"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f95"),
  "id": NumberInt(387),
  "region_id": NumberInt(11),
  "name": "Владимировка",
  "phone_code": "5235"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f96"),
  "id": NumberInt(388),
  "region_id": NumberInt(8),
  "name": "Владимировское",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f97"),
  "id": NumberInt(389),
  "region_id": NumberInt(11),
  "name": "Власовка",
  "phone_code": "5236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f98"),
  "id": NumberInt(390),
  "region_id": NumberInt(7),
  "name": "Водица",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f99"),
  "id": NumberInt(391),
  "region_id": NumberInt(14),
  "name": "Вознесенск",
  "phone_code": "5134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f9a"),
  "id": NumberInt(392),
  "region_id": NumberInt(23),
  "name": "Вознесенское",
  "phone_code": "4737"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f9b"),
  "id": NumberInt(393),
  "region_id": NumberInt(1),
  "name": "Войково",
  "phone_code": "6557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f9c"),
  "id": NumberInt(394),
  "region_id": NumberInt(11),
  "name": "Войновка",
  "phone_code": "5251"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f9d"),
  "id": NumberInt(395),
  "region_id": NumberInt(11),
  "name": "Войновка",
  "phone_code": "5235"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f9e"),
  "id": NumberInt(396),
  "region_id": NumberInt(2),
  "name": "Войтовка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41f9f"),
  "id": NumberInt(397),
  "region_id": NumberInt(12),
  "name": "Войтово",
  "phone_code": "6472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fa0"),
  "id": NumberInt(398),
  "region_id": NumberInt(22),
  "name": "Войтовцы",
  "phone_code": "4337"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fa1"),
  "id": NumberInt(399),
  "region_id": NumberInt(22),
  "name": "Волковинцы",
  "phone_code": "4344"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fa2"),
  "id": NumberInt(400),
  "region_id": NumberInt(5),
  "name": "Волноваха",
  "phone_code": "6244"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fa3"),
  "id": NumberInt(401),
  "region_id": NumberInt(7),
  "name": "Воловец",
  "phone_code": "3136"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fa4"),
  "id": NumberInt(402),
  "region_id": NumberInt(10),
  "name": "Володарка",
  "phone_code": "4469"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fa5"),
  "id": NumberInt(403),
  "region_id": NumberInt(12),
  "name": "Володарск",
  "phone_code": "6434"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fa6"),
  "id": NumberInt(404),
  "region_id": NumberInt(6),
  "name": "Володарск-Волынский",
  "phone_code": "4145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fa7"),
  "id": NumberInt(405),
  "region_id": NumberInt(5),
  "name": "Володарское",
  "phone_code": "6246"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fa8"),
  "id": NumberInt(406),
  "region_id": NumberInt(4),
  "name": "Волосское",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fa9"),
  "id": NumberInt(407),
  "region_id": NumberInt(22),
  "name": "Волочиск",
  "phone_code": "3845"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41faa"),
  "id": NumberInt(408),
  "region_id": NumberInt(20),
  "name": "Волчанск",
  "phone_code": "5741"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fab"),
  "id": NumberInt(409),
  "region_id": NumberInt(9),
  "name": "Волчинец",
  "phone_code": "3422"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fac"),
  "id": NumberInt(410),
  "region_id": NumberInt(9),
  "name": "Волчковцы",
  "phone_code": "3476"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fad"),
  "id": NumberInt(411),
  "region_id": NumberInt(4),
  "name": "Вольногорск",
  "phone_code": "5653"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fae"),
  "id": NumberInt(412),
  "region_id": NumberInt(4),
  "name": "Вольное",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41faf"),
  "id": NumberInt(413),
  "region_id": NumberInt(8),
  "name": "Вольнянск",
  "phone_code": "6143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fb0"),
  "id": NumberInt(414),
  "region_id": NumberInt(13),
  "name": "Воля-бартатовская",
  "phone_code": "3231"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fb1"),
  "id": NumberInt(415),
  "region_id": NumberInt(13),
  "name": "Воля-высоцкая",
  "phone_code": "3252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fb2"),
  "id": NumberInt(416),
  "region_id": NumberInt(3),
  "name": "Воля-ковельская",
  "phone_code": "3352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fb3"),
  "id": NumberInt(417),
  "region_id": NumberInt(10),
  "name": "Ворзель",
  "phone_code": "4497"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fb4"),
  "id": NumberInt(418),
  "region_id": NumberInt(18),
  "name": "Ворожба",
  "phone_code": "5443"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fb5"),
  "id": NumberInt(419),
  "region_id": NumberInt(18),
  "name": "Воронеж",
  "phone_code": "5449"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fb6"),
  "id": NumberInt(420),
  "region_id": NumberInt(9),
  "name": "Воронов",
  "phone_code": "3430"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fb7"),
  "id": NumberInt(421),
  "region_id": NumberInt(25),
  "name": "Вороновица",
  "phone_code": "3732"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fb8"),
  "id": NumberInt(422),
  "region_id": NumberInt(2),
  "name": "Вороновица",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fb9"),
  "id": NumberInt(423),
  "region_id": NumberInt(13),
  "name": "Вороняки",
  "phone_code": "3265"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fba"),
  "id": NumberInt(424),
  "region_id": NumberInt(9),
  "name": "Ворохта",
  "phone_code": "3434"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fbb"),
  "id": NumberInt(425),
  "region_id": NumberInt(14),
  "name": "Воскресенск",
  "phone_code": "0512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fbc"),
  "id": NumberInt(426),
  "region_id": NumberInt(1),
  "name": "Восход",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fbd"),
  "id": NumberInt(427),
  "region_id": NumberInt(14),
  "name": "Врадиевка",
  "phone_code": "5135"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fbe"),
  "id": NumberInt(428),
  "region_id": NumberInt(3),
  "name": "Всеволодовка",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fbf"),
  "id": NumberInt(429),
  "region_id": NumberInt(13),
  "name": "Вузлове",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fc0"),
  "id": NumberInt(430),
  "region_id": NumberInt(13),
  "name": "Выбрановка",
  "phone_code": "3239"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fc1"),
  "id": NumberInt(431),
  "region_id": NumberInt(9),
  "name": "Выгода",
  "phone_code": "3477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fc2"),
  "id": NumberInt(432),
  "region_id": NumberInt(15),
  "name": "Выгода",
  "phone_code": "4852"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fc3"),
  "id": NumberInt(433),
  "region_id": NumberInt(4),
  "name": "Выдвиженец",
  "phone_code": "5612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fc4"),
  "id": NumberInt(434),
  "region_id": NumberInt(7),
  "name": "Вылок",
  "phone_code": "3143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fc5"),
  "id": NumberInt(435),
  "region_id": NumberInt(20),
  "name": "Высокий",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fc6"),
  "id": NumberInt(436),
  "region_id": NumberInt(8),
  "name": "Высокогорное",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fc7"),
  "id": NumberInt(437),
  "region_id": NumberInt(21),
  "name": "Высокополье",
  "phone_code": "5535"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fc8"),
  "id": NumberInt(438),
  "region_id": NumberInt(17),
  "name": "Высоцк",
  "phone_code": "3658"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fc9"),
  "id": NumberInt(439),
  "region_id": NumberInt(4),
  "name": "Высшетарасовка",
  "phone_code": "5668"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fca"),
  "id": NumberInt(440),
  "region_id": NumberInt(10),
  "name": "Вышгород",
  "phone_code": "4496"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fcb"),
  "id": NumberInt(441),
  "region_id": NumberInt(6),
  "name": "Вышевичи",
  "phone_code": "04132"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fcc"),
  "id": NumberInt(442),
  "region_id": NumberInt(2),
  "name": "Вышеольчедаев",
  "phone_code": "4356"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fcd"),
  "id": NumberInt(443),
  "region_id": NumberInt(7),
  "name": "Вышково",
  "phone_code": "3142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fce"),
  "id": NumberInt(444),
  "region_id": NumberInt(18),
  "name": "Вязовое",
  "phone_code": "5446"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fcf"),
  "id": NumberInt(445),
  "region_id": NumberInt(21),
  "name": "Гавриловка",
  "phone_code": "5533"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fd0"),
  "id": NumberInt(446),
  "region_id": NumberInt(9),
  "name": "Гавриловка",
  "phone_code": "3475"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fd1"),
  "id": NumberInt(447),
  "region_id": NumberInt(2),
  "name": "Гавришовка",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fd2"),
  "id": NumberInt(448),
  "region_id": NumberInt(16),
  "name": "Гадяч",
  "phone_code": "5354"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fd3"),
  "id": NumberInt(449),
  "region_id": NumberInt(21),
  "name": "Гаевое",
  "phone_code": "5534"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fd4"),
  "id": NumberInt(450),
  "region_id": NumberInt(11),
  "name": "Гайворон",
  "phone_code": "5254"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fd5"),
  "id": NumberInt(451),
  "region_id": NumberInt(2),
  "name": "Гайсин",
  "phone_code": "4334"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fd6"),
  "id": NumberInt(452),
  "region_id": NumberInt(9),
  "name": "Галич",
  "phone_code": "3431"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fd7"),
  "id": NumberInt(453),
  "region_id": NumberInt(16),
  "name": "Галяво",
  "phone_code": "5340"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fd8"),
  "id": NumberInt(454),
  "region_id": NumberInt(7),
  "name": "Ганичи",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fd9"),
  "id": NumberInt(455),
  "region_id": NumberInt(6),
  "name": "Ганнополь",
  "phone_code": "04149"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fda"),
  "id": NumberInt(456),
  "region_id": NumberInt(23),
  "name": "Гарбузин",
  "phone_code": "4735"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fdb"),
  "id": NumberInt(457),
  "region_id": NumberInt(1),
  "name": "Гаспра",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fdc"),
  "id": NumberInt(458),
  "region_id": NumberInt(10),
  "name": "Гатное",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fdd"),
  "id": NumberInt(459),
  "region_id": NumberInt(4),
  "name": "Гвардейское",
  "phone_code": "5612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fde"),
  "id": NumberInt(460),
  "region_id": NumberInt(1),
  "name": "Гвардейское",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fdf"),
  "id": NumberInt(461),
  "region_id": NumberInt(22),
  "name": "Гвардейское",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fe0"),
  "id": NumberInt(462),
  "region_id": NumberInt(9),
  "name": "Гвоздец",
  "phone_code": "3433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fe1"),
  "id": NumberInt(463),
  "region_id": NumberInt(23),
  "name": "Гельмязов",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fe2"),
  "id": NumberInt(464),
  "region_id": NumberInt(21),
  "name": "Гениченская горка",
  "phone_code": "5534"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fe3"),
  "id": NumberInt(465),
  "region_id": NumberInt(21),
  "name": "Геническ",
  "phone_code": "5534"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fe4"),
  "id": NumberInt(466),
  "region_id": NumberInt(5),
  "name": "Георгиевка",
  "phone_code": "6212"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fe5"),
  "id": NumberInt(467),
  "region_id": NumberInt(18),
  "name": "Герасимовка",
  "phone_code": "5448"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fe6"),
  "id": NumberInt(468),
  "region_id": NumberInt(1),
  "name": "Геройское",
  "phone_code": "6563"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fe7"),
  "id": NumberInt(469),
  "region_id": NumberInt(23),
  "name": "Геронимовка",
  "phone_code": "472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fe8"),
  "id": NumberInt(470),
  "region_id": NumberInt(25),
  "name": "Герца",
  "phone_code": "3734"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fe9"),
  "id": NumberInt(471),
  "region_id": NumberInt(9),
  "name": "Герыня",
  "phone_code": "3477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fea"),
  "id": NumberInt(472),
  "region_id": NumberInt(10),
  "name": "Глеваха",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41feb"),
  "id": NumberInt(473),
  "region_id": NumberInt(25),
  "name": "Глинница",
  "phone_code": "3736"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fec"),
  "id": NumberInt(474),
  "region_id": NumberInt(13),
  "name": "Глиняны",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fed"),
  "id": NumberInt(475),
  "region_id": NumberInt(16),
  "name": "Глобино",
  "phone_code": "5365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fee"),
  "id": NumberInt(476),
  "region_id": NumberInt(12),
  "name": "Глубокий",
  "phone_code": "6443"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fef"),
  "id": NumberInt(477),
  "region_id": NumberInt(7),
  "name": "Глубокий поток",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ff0"),
  "id": NumberInt(478),
  "region_id": NumberInt(6),
  "name": "Глубочица",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ff1"),
  "id": NumberInt(479),
  "region_id": NumberInt(18),
  "name": "Глухов",
  "phone_code": "5444"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ff2"),
  "id": NumberInt(480),
  "region_id": NumberInt(2),
  "name": "Глуховцы",
  "phone_code": "4342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ff3"),
  "id": NumberInt(481),
  "region_id": NumberInt(25),
  "name": "Глыбокая",
  "phone_code": "3734"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ff4"),
  "id": NumberInt(482),
  "region_id": NumberInt(24),
  "name": "Гнединцы",
  "phone_code": "4636"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ff5"),
  "id": NumberInt(483),
  "region_id": NumberInt(2),
  "name": "Гнивань",
  "phone_code": "4355"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ff6"),
  "id": NumberInt(484),
  "region_id": NumberInt(10),
  "name": "Гнидын",
  "phone_code": "4495"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ff7"),
  "id": NumberInt(485),
  "region_id": NumberInt(19),
  "name": "Гнилички",
  "phone_code": "3543"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ff8"),
  "id": NumberInt(486),
  "region_id": NumberInt(10),
  "name": "Гоголев",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ff9"),
  "id": NumberInt(487),
  "region_id": NumberInt(16),
  "name": "Гоголево",
  "phone_code": "5345"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ffa"),
  "id": NumberInt(488),
  "region_id": NumberInt(16),
  "name": "Гожулы",
  "phone_code": "5322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ffb"),
  "id": NumberInt(489),
  "region_id": NumberInt(21),
  "name": "Голая Пристань",
  "phone_code": "5539"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ffc"),
  "id": NumberInt(490),
  "region_id": NumberInt(3),
  "name": "Голобы",
  "phone_code": "3352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ffd"),
  "id": NumberInt(491),
  "region_id": NumberInt(11),
  "name": "Голованевск",
  "phone_code": "5252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41ffe"),
  "id": NumberInt(492),
  "region_id": NumberInt(6),
  "name": "Головино",
  "phone_code": "4134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc41fff"),
  "id": NumberInt(493),
  "region_id": NumberInt(11),
  "name": "Головковка",
  "phone_code": "5235"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42000"),
  "id": NumberInt(494),
  "region_id": NumberInt(22),
  "name": "Головчинцы",
  "phone_code": "3857"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42001"),
  "id": NumberInt(495),
  "region_id": NumberInt(4),
  "name": "Голубовка",
  "phone_code": "5612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42002"),
  "id": NumberInt(496),
  "region_id": NumberInt(1),
  "name": "Голубой Залив",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42003"),
  "id": NumberInt(497),
  "region_id": NumberInt(2),
  "name": "Гоноривка",
  "phone_code": "4336"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42004"),
  "id": NumberInt(498),
  "region_id": NumberInt(20),
  "name": "Гонтов яр",
  "phone_code": "5763"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42005"),
  "id": NumberInt(499),
  "region_id": NumberInt(16),
  "name": "Горбаневка",
  "phone_code": "5322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42006"),
  "id": NumberInt(500),
  "region_id": NumberInt(10),
  "name": "Горенка",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42007"),
  "id": NumberInt(501),
  "region_id": NumberInt(13),
  "name": "Горишний",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42008"),
  "id": NumberInt(502),
  "region_id": NumberInt(5),
  "name": "Горловка",
  "phone_code": "6242"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42009"),
  "id": NumberInt(503),
  "region_id": NumberInt(13),
  "name": "Горное",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4200a"),
  "id": NumberInt(504),
  "region_id": NumberInt(5),
  "name": "Горное",
  "phone_code": "6275"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4200b"),
  "id": NumberInt(505),
  "region_id": NumberInt(21),
  "name": "Горностаевка",
  "phone_code": "5544"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4200c"),
  "id": NumberInt(506),
  "region_id": NumberInt(11),
  "name": "Горный",
  "phone_code": "0522"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4200d"),
  "id": NumberInt(507),
  "region_id": NumberInt(13),
  "name": "Горняк",
  "phone_code": "3249"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4200e"),
  "id": NumberInt(508),
  "region_id": NumberInt(5),
  "name": "Горняк",
  "phone_code": "6237"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4200f"),
  "id": NumberInt(509),
  "region_id": NumberInt(5),
  "name": "Горняцкое",
  "phone_code": "6256"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42010"),
  "id": NumberInt(510),
  "region_id": NumberInt(9),
  "name": "Городенка",
  "phone_code": "3430"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42011"),
  "id": NumberInt(511),
  "region_id": NumberInt(23),
  "name": "Городище",
  "phone_code": "4734"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42012"),
  "id": NumberInt(512),
  "region_id": NumberInt(10),
  "name": "Городище-Пустоваровка",
  "phone_code": "269"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42013"),
  "id": NumberInt(513),
  "region_id": NumberInt(2),
  "name": "Городковка",
  "phone_code": "4340"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42014"),
  "id": NumberInt(514),
  "region_id": NumberInt(6),
  "name": "Городница",
  "phone_code": "4141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42015"),
  "id": NumberInt(515),
  "region_id": NumberInt(24),
  "name": "Городня",
  "phone_code": "4645"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42016"),
  "id": NumberInt(516),
  "region_id": NumberInt(3),
  "name": "Городок",
  "phone_code": "3376"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42017"),
  "id": NumberInt(517),
  "region_id": NumberInt(17),
  "name": "Городок",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42018"),
  "id": NumberInt(518),
  "region_id": NumberInt(22),
  "name": "Городок",
  "phone_code": "3851"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42019"),
  "id": NumberInt(519),
  "region_id": NumberInt(13),
  "name": "Городок",
  "phone_code": "3231"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4201a"),
  "id": NumberInt(520),
  "region_id": NumberInt(7),
  "name": "Горонглаб",
  "phone_code": "3141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4201b"),
  "id": NumberInt(521),
  "region_id": NumberInt(3),
  "name": "Горохов",
  "phone_code": "3379"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4201c"),
  "id": NumberInt(522),
  "region_id": NumberInt(14),
  "name": "Гороховка",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4201d"),
  "id": NumberInt(523),
  "region_id": NumberInt(12),
  "name": "Горское",
  "phone_code": "6455"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4201e"),
  "id": NumberInt(524),
  "region_id": NumberInt(6),
  "name": "Горщик",
  "phone_code": "4142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4201f"),
  "id": NumberInt(525),
  "region_id": NumberInt(3),
  "name": "Горькая полонка",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42020"),
  "id": NumberInt(526),
  "region_id": NumberInt(4),
  "name": "Горького",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42021"),
  "id": NumberInt(527),
  "region_id": NumberInt(11),
  "name": "Гостинное",
  "phone_code": "6556"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42022"),
  "id": NumberInt(528),
  "region_id": NumberInt(13),
  "name": "Гостинцово",
  "phone_code": "3234"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42023"),
  "id": NumberInt(529),
  "region_id": NumberInt(10),
  "name": "Гостомель",
  "phone_code": "4497"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42024"),
  "id": NumberInt(530),
  "region_id": NumberInt(17),
  "name": "Гоща",
  "phone_code": "3650"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42025"),
  "id": NumberInt(531),
  "region_id": NumberInt(13),
  "name": "Грабовец",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42026"),
  "id": NumberInt(532),
  "region_id": NumberInt(16),
  "name": "Градижск",
  "phone_code": "5365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42027"),
  "id": NumberInt(533),
  "region_id": NumberInt(5),
  "name": "Гранитное",
  "phone_code": "6279"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42028"),
  "id": NumberInt(534),
  "region_id": NumberInt(17),
  "name": "Гранитное",
  "phone_code": "3655"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42029"),
  "id": NumberInt(535),
  "region_id": NumberInt(4),
  "name": "Гранитное",
  "phone_code": "5656"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4202a"),
  "id": NumberInt(536),
  "region_id": NumberInt(16),
  "name": "Гребенка",
  "phone_code": "5359"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4202b"),
  "id": NumberInt(537),
  "region_id": NumberInt(10),
  "name": "Гребенки",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4202c"),
  "id": NumberInt(538),
  "region_id": NumberInt(13),
  "name": "Гребенов",
  "phone_code": "3251"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4202d"),
  "id": NumberInt(539),
  "region_id": NumberInt(7),
  "name": "Гребля",
  "phone_code": "3144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4202e"),
  "id": NumberInt(540),
  "region_id": NumberInt(15),
  "name": "Григоровка",
  "phone_code": "4855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4202f"),
  "id": NumberInt(541),
  "region_id": NumberInt(10),
  "name": "Григорьевка",
  "phone_code": "272"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42030"),
  "id": NumberInt(542),
  "region_id": NumberInt(19),
  "name": "Гримайлов",
  "phone_code": "3557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42031"),
  "id": NumberInt(543),
  "region_id": NumberInt(22),
  "name": "Грицев",
  "phone_code": "3840"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42032"),
  "id": NumberInt(544),
  "region_id": NumberInt(5),
  "name": "Гришино",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42033"),
  "id": NumberInt(545),
  "region_id": NumberInt(6),
  "name": "Гришковцы",
  "phone_code": "4143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42034"),
  "id": NumberInt(546),
  "region_id": NumberInt(6),
  "name": "Грозино",
  "phone_code": "4142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42035"),
  "id": NumberInt(547),
  "region_id": NumberInt(22),
  "name": "Грузевица",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42036"),
  "id": NumberInt(548),
  "region_id": NumberInt(4),
  "name": "Грузское",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42037"),
  "id": NumberInt(549),
  "region_id": NumberInt(7),
  "name": "Грушево",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42038"),
  "id": NumberInt(550),
  "region_id": NumberInt(11),
  "name": "Грушка",
  "phone_code": "5259"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42039"),
  "id": NumberInt(551),
  "region_id": NumberInt(22),
  "name": "Грушка",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4203a"),
  "id": NumberInt(552),
  "region_id": NumberInt(1),
  "name": "Грэсовский",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4203b"),
  "id": NumberInt(553),
  "region_id": NumberInt(13),
  "name": "Гряда",
  "phone_code": "3252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4203c"),
  "id": NumberInt(554),
  "region_id": NumberInt(18),
  "name": "Грязное",
  "phone_code": "5446"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4203d"),
  "id": NumberInt(555),
  "region_id": NumberInt(4),
  "name": "Губиниха",
  "phone_code": "5612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4203e"),
  "id": NumberInt(556),
  "region_id": NumberInt(6),
  "name": "Гуйва",
  "phone_code": "4122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4203f"),
  "id": NumberInt(557),
  "region_id": NumberInt(6),
  "name": "Гульск",
  "phone_code": "4141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42040"),
  "id": NumberInt(558),
  "region_id": NumberInt(8),
  "name": "Гуляйполе",
  "phone_code": "6145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42041"),
  "id": NumberInt(559),
  "region_id": NumberInt(22),
  "name": "Гуменцы",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42042"),
  "id": NumberInt(560),
  "region_id": NumberInt(4),
  "name": "Гупаловка",
  "phone_code": "5611"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42043"),
  "id": NumberInt(561),
  "region_id": NumberInt(1),
  "name": "Гурзуф",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42044"),
  "id": NumberInt(562),
  "region_id": NumberInt(10),
  "name": "Гуровщина",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42045"),
  "id": NumberInt(563),
  "region_id": NumberInt(19),
  "name": "Гусятин",
  "phone_code": "3557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42046"),
  "id": NumberInt(564),
  "region_id": NumberInt(20),
  "name": "Гуты",
  "phone_code": "5758"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42047"),
  "id": NumberInt(565),
  "region_id": NumberInt(22),
  "name": "Давыдковцы",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42048"),
  "id": NumberInt(566),
  "region_id": NumberInt(13),
  "name": "Давыдов",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42049"),
  "id": NumberInt(567),
  "region_id": NumberInt(1),
  "name": "Далекое",
  "phone_code": "6558"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4204a"),
  "id": NumberInt(568),
  "region_id": NumberInt(24),
  "name": "Даниловка",
  "phone_code": "4644"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4204b"),
  "id": NumberInt(569),
  "region_id": NumberInt(21),
  "name": "Дарьевка",
  "phone_code": "4331"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4204c"),
  "id": NumberInt(570),
  "region_id": NumberInt(20),
  "name": "Дачное",
  "phone_code": "5747"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4204d"),
  "id": NumberInt(571),
  "region_id": NumberInt(13),
  "name": "Дашава",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4204e"),
  "id": NumberInt(572),
  "region_id": NumberInt(2),
  "name": "Дашев",
  "phone_code": "4345"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4204f"),
  "id": NumberInt(573),
  "region_id": NumberInt(2),
  "name": "Дашев",
  "phone_code": "4345"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42050"),
  "id": NumberInt(574),
  "region_id": NumberInt(16),
  "name": "Дашковка",
  "phone_code": "5343"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42051"),
  "id": NumberInt(575),
  "region_id": NumberInt(23),
  "name": "Дашуковка",
  "phone_code": "4749"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42052"),
  "id": NumberInt(576),
  "region_id": NumberInt(20),
  "name": "Двуречная",
  "phone_code": "5750"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42053"),
  "id": NumberInt(577),
  "region_id": NumberInt(5),
  "name": "Дебальцево",
  "phone_code": "6249"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42054"),
  "id": NumberInt(578),
  "region_id": NumberInt(11),
  "name": "Девичье поле",
  "phone_code": "5235"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42055"),
  "id": NumberInt(579),
  "region_id": NumberInt(4),
  "name": "Девладово",
  "phone_code": "5650"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42056"),
  "id": NumberInt(580),
  "region_id": NumberInt(3),
  "name": "Дедычи",
  "phone_code": "3365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42057"),
  "id": NumberInt(581),
  "region_id": NumberInt(7),
  "name": "Деловое",
  "phone_code": "03132"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42058"),
  "id": NumberInt(582),
  "region_id": NumberInt(9),
  "name": "Делятин",
  "phone_code": "3475"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42059"),
  "id": NumberInt(583),
  "region_id": NumberInt(10),
  "name": "Демидов",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4205a"),
  "id": NumberInt(584),
  "region_id": NumberInt(17),
  "name": "Демидовка",
  "phone_code": "3637"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4205b"),
  "id": NumberInt(585),
  "region_id": NumberInt(9),
  "name": "Демьянов",
  "phone_code": "3431"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4205c"),
  "id": NumberInt(586),
  "region_id": NumberInt(10),
  "name": "Дениховка",
  "phone_code": "260"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4205d"),
  "id": NumberInt(587),
  "region_id": NumberInt(23),
  "name": "Деньги",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4205e"),
  "id": NumberInt(588),
  "region_id": NumberInt(17),
  "name": "Деражное",
  "phone_code": "3657"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4205f"),
  "id": NumberInt(589),
  "region_id": NumberInt(22),
  "name": "Деражня",
  "phone_code": "3856"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42060"),
  "id": NumberInt(590),
  "region_id": NumberInt(20),
  "name": "Дергачи",
  "phone_code": "5763"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42061"),
  "id": NumberInt(591),
  "region_id": NumberInt(2),
  "name": "Деребчин",
  "phone_code": "4344"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42062"),
  "id": NumberInt(592),
  "region_id": NumberInt(11),
  "name": "Дериевка",
  "phone_code": "5258"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42063"),
  "id": NumberInt(593),
  "region_id": NumberInt(3),
  "name": "Дерно",
  "phone_code": "3365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42064"),
  "id": NumberInt(594),
  "region_id": NumberInt(1),
  "name": "Джанкой",
  "phone_code": "6564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42065"),
  "id": NumberInt(595),
  "region_id": NumberInt(2),
  "name": "Джурин",
  "phone_code": "4344"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42066"),
  "id": NumberInt(596),
  "region_id": NumberInt(9),
  "name": "Джуров",
  "phone_code": "3476"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42067"),
  "id": NumberInt(597),
  "region_id": NumberInt(9),
  "name": "Дзвиняч",
  "phone_code": "3471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42068"),
  "id": NumberInt(598),
  "region_id": NumberInt(23),
  "name": "Дзензеловка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42069"),
  "id": NumberInt(599),
  "region_id": NumberInt(6),
  "name": "Дзержинск",
  "phone_code": "4146"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4206a"),
  "id": NumberInt(600),
  "region_id": NumberInt(5),
  "name": "Дзержинск",
  "phone_code": "6247"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4206b"),
  "id": NumberInt(601),
  "region_id": NumberInt(12),
  "name": "Дзержинский",
  "phone_code": "6433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4206c"),
  "id": NumberInt(602),
  "region_id": NumberInt(12),
  "name": "Дзержинское",
  "phone_code": "642"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4206d"),
  "id": NumberInt(603),
  "region_id": NumberInt(15),
  "name": "Дзинилор",
  "phone_code": "4843"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4206e"),
  "id": NumberInt(604),
  "region_id": NumberInt(2),
  "name": "Дзыговка",
  "phone_code": "4336"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4206f"),
  "id": NumberInt(605),
  "region_id": NumberInt(7),
  "name": "Диброва",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42070"),
  "id": NumberInt(606),
  "region_id": NumberInt(10),
  "name": "Диброва",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42071"),
  "id": NumberInt(607),
  "region_id": NumberInt(16),
  "name": "Диканька",
  "phone_code": "5351"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42072"),
  "id": NumberInt(608),
  "region_id": NumberInt(5),
  "name": "Димитров",
  "phone_code": "6239"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42073"),
  "id": NumberInt(609),
  "region_id": NumberInt(11),
  "name": "Димитрово",
  "phone_code": "5235"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42074"),
  "id": NumberInt(610),
  "region_id": NumberInt(10),
  "name": "Дмитровка",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42075"),
  "id": NumberInt(611),
  "region_id": NumberInt(24),
  "name": "Дмитровка",
  "phone_code": "4635"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42076"),
  "id": NumberInt(612),
  "region_id": NumberInt(4),
  "name": "Дмитровка",
  "phone_code": "5671"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42077"),
  "id": NumberInt(613),
  "region_id": NumberInt(1),
  "name": "Днепровка",
  "phone_code": "6564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42078"),
  "id": NumberInt(614),
  "region_id": NumberInt(4),
  "name": "Днепровское",
  "phone_code": "5618"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42079"),
  "id": NumberInt(615),
  "region_id": NumberInt(4),
  "name": "Днепродзержинск",
  "phone_code": "5692"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4207a"),
  "id": NumberInt(616),
  "region_id": NumberInt(4),
  "name": "Днепропетровск",
  "phone_code": "56"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4207b"),
  "id": NumberInt(617),
  "region_id": NumberInt(8),
  "name": "Днепрорудное",
  "phone_code": "6175"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4207c"),
  "id": NumberInt(618),
  "region_id": NumberInt(21),
  "name": "Днепряны",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4207d"),
  "id": NumberInt(619),
  "region_id": NumberInt(11),
  "name": "Добровеличковка",
  "phone_code": "5253"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4207e"),
  "id": NumberInt(620),
  "region_id": NumberInt(9),
  "name": "Добровляны",
  "phone_code": "3472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4207f"),
  "id": NumberInt(621),
  "region_id": NumberInt(1),
  "name": "Доброе",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42080"),
  "id": NumberInt(622),
  "region_id": NumberInt(13),
  "name": "Добромиль",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42081"),
  "id": NumberInt(623),
  "region_id": NumberInt(5),
  "name": "Доброполье",
  "phone_code": "6277"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42082"),
  "id": NumberInt(624),
  "region_id": NumberInt(13),
  "name": "Добротвор",
  "phone_code": "3254"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42083"),
  "id": NumberInt(625),
  "region_id": NumberInt(24),
  "name": "Добрянка",
  "phone_code": "4641"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42084"),
  "id": NumberInt(626),
  "region_id": NumberInt(7),
  "name": "Добрянское",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42085"),
  "id": NumberInt(627),
  "region_id": NumberInt(13),
  "name": "Добряны",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42086"),
  "id": NumberInt(628),
  "region_id": NumberInt(6),
  "name": "Довбыш",
  "phone_code": "4144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42087"),
  "id": NumberInt(629),
  "region_id": NumberInt(10),
  "name": "Довгалевское",
  "phone_code": "4462"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42088"),
  "id": NumberInt(630),
  "region_id": NumberInt(22),
  "name": "Довжок",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42089"),
  "id": NumberInt(631),
  "region_id": NumberInt(5),
  "name": "Докучаевск",
  "phone_code": "6275"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4208a"),
  "id": NumberInt(632),
  "region_id": NumberInt(7),
  "name": "Долгое",
  "phone_code": "3144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4208b"),
  "id": NumberInt(633),
  "region_id": NumberInt(19),
  "name": "Должанка",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4208c"),
  "id": NumberInt(634),
  "region_id": NumberInt(6),
  "name": "Должик",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4208d"),
  "id": NumberInt(635),
  "region_id": NumberInt(5),
  "name": "Долина",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4208e"),
  "id": NumberInt(636),
  "region_id": NumberInt(9),
  "name": "Долина",
  "phone_code": "3477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4208f"),
  "id": NumberInt(637),
  "region_id": NumberInt(5),
  "name": "Долиновка",
  "phone_code": "6212"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42090"),
  "id": NumberInt(638),
  "region_id": NumberInt(11),
  "name": "Долинская",
  "phone_code": "5234"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42091"),
  "id": NumberInt(639),
  "region_id": NumberInt(8),
  "name": "Долинское",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42092"),
  "id": NumberInt(640),
  "region_id": NumberInt(9),
  "name": "Долишнее залучье",
  "phone_code": "3476"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42093"),
  "id": NumberInt(641),
  "region_id": NumberInt(14),
  "name": "Доманевка",
  "phone_code": "5152"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42094"),
  "id": NumberInt(642),
  "region_id": NumberInt(5),
  "name": "Донецк",
  "phone_code": "62"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42095"),
  "id": NumberInt(643),
  "region_id": NumberInt(5),
  "name": "Донецкое",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42096"),
  "id": NumberInt(644),
  "region_id": NumberInt(5),
  "name": "Донское",
  "phone_code": "6244"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42097"),
  "id": NumberInt(645),
  "region_id": NumberInt(1),
  "name": "Донское",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42098"),
  "id": NumberInt(646),
  "region_id": NumberInt(5),
  "name": "Дорожное",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42099"),
  "id": NumberInt(647),
  "region_id": NumberInt(10),
  "name": "Дослидницкое",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4209a"),
  "id": NumberInt(648),
  "region_id": NumberInt(4),
  "name": "Дослидное",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4209b"),
  "id": NumberInt(649),
  "region_id": NumberInt(23),
  "name": "Драбов",
  "phone_code": "4738"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4209c"),
  "id": NumberInt(650),
  "region_id": NumberInt(23),
  "name": "Драбово-барятинское",
  "phone_code": "4738"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4209d"),
  "id": NumberInt(651),
  "region_id": NumberInt(7),
  "name": "Драгово",
  "phone_code": "3142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4209e"),
  "id": NumberInt(652),
  "region_id": NumberInt(9),
  "name": "Драгомирчаны",
  "phone_code": "3436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4209f"),
  "id": NumberInt(653),
  "region_id": NumberInt(5),
  "name": "Дробышево",
  "phone_code": "6261"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420a0"),
  "id": NumberInt(654),
  "region_id": NumberInt(13),
  "name": "Дрогобыч",
  "phone_code": "3244"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420a1"),
  "id": NumberInt(655),
  "region_id": NumberInt(19),
  "name": "Дружба",
  "phone_code": "3551"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420a2"),
  "id": NumberInt(656),
  "region_id": NumberInt(18),
  "name": "Дружба",
  "phone_code": "5456"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420a3"),
  "id": NumberInt(657),
  "region_id": NumberInt(6),
  "name": "Дружба",
  "phone_code": "4135"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420a4"),
  "id": NumberInt(658),
  "region_id": NumberInt(8),
  "name": "Дружелюбовка",
  "phone_code": "6143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420a5"),
  "id": NumberInt(659),
  "region_id": NumberInt(5),
  "name": "Дружковка",
  "phone_code": "6267"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420a6"),
  "id": NumberInt(660),
  "region_id": NumberInt(9),
  "name": "Дуба",
  "phone_code": "3474"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420a7"),
  "id": NumberInt(661),
  "region_id": NumberInt(3),
  "name": "Дубечно",
  "phone_code": "3346"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420a8"),
  "id": NumberInt(662),
  "region_id": NumberInt(23),
  "name": "Дубиевка",
  "phone_code": "472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420a9"),
  "id": NumberInt(663),
  "region_id": NumberInt(13),
  "name": "Дубина",
  "phone_code": "3251"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420aa"),
  "id": NumberInt(664),
  "region_id": NumberInt(13),
  "name": "Дубляны",
  "phone_code": "3252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420ab"),
  "id": NumberInt(665),
  "region_id": NumberInt(13),
  "name": "Дубляны",
  "phone_code": "3236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420ac"),
  "id": NumberInt(666),
  "region_id": NumberInt(17),
  "name": "Дубно",
  "phone_code": "3656"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420ad"),
  "id": NumberInt(667),
  "region_id": NumberInt(7),
  "name": "Дубовое",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420ae"),
  "id": NumberInt(668),
  "region_id": NumberInt(3),
  "name": "Дубовое",
  "phone_code": "3352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420af"),
  "id": NumberInt(669),
  "region_id": NumberInt(12),
  "name": "Дубовский",
  "phone_code": "6431"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420b0"),
  "id": NumberInt(670),
  "region_id": NumberInt(9),
  "name": "Дубовцы",
  "phone_code": "3431"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420b1"),
  "id": NumberInt(671),
  "region_id": NumberInt(18),
  "name": "Дубовязовка",
  "phone_code": "5447"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420b2"),
  "id": NumberInt(672),
  "region_id": NumberInt(7),
  "name": "Дубриничи",
  "phone_code": "3145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420b3"),
  "id": NumberInt(673),
  "region_id": NumberInt(17),
  "name": "Дубровица",
  "phone_code": "3658"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420b4"),
  "id": NumberInt(674),
  "region_id": NumberInt(17),
  "name": "Дубы",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420b5"),
  "id": NumberInt(675),
  "region_id": NumberInt(13),
  "name": "Дулибы",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420b6"),
  "id": NumberInt(676),
  "region_id": NumberInt(7),
  "name": "Дулово",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420b7"),
  "id": NumberInt(677),
  "region_id": NumberInt(22),
  "name": "Дунаевцы",
  "phone_code": "3858"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420b8"),
  "id": NumberInt(678),
  "region_id": NumberInt(22),
  "name": "Дунаевцы",
  "phone_code": "4336"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420b9"),
  "id": NumberInt(679),
  "region_id": NumberInt(7),
  "name": "Дыйда",
  "phone_code": "3141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420ba"),
  "id": NumberInt(680),
  "region_id": NumberInt(10),
  "name": "Дымер",
  "phone_code": "4496"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420bb"),
  "id": NumberInt(681),
  "region_id": NumberInt(1),
  "name": "Евпатория",
  "phone_code": "6569"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420bc"),
  "id": NumberInt(682),
  "region_id": NumberInt(9),
  "name": "Езуполь",
  "phone_code": "3436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420bd"),
  "id": NumberInt(683),
  "region_id": NumberInt(14),
  "name": "Еланец",
  "phone_code": "5159"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420be"),
  "id": NumberInt(684),
  "region_id": NumberInt(11),
  "name": "Елизаветградка",
  "phone_code": "5242"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420bf"),
  "id": NumberInt(685),
  "region_id": NumberInt(4),
  "name": "Елизарово",
  "phone_code": "5616"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420c0"),
  "id": NumberInt(686),
  "region_id": NumberInt(6),
  "name": "Емильчино",
  "phone_code": "4149"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420c1"),
  "id": NumberInt(687),
  "region_id": NumberInt(5),
  "name": "Енакиево",
  "phone_code": "6252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420c2"),
  "id": NumberInt(688),
  "region_id": NumberInt(23),
  "name": "Ерки",
  "phone_code": "4742"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420c3"),
  "id": NumberInt(689),
  "region_id": NumberInt(12),
  "name": "Есауловка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420c4"),
  "id": NumberInt(690),
  "region_id": NumberInt(2),
  "name": "Жабелевка",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420c5"),
  "id": NumberInt(691),
  "region_id": NumberInt(3),
  "name": "Жабка",
  "phone_code": "3365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420c6"),
  "id": NumberInt(692),
  "region_id": NumberInt(23),
  "name": "Жашков",
  "phone_code": "4747"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420c7"),
  "id": NumberInt(693),
  "region_id": NumberInt(22),
  "name": "Жванец",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420c8"),
  "id": NumberInt(694),
  "region_id": NumberInt(13),
  "name": "Жвирка",
  "phone_code": "3257"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420c9"),
  "id": NumberInt(695),
  "region_id": NumberInt(5),
  "name": "Ждановка",
  "phone_code": "6255"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420ca"),
  "id": NumberInt(696),
  "region_id": NumberInt(2),
  "name": "Ждановка",
  "phone_code": "43388"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420cb"),
  "id": NumberInt(697),
  "region_id": NumberInt(4),
  "name": "Жданово",
  "phone_code": "5616"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420cc"),
  "id": NumberInt(698),
  "region_id": NumberInt(7),
  "name": "Ждениево",
  "phone_code": "3136"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420cd"),
  "id": NumberInt(699),
  "region_id": NumberInt(4),
  "name": "Желтые Воды",
  "phone_code": "5652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420ce"),
  "id": NumberInt(700),
  "region_id": NumberInt(1),
  "name": "Желябовка",
  "phone_code": "6550"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420cf"),
  "id": NumberInt(701),
  "region_id": NumberInt(15),
  "name": "Жеребково",
  "phone_code": "4863"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420d0"),
  "id": NumberInt(702),
  "region_id": NumberInt(13),
  "name": "Жидачев",
  "phone_code": "3239"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420d1"),
  "id": NumberInt(703),
  "region_id": NumberInt(6),
  "name": "Житомир",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420d2"),
  "id": NumberInt(704),
  "region_id": NumberInt(2),
  "name": "Жмеринка",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420d3"),
  "id": NumberInt(705),
  "region_id": NumberInt(18),
  "name": "Жовтневое",
  "phone_code": "5447"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420d4"),
  "id": NumberInt(706),
  "region_id": NumberInt(16),
  "name": "Жовтневое",
  "phone_code": "5363"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420d5"),
  "id": NumberInt(707),
  "region_id": NumberInt(10),
  "name": "Жовтневое",
  "phone_code": "4467"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420d6"),
  "id": NumberInt(708),
  "region_id": NumberInt(18),
  "name": "Жовтневое",
  "phone_code": "5443"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420d7"),
  "id": NumberInt(709),
  "region_id": NumberInt(21),
  "name": "Жовтневое",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420d8"),
  "id": NumberInt(710),
  "region_id": NumberInt(3),
  "name": "Жовтневое",
  "phone_code": "3344"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420d9"),
  "id": NumberInt(711),
  "region_id": NumberInt(17),
  "name": "Жовтневое",
  "phone_code": "3654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420da"),
  "id": NumberInt(712),
  "region_id": NumberInt(13),
  "name": "Жолква",
  "phone_code": "3252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420db"),
  "id": NumberInt(713),
  "region_id": NumberInt(13),
  "name": "Жолква",
  "phone_code": "3252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420dc"),
  "id": NumberInt(714),
  "region_id": NumberInt(13),
  "name": "Жулин",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420dd"),
  "id": NumberInt(715),
  "region_id": NumberInt(3),
  "name": "Журавичи",
  "phone_code": "3365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420de"),
  "id": NumberInt(716),
  "region_id": NumberInt(1),
  "name": "Журавки",
  "phone_code": "6555"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420df"),
  "id": NumberInt(717),
  "region_id": NumberInt(2),
  "name": "Журавлевка",
  "phone_code": "4335"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420e0"),
  "id": NumberInt(718),
  "region_id": NumberInt(9),
  "name": "Заболотов",
  "phone_code": "3476"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420e1"),
  "id": NumberInt(719),
  "region_id": NumberInt(3),
  "name": "Забороль",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420e2"),
  "id": NumberInt(720),
  "region_id": NumberInt(11),
  "name": "Завалье",
  "phone_code": "4865"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420e3"),
  "id": NumberInt(721),
  "region_id": NumberInt(9),
  "name": "Завалье",
  "phone_code": "3476"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420e4"),
  "id": NumberInt(722),
  "region_id": NumberInt(7),
  "name": "Завидово",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420e5"),
  "id": NumberInt(723),
  "region_id": NumberInt(19),
  "name": "Заводское",
  "phone_code": "3552"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420e6"),
  "id": NumberInt(724),
  "region_id": NumberInt(9),
  "name": "Завой",
  "phone_code": "3472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420e7"),
  "id": NumberInt(725),
  "region_id": NumberInt(9),
  "name": "Загвоздье",
  "phone_code": "3422"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420e8"),
  "id": NumberInt(726),
  "region_id": NumberInt(15),
  "name": "Загнитков",
  "phone_code": "4867"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420e9"),
  "id": NumberInt(727),
  "region_id": NumberInt(13),
  "name": "Загорное",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420ea"),
  "id": NumberInt(728),
  "region_id": NumberInt(7),
  "name": "Задельское",
  "phone_code": "3136"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420eb"),
  "id": NumberInt(729),
  "region_id": NumberInt(9),
  "name": "Заднестрянск",
  "phone_code": "3431"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420ec"),
  "id": NumberInt(730),
  "region_id": NumberInt(10),
  "name": "Зазимье",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420ed"),
  "id": NumberInt(731),
  "region_id": NumberInt(22),
  "name": "Закупное",
  "phone_code": "3859"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420ee"),
  "id": NumberInt(732),
  "region_id": NumberInt(3),
  "name": "Залесочье",
  "phone_code": "3365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420ef"),
  "id": NumberInt(733),
  "region_id": NumberInt(19),
  "name": "Залещики",
  "phone_code": "3554"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420f0"),
  "id": NumberInt(734),
  "region_id": NumberInt(16),
  "name": "Зализничное",
  "phone_code": "532"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420f1"),
  "id": NumberInt(735),
  "region_id": NumberInt(8),
  "name": "Зализничное",
  "phone_code": "6145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420f2"),
  "id": NumberInt(736),
  "region_id": NumberInt(21),
  "name": "Зализный порт",
  "phone_code": "5539"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420f3"),
  "id": NumberInt(737),
  "region_id": NumberInt(19),
  "name": "Зализцы",
  "phone_code": "3540"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420f4"),
  "id": NumberInt(738),
  "region_id": NumberInt(24),
  "name": "Замглай",
  "phone_code": "4641"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420f5"),
  "id": NumberInt(739),
  "region_id": NumberInt(3),
  "name": "Замличи",
  "phone_code": "3374"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420f6"),
  "id": NumberInt(740),
  "region_id": NumberInt(5),
  "name": "Заможное",
  "phone_code": "6279"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420f7"),
  "id": NumberInt(741),
  "region_id": NumberInt(1),
  "name": "Заозерное",
  "phone_code": "6569"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420f8"),
  "id": NumberInt(742),
  "region_id": NumberInt(8),
  "name": "Запорожье",
  "phone_code": "61"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420f9"),
  "id": NumberInt(743),
  "region_id": NumberInt(13),
  "name": "Запытов",
  "phone_code": "3254"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420fa"),
  "id": NumberInt(744),
  "region_id": NumberInt(2),
  "name": "Зарванцы",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420fb"),
  "id": NumberInt(745),
  "region_id": NumberInt(6),
  "name": "Заречаны",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420fc"),
  "id": NumberInt(746),
  "region_id": NumberInt(17),
  "name": "Заречное",
  "phone_code": "3632"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420fd"),
  "id": NumberInt(747),
  "region_id": NumberInt(3),
  "name": "Заречье",
  "phone_code": "3342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420fe"),
  "id": NumberInt(748),
  "region_id": NumberInt(3),
  "name": "Заречье",
  "phone_code": "3352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc420ff"),
  "id": NumberInt(749),
  "region_id": NumberInt(25),
  "name": "Зарожаны",
  "phone_code": "37312"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42100"),
  "id": NumberInt(750),
  "region_id": NumberInt(17),
  "name": "Заря",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42101"),
  "id": NumberInt(751),
  "region_id": NumberInt(5),
  "name": "Заря",
  "phone_code": "6272"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42102"),
  "id": NumberInt(752),
  "region_id": NumberInt(25),
  "name": "Заставна",
  "phone_code": "3737"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42103"),
  "id": NumberInt(753),
  "region_id": NumberInt(19),
  "name": "Застеночное",
  "phone_code": "3551"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42104"),
  "id": NumberInt(754),
  "region_id": NumberInt(16),
  "name": "Засулье",
  "phone_code": "5361"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42105"),
  "id": NumberInt(755),
  "region_id": NumberInt(15),
  "name": "Затишье",
  "phone_code": "4860"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42106"),
  "id": NumberInt(756),
  "region_id": NumberInt(15),
  "name": "Затока",
  "phone_code": "4849"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42107"),
  "id": NumberInt(757),
  "region_id": NumberInt(20),
  "name": "Зачепиловка",
  "phone_code": "5761"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42108"),
  "id": NumberInt(758),
  "region_id": NumberInt(19),
  "name": "Збараж",
  "phone_code": "3550"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42109"),
  "id": NumberInt(759),
  "region_id": NumberInt(19),
  "name": "Зборов",
  "phone_code": "3540"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4210a"),
  "id": NumberInt(760),
  "region_id": NumberInt(23),
  "name": "Звенигородка",
  "phone_code": "4740"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4210b"),
  "id": NumberInt(761),
  "region_id": NumberInt(10),
  "name": "Згуровка",
  "phone_code": "4470"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4210c"),
  "id": NumberInt(762),
  "region_id": NumberInt(17),
  "name": "Здолбунов",
  "phone_code": "36522"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4210d"),
  "id": NumberInt(763),
  "region_id": NumberInt(3),
  "name": "Зеленая",
  "phone_code": "3352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4210e"),
  "id": NumberInt(764),
  "region_id": NumberInt(4),
  "name": "Зеленодольск",
  "phone_code": "5655"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4210f"),
  "id": NumberInt(765),
  "region_id": NumberInt(18),
  "name": "Зеленый гай",
  "phone_code": "542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42110"),
  "id": NumberInt(766),
  "region_id": NumberInt(13),
  "name": "Зелив",
  "phone_code": "3259"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42111"),
  "id": NumberInt(767),
  "region_id": NumberInt(16),
  "name": "Зеньков",
  "phone_code": "5353"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42112"),
  "id": NumberInt(768),
  "region_id": NumberInt(16),
  "name": "Зеньков",
  "phone_code": "5353"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42113"),
  "id": NumberInt(769),
  "region_id": NumberInt(20),
  "name": "Зидьки",
  "phone_code": "5747"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42114"),
  "id": NumberInt(770),
  "region_id": NumberInt(13),
  "name": "Зимняя Вода",
  "phone_code": "322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42115"),
  "id": NumberInt(771),
  "region_id": NumberInt(12),
  "name": "Зимогорье",
  "phone_code": "6473"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42116"),
  "id": NumberInt(772),
  "region_id": NumberInt(22),
  "name": "Зиньков",
  "phone_code": "43388"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42117"),
  "id": NumberInt(773),
  "region_id": NumberInt(17),
  "name": "Зирне",
  "phone_code": "03653"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42118"),
  "id": NumberInt(774),
  "region_id": NumberInt(4),
  "name": "Златоустовка",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42119"),
  "id": NumberInt(775),
  "region_id": NumberInt(20),
  "name": "Змиев",
  "phone_code": "5747"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4211a"),
  "id": NumberInt(776),
  "region_id": NumberInt(3),
  "name": "Змиенец",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4211b"),
  "id": NumberInt(777),
  "region_id": NumberInt(11),
  "name": "Знаменка",
  "phone_code": "5233"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4211c"),
  "id": NumberInt(778),
  "region_id": NumberInt(7),
  "name": "Зняцево",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4211d"),
  "id": NumberInt(779),
  "region_id": NumberInt(11),
  "name": "Золотаревка",
  "phone_code": "5236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4211e"),
  "id": NumberInt(780),
  "region_id": NumberInt(19),
  "name": "Золотники",
  "phone_code": "3551"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4211f"),
  "id": NumberInt(781),
  "region_id": NumberInt(12),
  "name": "Золотое",
  "phone_code": "6455"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42120"),
  "id": NumberInt(782),
  "region_id": NumberInt(19),
  "name": "Золотой Поток",
  "phone_code": "3544"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42121"),
  "id": NumberInt(783),
  "region_id": NumberInt(23),
  "name": "Золотоноша",
  "phone_code": "4737"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42122"),
  "id": NumberInt(784),
  "region_id": NumberInt(20),
  "name": "Золочев",
  "phone_code": "5764"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42123"),
  "id": NumberInt(785),
  "region_id": NumberInt(13),
  "name": "Золочев",
  "phone_code": "3265"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42124"),
  "id": NumberInt(786),
  "region_id": NumberInt(12),
  "name": "Зоринск",
  "phone_code": "6441"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42125"),
  "id": NumberInt(787),
  "region_id": NumberInt(13),
  "name": "Зоротовичи",
  "phone_code": "3238"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42126"),
  "id": NumberInt(788),
  "region_id": NumberInt(13),
  "name": "Зубра",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42127"),
  "id": NumberInt(789),
  "region_id": NumberInt(5),
  "name": "Зугрэс",
  "phone_code": "6257"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42128"),
  "id": NumberInt(790),
  "region_id": NumberInt(1),
  "name": "Зуя",
  "phone_code": "6559"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42129"),
  "id": NumberInt(791),
  "region_id": NumberInt(19),
  "name": "Иване-пусте",
  "phone_code": "3541"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4212a"),
  "id": NumberInt(792),
  "region_id": NumberInt(3),
  "name": "Иваничи",
  "phone_code": "3372"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4212b"),
  "id": NumberInt(793),
  "region_id": NumberInt(10),
  "name": "Иванков",
  "phone_code": "4495"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4212c"),
  "id": NumberInt(794),
  "region_id": NumberInt(10),
  "name": "Иванков",
  "phone_code": "4491"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4212d"),
  "id": NumberInt(795),
  "region_id": NumberInt(25),
  "name": "Иванковцы",
  "phone_code": "3736"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4212e"),
  "id": NumberInt(796),
  "region_id": NumberInt(11),
  "name": "Ивано-Благодатное",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4212f"),
  "id": NumberInt(797),
  "region_id": NumberInt(13),
  "name": "Ивано-франково",
  "phone_code": "3259"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42130"),
  "id": NumberInt(798),
  "region_id": NumberInt(9),
  "name": "Ивано-Франковск",
  "phone_code": "342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42131"),
  "id": NumberInt(799),
  "region_id": NumberInt(4),
  "name": "Ивано-яризовка",
  "phone_code": "5610"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42132"),
  "id": NumberInt(800),
  "region_id": NumberInt(2),
  "name": "Иванов",
  "phone_code": "4333"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42133"),
  "id": NumberInt(801),
  "region_id": NumberInt(6),
  "name": "Ивановка",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42134"),
  "id": NumberInt(802),
  "region_id": NumberInt(21),
  "name": "Ивановка",
  "phone_code": "4331"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42135"),
  "id": NumberInt(803),
  "region_id": NumberInt(12),
  "name": "Ивановка",
  "phone_code": "6431"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42136"),
  "id": NumberInt(804),
  "region_id": NumberInt(21),
  "name": "Ивановка",
  "phone_code": "5531"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42137"),
  "id": NumberInt(805),
  "region_id": NumberInt(15),
  "name": "Ивановка",
  "phone_code": "4854"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42138"),
  "id": NumberInt(806),
  "region_id": NumberInt(9),
  "name": "Ивановка",
  "phone_code": "3474"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42139"),
  "id": NumberInt(807),
  "region_id": NumberInt(25),
  "name": "Ивановцы",
  "phone_code": "3732"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4213a"),
  "id": NumberInt(808),
  "region_id": NumberInt(6),
  "name": "Иванополь",
  "phone_code": "4139"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4213b"),
  "id": NumberInt(809),
  "region_id": NumberInt(5),
  "name": "Иванополье",
  "phone_code": "6272"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4213c"),
  "id": NumberInt(810),
  "region_id": NumberInt(17),
  "name": "Иванчи",
  "phone_code": "3634"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4213d"),
  "id": NumberInt(811),
  "region_id": NumberInt(3),
  "name": "Иванычи",
  "phone_code": "3372"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4213e"),
  "id": NumberInt(812),
  "region_id": NumberInt(23),
  "name": "Иваньки",
  "phone_code": "4748"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4213f"),
  "id": NumberInt(813),
  "region_id": NumberInt(6),
  "name": "Ивашковка",
  "phone_code": "4141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42140"),
  "id": NumberInt(814),
  "region_id": NumberInt(7),
  "name": "Иза",
  "phone_code": "3142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42141"),
  "id": NumberInt(815),
  "region_id": NumberInt(15),
  "name": "Измаил",
  "phone_code": "4841"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42142"),
  "id": NumberInt(816),
  "region_id": NumberInt(20),
  "name": "Изюм",
  "phone_code": "5743"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42143"),
  "id": NumberInt(817),
  "region_id": NumberInt(22),
  "name": "Изяслав",
  "phone_code": "3852"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42144"),
  "id": NumberInt(818),
  "region_id": NumberInt(4),
  "name": "Илларионово",
  "phone_code": "5615"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42145"),
  "id": NumberInt(819),
  "region_id": NumberInt(2),
  "name": "Иллинцы",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42146"),
  "id": NumberInt(820),
  "region_id": NumberInt(5),
  "name": "Иловайск",
  "phone_code": "6275"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42147"),
  "id": NumberInt(821),
  "region_id": NumberInt(2),
  "name": "Ильинцы",
  "phone_code": "4345"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42148"),
  "id": NumberInt(822),
  "region_id": NumberInt(5),
  "name": "Ильича",
  "phone_code": "6272"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42149"),
  "id": NumberInt(823),
  "region_id": NumberInt(15),
  "name": "Ильичевка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4214a"),
  "id": NumberInt(824),
  "region_id": NumberInt(15),
  "name": "Ильичевск",
  "phone_code": "4868"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4214b"),
  "id": NumberInt(825),
  "region_id": NumberInt(5),
  "name": "Ильичовское",
  "phone_code": "6297"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4214c"),
  "id": NumberInt(826),
  "region_id": NumberInt(7),
  "name": "Ильница",
  "phone_code": "3144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4214d"),
  "id": NumberInt(827),
  "region_id": NumberInt(4),
  "name": "Ингулец",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4214e"),
  "id": NumberInt(828),
  "region_id": NumberInt(4),
  "name": "Ингулец",
  "phone_code": "5657"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4214f"),
  "id": NumberInt(829),
  "region_id": NumberInt(1),
  "name": "Инкерман",
  "phone_code": "692"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42150"),
  "id": NumberInt(830),
  "region_id": NumberInt(2),
  "name": "Иосиповка",
  "phone_code": "4342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42151"),
  "id": NumberInt(831),
  "region_id": NumberInt(23),
  "name": "Ирклиев",
  "phone_code": "4739"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42152"),
  "id": NumberInt(832),
  "region_id": NumberInt(10),
  "name": "Ирпень",
  "phone_code": "4497"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42153"),
  "id": NumberInt(833),
  "region_id": NumberInt(7),
  "name": "Иршава",
  "phone_code": "3144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42154"),
  "id": NumberInt(834),
  "region_id": NumberInt(6),
  "name": "Иршанск",
  "phone_code": "4145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42155"),
  "id": NumberInt(835),
  "region_id": NumberInt(15),
  "name": "Исаево",
  "phone_code": "4857"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42156"),
  "id": NumberInt(836),
  "region_id": NumberInt(25),
  "name": "Испас",
  "phone_code": "3730"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42157"),
  "id": NumberInt(837),
  "region_id": NumberInt(24),
  "name": "Ичня",
  "phone_code": "4633"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42158"),
  "id": NumberInt(838),
  "region_id": NumberInt(6),
  "name": "Йосиповка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42159"),
  "id": NumberInt(839),
  "region_id": NumberInt(10),
  "name": "Йосиповка",
  "phone_code": "4463"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4215a"),
  "id": NumberInt(840),
  "region_id": NumberInt(14),
  "name": "Кавуны",
  "phone_code": "5132"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4215b"),
  "id": NumberInt(841),
  "region_id": NumberInt(10),
  "name": "Кагарлык",
  "phone_code": "4473"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4215c"),
  "id": NumberInt(842),
  "region_id": NumberInt(14),
  "name": "Казанка",
  "phone_code": "5151"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4215d"),
  "id": NumberInt(843),
  "region_id": NumberInt(2),
  "name": "Казатин",
  "phone_code": "4342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4215e"),
  "id": NumberInt(844),
  "region_id": NumberInt(21),
  "name": "Казацкое",
  "phone_code": "4330"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4215f"),
  "id": NumberInt(845),
  "region_id": NumberInt(21),
  "name": "Казачьи лагеря",
  "phone_code": "5542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42160"),
  "id": NumberInt(846),
  "region_id": NumberInt(20),
  "name": "Казачья Лопань",
  "phone_code": "5763"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42161"),
  "id": NumberInt(847),
  "region_id": NumberInt(16),
  "name": "Калайдинцы",
  "phone_code": "5361"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42162"),
  "id": NumberInt(848),
  "region_id": NumberInt(11),
  "name": "Калантаев",
  "phone_code": "5236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42163"),
  "id": NumberInt(849),
  "region_id": NumberInt(21),
  "name": "Каланчак",
  "phone_code": "5530"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42164"),
  "id": NumberInt(850),
  "region_id": NumberInt(21),
  "name": "Калининское",
  "phone_code": "4349"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42165"),
  "id": NumberInt(851),
  "region_id": NumberInt(13),
  "name": "Калинов",
  "phone_code": "3236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42166"),
  "id": NumberInt(852),
  "region_id": NumberInt(1),
  "name": "Калиновка",
  "phone_code": "6557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42167"),
  "id": NumberInt(853),
  "region_id": NumberInt(10),
  "name": "Калиновка",
  "phone_code": "4478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42168"),
  "id": NumberInt(854),
  "region_id": NumberInt(10),
  "name": "Калиновка",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42169"),
  "id": NumberInt(855),
  "region_id": NumberInt(2),
  "name": "Калиновка",
  "phone_code": "4333"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4216a"),
  "id": NumberInt(856),
  "region_id": NumberInt(10),
  "name": "Калиновка",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4216b"),
  "id": NumberInt(857),
  "region_id": NumberInt(8),
  "name": "Калиновка",
  "phone_code": "6136"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4216c"),
  "id": NumberInt(858),
  "region_id": NumberInt(2),
  "name": "Калиновка вторая",
  "phone_code": "4333"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4216d"),
  "id": NumberInt(859),
  "region_id": NumberInt(7),
  "name": "Калины",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4216e"),
  "id": NumberInt(860),
  "region_id": NumberInt(10),
  "name": "Калита",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4216f"),
  "id": NumberInt(861),
  "region_id": NumberInt(11),
  "name": "Калмазово",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42170"),
  "id": NumberInt(862),
  "region_id": NumberInt(9),
  "name": "Калуш",
  "phone_code": "3472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42171"),
  "id": NumberInt(863),
  "region_id": NumberInt(11),
  "name": "Камбурлиевка",
  "phone_code": "5258"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42172"),
  "id": NumberInt(864),
  "region_id": NumberInt(22),
  "name": "Каменец-Подольский",
  "phone_code": "3849"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42173"),
  "id": NumberInt(865),
  "region_id": NumberInt(7),
  "name": "Каменица",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42174"),
  "id": NumberInt(866),
  "region_id": NumberInt(4),
  "name": "Каменка",
  "phone_code": "5650"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42175"),
  "id": NumberInt(867),
  "region_id": NumberInt(22),
  "name": "Каменка",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42176"),
  "id": NumberInt(868),
  "region_id": NumberInt(23),
  "name": "Каменка",
  "phone_code": "4732"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42177"),
  "id": NumberInt(869),
  "region_id": NumberInt(13),
  "name": "Каменка-Бугская",
  "phone_code": "3254"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42178"),
  "id": NumberInt(870),
  "region_id": NumberInt(8),
  "name": "Каменка-Днепровская",
  "phone_code": "6138"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42179"),
  "id": NumberInt(871),
  "region_id": NumberInt(2),
  "name": "Каменногорка",
  "phone_code": "4345"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4217a"),
  "id": NumberInt(872),
  "region_id": NumberInt(6),
  "name": "Каменный брод",
  "phone_code": "4241"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4217b"),
  "id": NumberInt(873),
  "region_id": NumberInt(6),
  "name": "Каменный Брод",
  "phone_code": "4144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4217c"),
  "id": NumberInt(874),
  "region_id": NumberInt(11),
  "name": "Каменный мост",
  "phone_code": "5251"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4217d"),
  "id": NumberInt(875),
  "region_id": NumberInt(14),
  "name": "Каменный Мост",
  "phone_code": "5161"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4217e"),
  "id": NumberInt(876),
  "region_id": NumberInt(1),
  "name": "Каменоломня",
  "phone_code": "6569"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4217f"),
  "id": NumberInt(877),
  "region_id": NumberInt(4),
  "name": "Каменское",
  "phone_code": "5662"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42180"),
  "id": NumberInt(878),
  "region_id": NumberInt(3),
  "name": "Камень-Каширский",
  "phone_code": "3357"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42181"),
  "id": NumberInt(879),
  "region_id": NumberInt(8),
  "name": "Камыш-Заря",
  "phone_code": "6147"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42182"),
  "id": NumberInt(880),
  "region_id": NumberInt(21),
  "name": "Камышаны",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42183"),
  "id": NumberInt(881),
  "region_id": NumberInt(8),
  "name": "Камышеваха",
  "phone_code": "6141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42184"),
  "id": NumberInt(882),
  "region_id": NumberInt(16),
  "name": "Камышня",
  "phone_code": "5355"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42185"),
  "id": NumberInt(883),
  "region_id": NumberInt(7),
  "name": "Камянское",
  "phone_code": "03144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42186"),
  "id": NumberInt(884),
  "region_id": NumberInt(23),
  "name": "Канев",
  "phone_code": "4736"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42187"),
  "id": NumberInt(885),
  "region_id": NumberInt(8),
  "name": "Каневское",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42188"),
  "id": NumberInt(886),
  "region_id": NumberInt(11),
  "name": "Капитановка",
  "phone_code": "5256"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42189"),
  "id": NumberInt(887),
  "region_id": NumberInt(20),
  "name": "Капитоловка",
  "phone_code": "5743"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4218a"),
  "id": NumberInt(888),
  "region_id": NumberInt(2),
  "name": "Капустин",
  "phone_code": "4343"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4218b"),
  "id": NumberInt(889),
  "region_id": NumberInt(16),
  "name": "Карловка",
  "phone_code": "5346"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4218c"),
  "id": NumberInt(890),
  "region_id": NumberInt(15),
  "name": "Каролино-бугаз",
  "phone_code": "4851"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4218d"),
  "id": NumberInt(891),
  "region_id": NumberInt(12),
  "name": "Карпаты",
  "phone_code": "6441"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4218e"),
  "id": NumberInt(892),
  "region_id": NumberInt(21),
  "name": "Карьерное",
  "phone_code": "4349"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4218f"),
  "id": NumberInt(893),
  "region_id": NumberInt(1),
  "name": "Карьерное",
  "phone_code": "6563"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42190"),
  "id": NumberInt(894),
  "region_id": NumberInt(11),
  "name": "Катериновка",
  "phone_code": "522"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42191"),
  "id": NumberInt(895),
  "region_id": NumberInt(5),
  "name": "Катериновка",
  "phone_code": "6212"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42192"),
  "id": NumberInt(896),
  "region_id": NumberInt(23),
  "name": "Катеринополь",
  "phone_code": "4742"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42193"),
  "id": NumberInt(897),
  "region_id": NumberInt(21),
  "name": "Каховка",
  "phone_code": "5536"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42194"),
  "id": NumberInt(898),
  "region_id": NumberInt(1),
  "name": "Кацивели",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42195"),
  "id": NumberInt(899),
  "region_id": NumberInt(1),
  "name": "Кача",
  "phone_code": "692"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42196"),
  "id": NumberInt(900),
  "region_id": NumberInt(10),
  "name": "Кашперовка",
  "phone_code": "4460"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42197"),
  "id": NumberInt(901),
  "region_id": NumberInt(17),
  "name": "Квасилов",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42198"),
  "id": NumberInt(902),
  "region_id": NumberInt(7),
  "name": "Квасы",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42199"),
  "id": NumberInt(903),
  "region_id": NumberInt(20),
  "name": "Кегичевка",
  "phone_code": "5755"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4219a"),
  "id": NumberInt(904),
  "region_id": NumberInt(25),
  "name": "Кельменцы",
  "phone_code": "3732"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4219b"),
  "id": NumberInt(905),
  "region_id": NumberInt(7),
  "name": "Кендерешов",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4219c"),
  "id": NumberInt(906),
  "region_id": NumberInt(1),
  "name": "Керчь",
  "phone_code": "6561"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4219d"),
  "id": NumberInt(907),
  "region_id": NumberInt(3),
  "name": "Киверцы",
  "phone_code": "3365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4219e"),
  "id": NumberInt(908),
  "region_id": NumberInt(10),
  "name": "Киев",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4219f"),
  "id": NumberInt(909),
  "region_id": NumberInt(24),
  "name": "Киенка",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421a0"),
  "id": NumberInt(910),
  "region_id": NumberInt(15),
  "name": "Килия",
  "phone_code": "4843"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421a1"),
  "id": NumberInt(911),
  "region_id": NumberInt(4),
  "name": "Кильчень",
  "phone_code": "5612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421a2"),
  "id": NumberInt(912),
  "region_id": NumberInt(6),
  "name": "Кирданы",
  "phone_code": "4148"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421a3"),
  "id": NumberInt(913),
  "region_id": NumberInt(18),
  "name": "Кириковка",
  "phone_code": "5457"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421a4"),
  "id": NumberInt(914),
  "region_id": NumberInt(8),
  "name": "Кирилловка",
  "phone_code": "6131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421a5"),
  "id": NumberInt(915),
  "region_id": NumberInt(2),
  "name": "Кирнасивка",
  "phone_code": "4335"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421a6"),
  "id": NumberInt(916),
  "region_id": NumberInt(4),
  "name": "Кировка",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421a7"),
  "id": NumberInt(917),
  "region_id": NumberInt(11),
  "name": "Кировоград",
  "phone_code": "522"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421a8"),
  "id": NumberInt(918),
  "region_id": NumberInt(12),
  "name": "Кировск",
  "phone_code": "6446"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421a9"),
  "id": NumberInt(919),
  "region_id": NumberInt(4),
  "name": "Кировское",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421aa"),
  "id": NumberInt(920),
  "region_id": NumberInt(1),
  "name": "Кировское",
  "phone_code": "6555"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421ab"),
  "id": NumberInt(921),
  "region_id": NumberInt(5),
  "name": "Кировское",
  "phone_code": "6250"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421ac"),
  "id": NumberInt(922),
  "region_id": NumberInt(25),
  "name": "Киселев",
  "phone_code": "3736"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421ad"),
  "id": NumberInt(923),
  "region_id": NumberInt(23),
  "name": "Киселевка",
  "phone_code": "4742"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421ae"),
  "id": NumberInt(924),
  "region_id": NumberInt(20),
  "name": "Кисели",
  "phone_code": "5748"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421af"),
  "id": NumberInt(925),
  "region_id": NumberInt(25),
  "name": "Кицмань",
  "phone_code": "3736"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421b0"),
  "id": NumberInt(926),
  "region_id": NumberInt(6),
  "name": "Кишин",
  "phone_code": "4135"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421b1"),
  "id": NumberInt(927),
  "region_id": NumberInt(3),
  "name": "Кияж",
  "phone_code": "3368"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421b2"),
  "id": NumberInt(928),
  "region_id": NumberInt(18),
  "name": "Кияница",
  "phone_code": "5422"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421b3"),
  "id": NumberInt(929),
  "region_id": NumberInt(18),
  "name": "Кияница",
  "phone_code": "5454"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421b4"),
  "id": NumberInt(930),
  "region_id": NumberInt(10),
  "name": "Клавдиево-Тарасово",
  "phone_code": "4477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421b5"),
  "id": NumberInt(931),
  "region_id": NumberInt(17),
  "name": "Клевань",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421b6"),
  "id": NumberInt(932),
  "region_id": NumberInt(2),
  "name": "Клембовка",
  "phone_code": "4336"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421b7"),
  "id": NumberInt(933),
  "region_id": NumberInt(22),
  "name": "Клембовка",
  "phone_code": "3852"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421b8"),
  "id": NumberInt(934),
  "region_id": NumberInt(6),
  "name": "Кленовая",
  "phone_code": "4141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421b9"),
  "id": NumberInt(935),
  "region_id": NumberInt(7),
  "name": "Кленовец",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421ba"),
  "id": NumberInt(936),
  "region_id": NumberInt(5),
  "name": "Кленовка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421bb"),
  "id": NumberInt(937),
  "region_id": NumberInt(12),
  "name": "Кленовый",
  "phone_code": "6433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421bc"),
  "id": NumberInt(938),
  "region_id": NumberInt(17),
  "name": "Клесов",
  "phone_code": "3655"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421bd"),
  "id": NumberInt(939),
  "region_id": NumberInt(6),
  "name": "Клетчин",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421be"),
  "id": NumberInt(940),
  "region_id": NumberInt(22),
  "name": "Климашовка",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421bf"),
  "id": NumberInt(941),
  "region_id": NumberInt(11),
  "name": "Клинцы",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421c0"),
  "id": NumberInt(942),
  "region_id": NumberInt(25),
  "name": "Клишковцы",
  "phone_code": "3731"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421c1"),
  "id": NumberInt(943),
  "region_id": NumberInt(7),
  "name": "Ключарки",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421c2"),
  "id": NumberInt(944),
  "region_id": NumberInt(9),
  "name": "Княжелука",
  "phone_code": "3477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421c3"),
  "id": NumberInt(945),
  "region_id": NumberInt(10),
  "name": "Княжичи",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421c4"),
  "id": NumberInt(946),
  "region_id": NumberInt(22),
  "name": "Княжполь",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421c5"),
  "id": NumberInt(947),
  "region_id": NumberInt(16),
  "name": "Кобеляки",
  "phone_code": "5343"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421c6"),
  "id": NumberInt(948),
  "region_id": NumberInt(14),
  "name": "Коблево",
  "phone_code": "05153"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421c7"),
  "id": NumberInt(949),
  "region_id": NumberInt(7),
  "name": "Кобылецкая поляна",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421c8"),
  "id": NumberInt(950),
  "region_id": NumberInt(16),
  "name": "Ковалевка",
  "phone_code": "5322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421c9"),
  "id": NumberInt(951),
  "region_id": NumberInt(9),
  "name": "Ковалевка",
  "phone_code": "3433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421ca"),
  "id": NumberInt(952),
  "region_id": NumberInt(2),
  "name": "Ковалевка",
  "phone_code": "4331"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421cb"),
  "id": NumberInt(953),
  "region_id": NumberInt(3),
  "name": "Ковель",
  "phone_code": "3352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421cc"),
  "id": NumberInt(954),
  "region_id": NumberInt(24),
  "name": "Ковпыта",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421cd"),
  "id": NumberInt(955),
  "region_id": NumberInt(20),
  "name": "Ковшаровка",
  "phone_code": "5742"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421ce"),
  "id": NumberInt(956),
  "region_id": NumberInt(20),
  "name": "Ковяги",
  "phone_code": "5753"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421cf"),
  "id": NumberInt(957),
  "region_id": NumberInt(10),
  "name": "Кодра",
  "phone_code": "4478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421d0"),
  "id": NumberInt(958),
  "region_id": NumberInt(15),
  "name": "Кодыма",
  "phone_code": "4867"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421d1"),
  "id": NumberInt(959),
  "region_id": NumberInt(10),
  "name": "Кожанка",
  "phone_code": "265"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421d2"),
  "id": NumberInt(960),
  "region_id": NumberInt(8),
  "name": "Коза",
  "phone_code": "6153"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421d3"),
  "id": NumberInt(961),
  "region_id": NumberInt(24),
  "name": "Козелец",
  "phone_code": "4646"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421d4"),
  "id": NumberInt(962),
  "region_id": NumberInt(16),
  "name": "Козельщина",
  "phone_code": "5342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421d5"),
  "id": NumberInt(963),
  "region_id": NumberInt(17),
  "name": "Козин",
  "phone_code": "3633"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421d6"),
  "id": NumberInt(964),
  "region_id": NumberInt(10),
  "name": "Козин",
  "phone_code": "4472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421d7"),
  "id": NumberInt(965),
  "region_id": NumberInt(19),
  "name": "Козлов",
  "phone_code": "3547"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421d8"),
  "id": NumberInt(966),
  "region_id": NumberInt(19),
  "name": "Козова",
  "phone_code": "3547"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421d9"),
  "id": NumberInt(967),
  "region_id": NumberInt(2),
  "name": "Козятин",
  "phone_code": "4342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421da"),
  "id": NumberInt(968),
  "region_id": NumberInt(1),
  "name": "Коктебель",
  "phone_code": "06562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421db"),
  "id": NumberInt(969),
  "region_id": NumberInt(14),
  "name": "Коларовка",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421dc"),
  "id": NumberInt(970),
  "region_id": NumberInt(3),
  "name": "Колки",
  "phone_code": "3376"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421dd"),
  "id": NumberInt(971),
  "region_id": NumberInt(17),
  "name": "Колоденка",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421de"),
  "id": NumberInt(972),
  "region_id": NumberInt(23),
  "name": "Колодистое",
  "phone_code": "4744"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421df"),
  "id": NumberInt(973),
  "region_id": NumberInt(20),
  "name": "Коломак",
  "phone_code": "5766"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421e0"),
  "id": NumberInt(974),
  "region_id": NumberInt(9),
  "name": "Коломыя",
  "phone_code": "3433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421e1"),
  "id": NumberInt(975),
  "region_id": NumberInt(7),
  "name": "Колочава",
  "phone_code": "3146"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421e2"),
  "id": NumberInt(976),
  "region_id": NumberInt(24),
  "name": "Колычовка",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421e3"),
  "id": NumberInt(977),
  "region_id": NumberInt(7),
  "name": "Кольчино",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421e4"),
  "id": NumberInt(978),
  "region_id": NumberInt(1),
  "name": "Кольчугино",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421e5"),
  "id": NumberInt(979),
  "region_id": NumberInt(13),
  "name": "Комарно",
  "phone_code": "3231"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421e6"),
  "id": NumberInt(980),
  "region_id": NumberInt(25),
  "name": "Комаровцы",
  "phone_code": "3735"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421e7"),
  "id": NumberInt(981),
  "region_id": NumberInt(23),
  "name": "Коминтерн",
  "phone_code": "4739"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421e8"),
  "id": NumberInt(982),
  "region_id": NumberInt(15),
  "name": "Коминтерновское",
  "phone_code": "4855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421e9"),
  "id": NumberInt(983),
  "region_id": NumberInt(12),
  "name": "Комиссаровка",
  "phone_code": "6441"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421ea"),
  "id": NumberInt(984),
  "region_id": NumberInt(21),
  "name": "Коммуна",
  "phone_code": "5539"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421eb"),
  "id": NumberInt(985),
  "region_id": NumberInt(20),
  "name": "Коммунар",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421ec"),
  "id": NumberInt(986),
  "region_id": NumberInt(20),
  "name": "Коммунар",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421ed"),
  "id": NumberInt(987),
  "region_id": NumberInt(11),
  "name": "Компанеевка",
  "phone_code": "5240"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421ee"),
  "id": NumberInt(988),
  "region_id": NumberInt(16),
  "name": "Комсомольск",
  "phone_code": "5348"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421ef"),
  "id": NumberInt(989),
  "region_id": NumberInt(20),
  "name": "Комсомольский",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421f0"),
  "id": NumberInt(990),
  "region_id": NumberInt(20),
  "name": "Комсомольское",
  "phone_code": "5747"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421f1"),
  "id": NumberInt(991),
  "region_id": NumberInt(5),
  "name": "Комсомольское",
  "phone_code": "6253"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421f2"),
  "id": NumberInt(992),
  "region_id": NumberInt(1),
  "name": "Комсомольское",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421f3"),
  "id": NumberInt(993),
  "region_id": NumberInt(5),
  "name": "Кондратовка",
  "phone_code": "6272"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421f4"),
  "id": NumberInt(994),
  "region_id": NumberInt(23),
  "name": "Кононовка",
  "phone_code": "4738"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421f5"),
  "id": NumberInt(995),
  "region_id": NumberInt(13),
  "name": "Конопница",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421f6"),
  "id": NumberInt(996),
  "region_id": NumberInt(18),
  "name": "Конотоп",
  "phone_code": "5447"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421f7"),
  "id": NumberInt(997),
  "region_id": NumberInt(8),
  "name": "Константиновка",
  "phone_code": "6142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421f8"),
  "id": NumberInt(998),
  "region_id": NumberInt(14),
  "name": "Константиновка",
  "phone_code": "5132"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421f9"),
  "id": NumberInt(999),
  "region_id": NumberInt(17),
  "name": "Константиновка",
  "phone_code": "3655"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421fa"),
  "id": NumberInt(1000),
  "region_id": NumberInt(5),
  "name": "Константиновка",
  "phone_code": "6272"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421fb"),
  "id": NumberInt(1001),
  "region_id": NumberInt(11),
  "name": "Константиновка",
  "phone_code": "5256"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421fc"),
  "id": NumberInt(1002),
  "region_id": NumberInt(20),
  "name": "Константиновка",
  "phone_code": "5756"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421fd"),
  "id": NumberInt(1003),
  "region_id": NumberInt(2),
  "name": "Копайгород",
  "phone_code": "4341"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421fe"),
  "id": NumberInt(1004),
  "region_id": NumberInt(16),
  "name": "Копылы",
  "phone_code": "5322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc421ff"),
  "id": NumberInt(1005),
  "region_id": NumberInt(22),
  "name": "Копыстин",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42200"),
  "id": NumberInt(1006),
  "region_id": NumberInt(19),
  "name": "Копычинцы",
  "phone_code": "3557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42201"),
  "id": NumberInt(1007),
  "region_id": NumberInt(19),
  "name": "Копычинцы",
  "phone_code": "3557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42202"),
  "id": NumberInt(1008),
  "region_id": NumberInt(2),
  "name": "Корделевка",
  "phone_code": "4333"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42203"),
  "id": NumberInt(1009),
  "region_id": NumberInt(1),
  "name": "Кореиз",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42204"),
  "id": NumberInt(1010),
  "region_id": NumberInt(17),
  "name": "Корец",
  "phone_code": "3651"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42205"),
  "id": NumberInt(1011),
  "region_id": NumberInt(19),
  "name": "Коржова",
  "phone_code": "3555"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42206"),
  "id": NumberInt(1012),
  "region_id": NumberInt(6),
  "name": "Корнин",
  "phone_code": "4137"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42207"),
  "id": NumberInt(1013),
  "region_id": NumberInt(17),
  "name": "Корнин",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42208"),
  "id": NumberInt(1014),
  "region_id": NumberInt(9),
  "name": "Корнич",
  "phone_code": "3433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42209"),
  "id": NumberInt(1015),
  "region_id": NumberInt(13),
  "name": "Корничи",
  "phone_code": "3236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4220a"),
  "id": NumberInt(1016),
  "region_id": NumberInt(21),
  "name": "Коробки",
  "phone_code": "5536"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4220b"),
  "id": NumberInt(1017),
  "region_id": NumberInt(20),
  "name": "Коробочкино",
  "phone_code": "5746"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4220c"),
  "id": NumberInt(1018),
  "region_id": NumberInt(25),
  "name": "Коровия",
  "phone_code": "3734"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4220d"),
  "id": NumberInt(1019),
  "region_id": NumberInt(9),
  "name": "Королевка",
  "phone_code": "3433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4220e"),
  "id": NumberInt(1020),
  "region_id": NumberInt(10),
  "name": "Королевка",
  "phone_code": "4478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4220f"),
  "id": NumberInt(1021),
  "region_id": NumberInt(7),
  "name": "Королево",
  "phone_code": "3143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42210"),
  "id": NumberInt(1022),
  "region_id": NumberInt(24),
  "name": "Короп",
  "phone_code": "4656"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42211"),
  "id": NumberInt(1023),
  "region_id": NumberInt(19),
  "name": "Коропец",
  "phone_code": "3555"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42212"),
  "id": NumberInt(1024),
  "region_id": NumberInt(13),
  "name": "Коропуж",
  "phone_code": "3231"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42213"),
  "id": NumberInt(1025),
  "region_id": NumberInt(6),
  "name": "Коростень",
  "phone_code": "4142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42214"),
  "id": NumberInt(1026),
  "region_id": NumberInt(13),
  "name": "Коростов",
  "phone_code": "3251"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42215"),
  "id": NumberInt(1027),
  "region_id": NumberInt(6),
  "name": "Коростышев",
  "phone_code": "4130"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42216"),
  "id": NumberInt(1028),
  "region_id": NumberInt(20),
  "name": "Коротыч",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42217"),
  "id": NumberInt(1029),
  "region_id": NumberInt(21),
  "name": "Корсунка",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42218"),
  "id": NumberInt(1030),
  "region_id": NumberInt(23),
  "name": "Корсунь-Шевченковский",
  "phone_code": "4735"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42219"),
  "id": NumberInt(1031),
  "region_id": NumberInt(13),
  "name": "Корчев",
  "phone_code": "3257"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4221a"),
  "id": NumberInt(1032),
  "region_id": NumberInt(22),
  "name": "Корчевка",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4221b"),
  "id": NumberInt(1033),
  "region_id": NumberInt(17),
  "name": "Корысть",
  "phone_code": "3651"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4221c"),
  "id": NumberInt(1034),
  "region_id": NumberInt(25),
  "name": "Корытное",
  "phone_code": "3730"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4221d"),
  "id": NumberInt(1035),
  "region_id": NumberInt(24),
  "name": "Корюковка",
  "phone_code": "4657"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4221e"),
  "id": NumberInt(1036),
  "region_id": NumberInt(19),
  "name": "Косов",
  "phone_code": "3552"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4221f"),
  "id": NumberInt(1037),
  "region_id": NumberInt(9),
  "name": "Косов",
  "phone_code": "3478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42220"),
  "id": NumberInt(1038),
  "region_id": NumberInt(11),
  "name": "Косовка",
  "phone_code": "5235"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42221"),
  "id": NumberInt(1039),
  "region_id": NumberInt(7),
  "name": "Косовская поляна",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42222"),
  "id": NumberInt(1040),
  "region_id": NumberInt(7),
  "name": "Косонь",
  "phone_code": "03141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42223"),
  "id": NumberInt(1041),
  "region_id": NumberInt(25),
  "name": "Костинцы",
  "phone_code": "3735"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42224"),
  "id": NumberInt(1042),
  "region_id": NumberInt(17),
  "name": "Костополь",
  "phone_code": "3657"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42225"),
  "id": NumberInt(1043),
  "region_id": NumberInt(25),
  "name": "Кострижевка",
  "phone_code": "3737"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42226"),
  "id": NumberInt(1044),
  "region_id": NumberInt(16),
  "name": "Котельва",
  "phone_code": "5350"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42227"),
  "id": NumberInt(1045),
  "region_id": NumberInt(17),
  "name": "Котов",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42228"),
  "id": NumberInt(1046),
  "region_id": NumberInt(15),
  "name": "Котовка",
  "phone_code": "4852"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42229"),
  "id": NumberInt(1047),
  "region_id": NumberInt(6),
  "name": "Котовка",
  "phone_code": "4136"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4222a"),
  "id": NumberInt(1048),
  "region_id": NumberInt(15),
  "name": "Котовск",
  "phone_code": "4862"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4222b"),
  "id": NumberInt(1049),
  "region_id": NumberInt(10),
  "name": "Коцюбинское",
  "phone_code": "4497"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4222c"),
  "id": NumberInt(1050),
  "region_id": NumberInt(3),
  "name": "Коцюры",
  "phone_code": "3377"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4222d"),
  "id": NumberInt(1051),
  "region_id": NumberInt(6),
  "name": "Кочеров",
  "phone_code": "4232"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4222e"),
  "id": NumberInt(1052),
  "region_id": NumberInt(20),
  "name": "Кочеток",
  "phone_code": "5746"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4222f"),
  "id": NumberInt(1053),
  "region_id": NumberInt(6),
  "name": "Кошелевка",
  "phone_code": "4231"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42230"),
  "id": NumberInt(1054),
  "region_id": NumberInt(13),
  "name": "Краковец",
  "phone_code": "3259"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42231"),
  "id": NumberInt(1055),
  "region_id": NumberInt(5),
  "name": "Краматорск",
  "phone_code": "6264"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42232"),
  "id": NumberInt(1056),
  "region_id": NumberInt(24),
  "name": "Крапивное",
  "phone_code": "4631"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42233"),
  "id": NumberInt(1057),
  "region_id": NumberInt(6),
  "name": "Крапивня",
  "phone_code": "4145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42234"),
  "id": NumberInt(1058),
  "region_id": NumberInt(6),
  "name": "Крапивня",
  "phone_code": "4130"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42235"),
  "id": NumberInt(1059),
  "region_id": NumberInt(22),
  "name": "Красилов",
  "phone_code": "3855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42236"),
  "id": NumberInt(1060),
  "region_id": NumberInt(10),
  "name": "Красиловка",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42237"),
  "id": NumberInt(1061),
  "region_id": NumberInt(5),
  "name": "Красная поляна",
  "phone_code": "06243"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42238"),
  "id": NumberInt(1062),
  "region_id": NumberInt(5),
  "name": "Красноармейск",
  "phone_code": "6239"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42239"),
  "id": NumberInt(1063),
  "region_id": NumberInt(4),
  "name": "Красногвардейский",
  "phone_code": "0562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4223a"),
  "id": NumberInt(1064),
  "region_id": NumberInt(1),
  "name": "Красногвардейское",
  "phone_code": "6551"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4223b"),
  "id": NumberInt(1065),
  "region_id": NumberInt(1),
  "name": "Красногвардейское",
  "phone_code": "6556"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4223c"),
  "id": NumberInt(1066),
  "region_id": NumberInt(6),
  "name": "Красногорка",
  "phone_code": "4139"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4223d"),
  "id": NumberInt(1067),
  "region_id": NumberInt(5),
  "name": "Красногоровка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4223e"),
  "id": NumberInt(1068),
  "region_id": NumberInt(5),
  "name": "Красногоровка",
  "phone_code": "6278"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4223f"),
  "id": NumberInt(1069),
  "region_id": NumberInt(20),
  "name": "Красноград",
  "phone_code": "5744"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42240"),
  "id": NumberInt(1070),
  "region_id": NumberInt(12),
  "name": "Краснодон",
  "phone_code": "6435"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42241"),
  "id": NumberInt(1071),
  "region_id": NumberInt(24),
  "name": "Красное",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42242"),
  "id": NumberInt(1072),
  "region_id": NumberInt(14),
  "name": "Красное",
  "phone_code": "5153"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42243"),
  "id": NumberInt(1073),
  "region_id": NumberInt(10),
  "name": "Красное",
  "phone_code": "4463"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42244"),
  "id": NumberInt(1074),
  "region_id": NumberInt(13),
  "name": "Красное",
  "phone_code": "3264"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42245"),
  "id": NumberInt(1075),
  "region_id": NumberInt(5),
  "name": "Красное",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42246"),
  "id": NumberInt(1076),
  "region_id": NumberInt(2),
  "name": "Красное",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42247"),
  "id": NumberInt(1077),
  "region_id": NumberInt(25),
  "name": "Красноильск",
  "phone_code": "3735"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42248"),
  "id": NumberInt(1078),
  "region_id": NumberInt(1),
  "name": "Краснокаменка",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42249"),
  "id": NumberInt(1079),
  "region_id": NumberInt(20),
  "name": "Краснокутск",
  "phone_code": "5756"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4224a"),
  "id": NumberInt(1080),
  "region_id": NumberInt(12),
  "name": "Краснолучский",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4224b"),
  "id": NumberInt(1081),
  "region_id": NumberInt(20),
  "name": "Краснопавловка",
  "phone_code": "5745"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4224c"),
  "id": NumberInt(1082),
  "region_id": NumberInt(1),
  "name": "Красноперекопск",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4224d"),
  "id": NumberInt(1083),
  "region_id": NumberInt(6),
  "name": "Краснополь",
  "phone_code": "4139"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4224e"),
  "id": NumberInt(1084),
  "region_id": NumberInt(18),
  "name": "Краснополье",
  "phone_code": "5459"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4224f"),
  "id": NumberInt(1085),
  "region_id": NumberInt(12),
  "name": "Краснореченское",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42250"),
  "id": NumberInt(1086),
  "region_id": NumberInt(22),
  "name": "Красноселка",
  "phone_code": "3854"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42251"),
  "id": NumberInt(1087),
  "region_id": NumberInt(15),
  "name": "Красноселка",
  "phone_code": "4855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42252"),
  "id": NumberInt(1088),
  "region_id": NumberInt(2),
  "name": "Красноселка",
  "phone_code": "4352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42253"),
  "id": NumberInt(1089),
  "region_id": NumberInt(15),
  "name": "Красные Окны",
  "phone_code": "4861"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42254"),
  "id": NumberInt(1090),
  "region_id": NumberInt(23),
  "name": "Красный Кут",
  "phone_code": "4747"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42255"),
  "id": NumberInt(1091),
  "region_id": NumberInt(5),
  "name": "Красный Лиман",
  "phone_code": "6261"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42256"),
  "id": NumberInt(1092),
  "region_id": NumberInt(12),
  "name": "Красный Луч",
  "phone_code": "6432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42257"),
  "id": NumberInt(1093),
  "region_id": NumberInt(5),
  "name": "Красный партизан",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42258"),
  "id": NumberInt(1094),
  "region_id": NumberInt(19),
  "name": "Кременец",
  "phone_code": "3546"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42259"),
  "id": NumberInt(1095),
  "region_id": NumberInt(19),
  "name": "Кременец",
  "phone_code": "3546"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4225a"),
  "id": NumberInt(1096),
  "region_id": NumberInt(12),
  "name": "Кременная",
  "phone_code": "6454"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4225b"),
  "id": NumberInt(1097),
  "region_id": NumberInt(16),
  "name": "Кременчуг",
  "phone_code": "5366"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4225c"),
  "id": NumberInt(1098),
  "region_id": NumberInt(23),
  "name": "Кременчуки",
  "phone_code": "3855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4225d"),
  "id": NumberInt(1099),
  "region_id": NumberInt(15),
  "name": "Кремидовка",
  "phone_code": "4855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4225e"),
  "id": NumberInt(1100),
  "region_id": NumberInt(12),
  "name": "Крепенский",
  "phone_code": "6431"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4225f"),
  "id": NumberInt(1101),
  "region_id": NumberInt(5),
  "name": "Крестище",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42260"),
  "id": NumberInt(1102),
  "region_id": NumberInt(4),
  "name": "Кривбасс",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42261"),
  "id": NumberInt(1103),
  "region_id": NumberInt(14),
  "name": "Кривое Озеро",
  "phone_code": "5133"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42262"),
  "id": NumberInt(1104),
  "region_id": NumberInt(4),
  "name": "Кривой Рог",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42263"),
  "id": NumberInt(1105),
  "region_id": NumberInt(1),
  "name": "Кримское",
  "phone_code": "6563"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42264"),
  "id": NumberInt(1106),
  "region_id": NumberInt(4),
  "name": "Кринички",
  "phone_code": "5617"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42265"),
  "id": NumberInt(1107),
  "region_id": NumberInt(15),
  "name": "Криничное",
  "phone_code": "4846"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42266"),
  "id": NumberInt(1108),
  "region_id": NumberInt(9),
  "name": "Криховцы",
  "phone_code": "3422"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42267"),
  "id": NumberInt(1109),
  "region_id": NumberInt(18),
  "name": "Кролевец",
  "phone_code": "5453"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42268"),
  "id": NumberInt(1110),
  "region_id": NumberInt(16),
  "name": "Кротенки",
  "phone_code": "5322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42269"),
  "id": NumberInt(1111),
  "region_id": NumberInt(3),
  "name": "Крупа",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4226a"),
  "id": NumberInt(1112),
  "region_id": NumberInt(15),
  "name": "Крыжановка",
  "phone_code": "4855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4226b"),
  "id": NumberInt(1113),
  "region_id": NumberInt(2),
  "name": "Крыжополь",
  "phone_code": "4340"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4226c"),
  "id": NumberInt(1114),
  "region_id": NumberInt(6),
  "name": "Крымок",
  "phone_code": "4232"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4226d"),
  "id": NumberInt(1115),
  "region_id": NumberInt(10),
  "name": "Крюковщина",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4226e"),
  "id": NumberInt(1116),
  "region_id": NumberInt(6),
  "name": "Ксаверов",
  "phone_code": "4133"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4226f"),
  "id": NumberInt(1117),
  "region_id": NumberInt(10),
  "name": "Ксаверовка",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42270"),
  "id": NumberInt(1118),
  "region_id": NumberInt(17),
  "name": "Кузнецовск",
  "phone_code": "3636"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42271"),
  "id": NumberInt(1119),
  "region_id": NumberInt(1),
  "name": "Куйбышево",
  "phone_code": "6554"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42272"),
  "id": NumberInt(1120),
  "region_id": NumberInt(8),
  "name": "Куйбышево",
  "phone_code": "6147"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42273"),
  "id": NumberInt(1121),
  "region_id": NumberInt(13),
  "name": "Куликов",
  "phone_code": "3252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42274"),
  "id": NumberInt(1122),
  "region_id": NumberInt(24),
  "name": "Куликовка",
  "phone_code": "4643"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42275"),
  "id": NumberInt(1123),
  "region_id": NumberInt(20),
  "name": "Кулиничи",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42276"),
  "id": NumberInt(1124),
  "region_id": NumberInt(3),
  "name": "Кульчин",
  "phone_code": "3365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42277"),
  "id": NumberInt(1125),
  "region_id": NumberInt(14),
  "name": "Кумари",
  "phone_code": "5161"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42278"),
  "id": NumberInt(1126),
  "region_id": NumberInt(22),
  "name": "Купин",
  "phone_code": "4351"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42279"),
  "id": NumberInt(1127),
  "region_id": NumberInt(20),
  "name": "Купянск",
  "phone_code": "5742"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4227a"),
  "id": NumberInt(1128),
  "region_id": NumberInt(5),
  "name": "Кураховка",
  "phone_code": "6237"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4227b"),
  "id": NumberInt(1129),
  "region_id": NumberInt(5),
  "name": "Курахово",
  "phone_code": "06278"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4227c"),
  "id": NumberInt(1130),
  "region_id": NumberInt(5),
  "name": "Курдюмовка",
  "phone_code": "6247"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4227d"),
  "id": NumberInt(1131),
  "region_id": NumberInt(4),
  "name": "Куриловка",
  "phone_code": "5610"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4227e"),
  "id": NumberInt(1132),
  "region_id": NumberInt(20),
  "name": "Куриловка",
  "phone_code": "5742"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4227f"),
  "id": NumberInt(1133),
  "region_id": NumberInt(13),
  "name": "Куровичи",
  "phone_code": "3265"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42280"),
  "id": NumberInt(1134),
  "region_id": NumberInt(1),
  "name": "Курпаты",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42281"),
  "id": NumberInt(1135),
  "region_id": NumberInt(3),
  "name": "Куснища",
  "phone_code": "3377"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42282"),
  "id": NumberInt(1136),
  "region_id": NumberInt(17),
  "name": "Кустин",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42283"),
  "id": NumberInt(1137),
  "region_id": NumberInt(9),
  "name": "Куты",
  "phone_code": "3478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42284"),
  "id": NumberInt(1138),
  "region_id": NumberInt(24),
  "name": "Куты вторые",
  "phone_code": "4659"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42285"),
  "id": NumberInt(1139),
  "region_id": NumberInt(7),
  "name": "Куштановица",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42286"),
  "id": NumberInt(1140),
  "region_id": NumberInt(8),
  "name": "Кушугум",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42287"),
  "id": NumberInt(1141),
  "region_id": NumberInt(18),
  "name": "Куяновка",
  "phone_code": "5443"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42288"),
  "id": NumberInt(1142),
  "region_id": NumberInt(24),
  "name": "Ладан",
  "phone_code": "4637"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42289"),
  "id": NumberInt(1143),
  "region_id": NumberInt(24),
  "name": "Ладинка",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4228a"),
  "id": NumberInt(1144),
  "region_id": NumberInt(2),
  "name": "Ладыжин",
  "phone_code": "4343"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4228b"),
  "id": NumberInt(1145),
  "region_id": NumberInt(23),
  "name": "Ладыжинка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4228c"),
  "id": NumberInt(1146),
  "region_id": NumberInt(16),
  "name": "Лазорки",
  "phone_code": "5357"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4228d"),
  "id": NumberInt(1147),
  "region_id": NumberInt(21),
  "name": "Лазурное",
  "phone_code": "5537"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4228e"),
  "id": NumberInt(1148),
  "region_id": NumberInt(7),
  "name": "Лазы",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4228f"),
  "id": NumberInt(1149),
  "region_id": NumberInt(15),
  "name": "Ланна",
  "phone_code": "4864"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42290"),
  "id": NumberInt(1150),
  "region_id": NumberInt(16),
  "name": "Ланна.",
  "phone_code": "5346"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42291"),
  "id": NumberInt(1151),
  "region_id": NumberInt(19),
  "name": "Лановцы",
  "phone_code": "3549"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42292"),
  "id": NumberInt(1152),
  "region_id": NumberInt(9),
  "name": "Ланчин",
  "phone_code": "3475"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42293"),
  "id": NumberInt(1153),
  "region_id": NumberInt(13),
  "name": "Лапаевка",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42294"),
  "id": NumberInt(1154),
  "region_id": NumberInt(15),
  "name": "Ларжанка",
  "phone_code": "4841"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42295"),
  "id": NumberInt(1155),
  "region_id": NumberInt(23),
  "name": "Лебедевка",
  "phone_code": "4732"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42296"),
  "id": NumberInt(1156),
  "region_id": NumberInt(18),
  "name": "Лебедин",
  "phone_code": "5445"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42297"),
  "id": NumberInt(1157),
  "region_id": NumberInt(20),
  "name": "Лебяжье",
  "phone_code": "5761"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42298"),
  "id": NumberInt(1158),
  "region_id": NumberInt(25),
  "name": "Левинцы",
  "phone_code": "3732"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42299"),
  "id": NumberInt(1159),
  "region_id": NumberInt(11),
  "name": "Лекаревка",
  "phone_code": "5235"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4229a"),
  "id": NumberInt(1160),
  "region_id": NumberInt(16),
  "name": "Лелюховка",
  "phone_code": "5344"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4229b"),
  "id": NumberInt(1161),
  "region_id": NumberInt(1),
  "name": "Ленино",
  "phone_code": "6557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4229c"),
  "id": NumberInt(1162),
  "region_id": NumberInt(22),
  "name": "Ленковцы",
  "phone_code": "3840"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4229d"),
  "id": NumberInt(1163),
  "region_id": NumberInt(12),
  "name": "Лесная дача",
  "phone_code": "6452"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4229e"),
  "id": NumberInt(1164),
  "region_id": NumberInt(22),
  "name": "Лесовые гриневцы",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4229f"),
  "id": NumberInt(1165),
  "region_id": NumberInt(23),
  "name": "Леськи",
  "phone_code": "472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422a0"),
  "id": NumberInt(1166),
  "region_id": NumberInt(22),
  "name": "Летичев",
  "phone_code": "3857"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422a1"),
  "id": NumberInt(1167),
  "region_id": NumberInt(10),
  "name": "Летки",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422a2"),
  "id": NumberInt(1168),
  "region_id": NumberInt(13),
  "name": "Лешня",
  "phone_code": "3244"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422a3"),
  "id": NumberInt(1169),
  "region_id": NumberInt(1),
  "name": "Ливадия",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422a4"),
  "id": NumberInt(1170),
  "region_id": NumberInt(20),
  "name": "Лиман",
  "phone_code": "5747"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422a5"),
  "id": NumberInt(1171),
  "region_id": NumberInt(15),
  "name": "Лиманское",
  "phone_code": "4840"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422a6"),
  "id": NumberInt(1172),
  "region_id": NumberInt(14),
  "name": "Лиманы",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422a7"),
  "id": NumberInt(1173),
  "region_id": NumberInt(24),
  "name": "Линовица",
  "phone_code": "4637"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422a8"),
  "id": NumberInt(1174),
  "region_id": NumberInt(7),
  "name": "Линцы",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422a9"),
  "id": NumberInt(1175),
  "region_id": NumberInt(3),
  "name": "Липины",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422aa"),
  "id": NumberInt(1176),
  "region_id": NumberInt(6),
  "name": "Липники",
  "phone_code": "4161"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422ab"),
  "id": NumberInt(1177),
  "region_id": NumberInt(11),
  "name": "Липняжка",
  "phone_code": "5253"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422ac"),
  "id": NumberInt(1178),
  "region_id": NumberInt(18),
  "name": "Липовая Долина",
  "phone_code": "5452"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422ad"),
  "id": NumberInt(1179),
  "region_id": NumberInt(2),
  "name": "Липовец",
  "phone_code": "4358"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422ae"),
  "id": NumberInt(1180),
  "region_id": NumberInt(2),
  "name": "Липовец",
  "phone_code": "4358"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422af"),
  "id": NumberInt(1181),
  "region_id": NumberInt(10),
  "name": "Липовка",
  "phone_code": "4478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422b0"),
  "id": NumberInt(1182),
  "region_id": NumberInt(20),
  "name": "Липцы",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422b1"),
  "id": NumberInt(1183),
  "region_id": NumberInt(9),
  "name": "Лисец",
  "phone_code": "3436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422b2"),
  "id": NumberInt(1184),
  "region_id": NumberInt(13),
  "name": "Лисиничи",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422b3"),
  "id": NumberInt(1185),
  "region_id": NumberInt(12),
  "name": "Лисичанск",
  "phone_code": "6451"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422b4"),
  "id": NumberInt(1186),
  "region_id": NumberInt(7),
  "name": "Лисичево",
  "phone_code": "3144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422b5"),
  "id": NumberInt(1187),
  "region_id": NumberInt(2),
  "name": "Литин",
  "phone_code": "4347"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422b6"),
  "id": NumberInt(1188),
  "region_id": NumberInt(7),
  "name": "Лоза",
  "phone_code": "3144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422b7"),
  "id": NumberInt(1189),
  "region_id": NumberInt(4),
  "name": "Лозоватка",
  "phone_code": "56"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422b8"),
  "id": NumberInt(1190),
  "region_id": NumberInt(20),
  "name": "Лозовая",
  "phone_code": "5745"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422b9"),
  "id": NumberInt(1191),
  "region_id": NumberInt(22),
  "name": "Лозовое",
  "phone_code": "3856"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422ba"),
  "id": NumberInt(1192),
  "region_id": NumberInt(12),
  "name": "Лозовский",
  "phone_code": "6473"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422bb"),
  "id": NumberInt(1193),
  "region_id": NumberInt(3),
  "name": "Локачи",
  "phone_code": "3374"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422bc"),
  "id": NumberInt(1194),
  "region_id": NumberInt(9),
  "name": "Лолин",
  "phone_code": "3477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422bd"),
  "id": NumberInt(1195),
  "region_id": NumberInt(13),
  "name": "Лопатин",
  "phone_code": "03255"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422be"),
  "id": NumberInt(1196),
  "region_id": NumberInt(9),
  "name": "Лопушня",
  "phone_code": "3435"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422bf"),
  "id": NumberInt(1197),
  "region_id": NumberInt(24),
  "name": "Лосиновка",
  "phone_code": "4631"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422c0"),
  "id": NumberInt(1198),
  "region_id": NumberInt(16),
  "name": "Лохвица",
  "phone_code": "5356"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422c1"),
  "id": NumberInt(1199),
  "region_id": NumberInt(16),
  "name": "Лубны",
  "phone_code": "5361"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422c2"),
  "id": NumberInt(1200),
  "region_id": NumberInt(12),
  "name": "Луганск",
  "phone_code": "642"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422c3"),
  "id": NumberInt(1201),
  "region_id": NumberInt(6),
  "name": "Лугины",
  "phone_code": "4161"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422c4"),
  "id": NumberInt(1202),
  "region_id": NumberInt(25),
  "name": "Лужаны",
  "phone_code": "3736"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422c5"),
  "id": NumberInt(1203),
  "region_id": NumberInt(6),
  "name": "Лужин",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422c6"),
  "id": NumberInt(1204),
  "region_id": NumberInt(10),
  "name": "Лука",
  "phone_code": "4466"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422c7"),
  "id": NumberInt(1205),
  "region_id": NumberInt(2),
  "name": "Лука- мелешковская",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422c8"),
  "id": NumberInt(1206),
  "region_id": NumberInt(8),
  "name": "Лукашево",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422c9"),
  "id": NumberInt(1207),
  "region_id": NumberInt(13),
  "name": "Луки",
  "phone_code": "3236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422ca"),
  "id": NumberInt(1208),
  "region_id": NumberInt(3),
  "name": "Луков",
  "phone_code": "3263"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422cb"),
  "id": NumberInt(1209),
  "region_id": NumberInt(10),
  "name": "Лукьяновка",
  "phone_code": "04476"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422cc"),
  "id": NumberInt(1210),
  "region_id": NumberInt(8),
  "name": "Луначарское",
  "phone_code": "6153"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422cd"),
  "id": NumberInt(1211),
  "region_id": NumberInt(16),
  "name": "Лутовиновка",
  "phone_code": "5342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422ce"),
  "id": NumberInt(1212),
  "region_id": NumberInt(12),
  "name": "Лутугино",
  "phone_code": "6436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422cf"),
  "id": NumberInt(1213),
  "region_id": NumberInt(3),
  "name": "Луцк",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422d0"),
  "id": NumberInt(1214),
  "region_id": NumberInt(14),
  "name": "Луч",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422d1"),
  "id": NumberInt(1215),
  "region_id": NumberInt(23),
  "name": "Лысянка",
  "phone_code": "4749"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422d2"),
  "id": NumberInt(1216),
  "region_id": NumberInt(3),
  "name": "Лыще",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422d3"),
  "id": NumberInt(1217),
  "region_id": NumberInt(13),
  "name": "Львов",
  "phone_code": "32"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422d4"),
  "id": NumberInt(1218),
  "region_id": NumberInt(6),
  "name": "Любар",
  "phone_code": "4147"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422d5"),
  "id": NumberInt(1219),
  "region_id": NumberInt(15),
  "name": "Любашевка",
  "phone_code": "4864"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422d6"),
  "id": NumberInt(1220),
  "region_id": NumberInt(24),
  "name": "Любеч",
  "phone_code": "4641"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422d7"),
  "id": NumberInt(1221),
  "region_id": NumberInt(3),
  "name": "Любешов",
  "phone_code": "3362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422d8"),
  "id": NumberInt(1222),
  "region_id": NumberInt(21),
  "name": "Любимовка",
  "phone_code": "5536"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422d9"),
  "id": NumberInt(1223),
  "region_id": NumberInt(13),
  "name": "Любинцы",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422da"),
  "id": NumberInt(1224),
  "region_id": NumberInt(3),
  "name": "Любитов",
  "phone_code": "3352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422db"),
  "id": NumberInt(1225),
  "region_id": NumberInt(3),
  "name": "Люблинец",
  "phone_code": "3352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422dc"),
  "id": NumberInt(1226),
  "region_id": NumberInt(3),
  "name": "Любомль",
  "phone_code": "3377"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422dd"),
  "id": NumberInt(1227),
  "region_id": NumberInt(20),
  "name": "Люботин",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422de"),
  "id": NumberInt(1228),
  "region_id": NumberInt(13),
  "name": "Любша",
  "phone_code": "3239"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422df"),
  "id": NumberInt(1229),
  "region_id": NumberInt(8),
  "name": "Люцерна",
  "phone_code": "6143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422e0"),
  "id": NumberInt(1230),
  "region_id": NumberInt(13),
  "name": "Мавковичи",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422e1"),
  "id": NumberInt(1231),
  "region_id": NumberInt(4),
  "name": "Магдалиновка",
  "phone_code": "5611"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422e2"),
  "id": NumberInt(1232),
  "region_id": NumberInt(1),
  "name": "Мазанка",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422e3"),
  "id": NumberInt(1233),
  "region_id": NumberInt(9),
  "name": "Майдан",
  "phone_code": "3436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422e4"),
  "id": NumberInt(1234),
  "region_id": NumberInt(7),
  "name": "Майдан",
  "phone_code": "3146"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422e5"),
  "id": NumberInt(1235),
  "region_id": NumberInt(23),
  "name": "Майданец",
  "phone_code": "4731"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422e6"),
  "id": NumberInt(1236),
  "region_id": NumberInt(4),
  "name": "Майское",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422e7"),
  "id": NumberInt(1237),
  "region_id": NumberInt(10),
  "name": "Макаров",
  "phone_code": "4478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422e8"),
  "id": NumberInt(1238),
  "region_id": NumberInt(5),
  "name": "Макеевка",
  "phone_code": "6232"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422e9"),
  "id": NumberInt(1239),
  "region_id": NumberInt(22),
  "name": "Маков",
  "phone_code": "4336"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422ea"),
  "id": NumberInt(1240),
  "region_id": NumberInt(24),
  "name": "Макошино",
  "phone_code": "4644"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422eb"),
  "id": NumberInt(1241),
  "region_id": NumberInt(11),
  "name": "Малая Виска",
  "phone_code": "5258"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422ec"),
  "id": NumberInt(1242),
  "region_id": NumberInt(20),
  "name": "Малая Даниловка",
  "phone_code": "5763"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422ed"),
  "id": NumberInt(1243),
  "region_id": NumberInt(7),
  "name": "Малая копаня",
  "phone_code": "3143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422ee"),
  "id": NumberInt(1244),
  "region_id": NumberInt(18),
  "name": "Малая павловка",
  "phone_code": "5446"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422ef"),
  "id": NumberInt(1245),
  "region_id": NumberInt(20),
  "name": "Малая рогозянка",
  "phone_code": "5764"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422f0"),
  "id": NumberInt(1246),
  "region_id": NumberInt(10),
  "name": "Малая Снитынка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422f1"),
  "id": NumberInt(1247),
  "region_id": NumberInt(10),
  "name": "Малая Супоевка",
  "phone_code": "04470"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422f2"),
  "id": NumberInt(1248),
  "region_id": NumberInt(6),
  "name": "Малая Токаровка",
  "phone_code": "04144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422f3"),
  "id": NumberInt(1249),
  "region_id": NumberInt(8),
  "name": "Малая токмачка",
  "phone_code": "6141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422f4"),
  "id": NumberInt(1250),
  "region_id": NumberInt(9),
  "name": "Малая турья",
  "phone_code": "3477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422f5"),
  "id": NumberInt(1251),
  "region_id": NumberInt(13),
  "name": "Малехов",
  "phone_code": "3252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422f6"),
  "id": NumberInt(1252),
  "region_id": NumberInt(6),
  "name": "Малин",
  "phone_code": "4133"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422f7"),
  "id": NumberInt(1253),
  "region_id": NumberInt(22),
  "name": "Малиничи",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422f8"),
  "id": NumberInt(1254),
  "region_id": NumberInt(5),
  "name": "Малиновка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422f9"),
  "id": NumberInt(1255),
  "region_id": NumberInt(20),
  "name": "Малиновка",
  "phone_code": "5746"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422fa"),
  "id": NumberInt(1256),
  "region_id": NumberInt(15),
  "name": "Малодолинское",
  "phone_code": "4868"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422fb"),
  "id": NumberInt(1257),
  "region_id": NumberInt(8),
  "name": "Малокатериновка",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422fc"),
  "id": NumberInt(1258),
  "region_id": NumberInt(21),
  "name": "Малокаховка",
  "phone_code": "5536"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422fd"),
  "id": NumberInt(1259),
  "region_id": NumberInt(1),
  "name": "Малореченское",
  "phone_code": "06560"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422fe"),
  "id": NumberInt(1260),
  "region_id": NumberInt(19),
  "name": "Малые Бережцы",
  "phone_code": "3546"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc422ff"),
  "id": NumberInt(1261),
  "region_id": NumberInt(13),
  "name": "Малые Подлески",
  "phone_code": "03252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42300"),
  "id": NumberInt(1262),
  "region_id": NumberInt(7),
  "name": "Малый березный",
  "phone_code": "3135"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42301"),
  "id": NumberInt(1263),
  "region_id": NumberInt(23),
  "name": "Малый бузуков",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42302"),
  "id": NumberInt(1264),
  "region_id": NumberInt(1),
  "name": "Малый маяк",
  "phone_code": "6560"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42303"),
  "id": NumberInt(1265),
  "region_id": NumberInt(2),
  "name": "Малый мытник",
  "phone_code": "43388"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42304"),
  "id": NumberInt(1266),
  "region_id": NumberInt(17),
  "name": "Малый шпаков",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42305"),
  "id": NumberInt(1267),
  "region_id": NumberInt(13),
  "name": "Мальчицы",
  "phone_code": "3259"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42306"),
  "id": NumberInt(1268),
  "region_id": NumberInt(25),
  "name": "Мамаевцы",
  "phone_code": "3736"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42307"),
  "id": NumberInt(1269),
  "region_id": NumberInt(25),
  "name": "Мамалыга",
  "phone_code": "3733"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42308"),
  "id": NumberInt(1270),
  "region_id": NumberInt(6),
  "name": "Мамрин",
  "phone_code": "4130"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42309"),
  "id": NumberInt(1271),
  "region_id": NumberInt(5),
  "name": "Мангуш",
  "phone_code": "6297"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4230a"),
  "id": NumberInt(1272),
  "region_id": NumberInt(3),
  "name": "Маневичи",
  "phone_code": "3376"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4230b"),
  "id": NumberInt(1273),
  "region_id": NumberInt(20),
  "name": "Манченки",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4230c"),
  "id": NumberInt(1274),
  "region_id": NumberInt(23),
  "name": "Маньковка",
  "phone_code": "4748"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4230d"),
  "id": NumberInt(1275),
  "region_id": NumberInt(4),
  "name": "Марганец",
  "phone_code": "5665"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4230e"),
  "id": NumberInt(1276),
  "region_id": NumberInt(25),
  "name": "Мариничи",
  "phone_code": "3738"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4230f"),
  "id": NumberInt(1277),
  "region_id": NumberInt(5),
  "name": "Мариуполь",
  "phone_code": "629"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42310"),
  "id": NumberInt(1278),
  "region_id": NumberInt(12),
  "name": "Марковка",
  "phone_code": "6464"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42311"),
  "id": NumberInt(1279),
  "region_id": NumberInt(5),
  "name": "Марково",
  "phone_code": "6272"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42312"),
  "id": NumberInt(1280),
  "region_id": NumberInt(20),
  "name": "Мартово",
  "phone_code": "5746"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42313"),
  "id": NumberInt(1281),
  "region_id": NumberInt(23),
  "name": "Мартыновка",
  "phone_code": "4736"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42314"),
  "id": NumberInt(1282),
  "region_id": NumberInt(1),
  "name": "Марфовка",
  "phone_code": "6557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42315"),
  "id": NumberInt(1283),
  "region_id": NumberInt(10),
  "name": "Мархаловка",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42316"),
  "id": NumberInt(1284),
  "region_id": NumberInt(8),
  "name": "Марьевка",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42317"),
  "id": NumberInt(1285),
  "region_id": NumberInt(5),
  "name": "Марьинка",
  "phone_code": "6278"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42318"),
  "id": NumberInt(1286),
  "region_id": NumberInt(4),
  "name": "Марьяновка",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42319"),
  "id": NumberInt(1287),
  "region_id": NumberInt(16),
  "name": "Марьяновка",
  "phone_code": "5359"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4231a"),
  "id": NumberInt(1288),
  "region_id": NumberInt(6),
  "name": "Марьяновка",
  "phone_code": "4144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4231b"),
  "id": NumberInt(1289),
  "region_id": NumberInt(3),
  "name": "Марьяновка",
  "phone_code": "3379"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4231c"),
  "id": NumberInt(1290),
  "region_id": NumberInt(22),
  "name": "Масевцы",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4231d"),
  "id": NumberInt(1291),
  "region_id": NumberInt(1),
  "name": "Массандра",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4231e"),
  "id": NumberInt(1292),
  "region_id": NumberInt(14),
  "name": "Матиясово",
  "phone_code": "5153"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4231f"),
  "id": NumberInt(1293),
  "region_id": NumberInt(23),
  "name": "Матусив",
  "phone_code": "4741"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42320"),
  "id": NumberInt(1294),
  "region_id": NumberInt(2),
  "name": "Махаринцы",
  "phone_code": "4342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42321"),
  "id": NumberInt(1295),
  "region_id": NumberInt(22),
  "name": "Мацьковцы",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42322"),
  "id": NumberInt(1296),
  "region_id": NumberInt(16),
  "name": "Машевка",
  "phone_code": "5364"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42323"),
  "id": NumberInt(1297),
  "region_id": NumberInt(3),
  "name": "Маяки",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42324"),
  "id": NumberInt(1298),
  "region_id": NumberInt(15),
  "name": "Маяки",
  "phone_code": "4852"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42325"),
  "id": NumberInt(1299),
  "region_id": NumberInt(1),
  "name": "Межводное",
  "phone_code": "6558"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42326"),
  "id": NumberInt(1300),
  "region_id": NumberInt(7),
  "name": "Межгорье",
  "phone_code": "3146"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42327"),
  "id": NumberInt(1301),
  "region_id": NumberInt(4),
  "name": "Межевая",
  "phone_code": "5630"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42328"),
  "id": NumberInt(1302),
  "region_id": NumberInt(4),
  "name": "Межирич",
  "phone_code": "5672"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42329"),
  "id": NumberInt(1303),
  "region_id": NumberInt(18),
  "name": "Межирич",
  "phone_code": "5445"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4232a"),
  "id": NumberInt(1304),
  "region_id": NumberInt(23),
  "name": "Межирич",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4232b"),
  "id": NumberInt(1305),
  "region_id": NumberInt(11),
  "name": "Межиричка",
  "phone_code": "05252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4232c"),
  "id": NumberInt(1306),
  "region_id": NumberInt(18),
  "name": "Мезеновка",
  "phone_code": "5459"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4232d"),
  "id": NumberInt(1307),
  "region_id": NumberInt(4),
  "name": "Мелиоративное",
  "phone_code": "5612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4232e"),
  "id": NumberInt(1308),
  "region_id": NumberInt(8),
  "name": "Мелитополь",
  "phone_code": "619"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4232f"),
  "id": NumberInt(1309),
  "region_id": NumberInt(12),
  "name": "Меловое",
  "phone_code": "6465"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42330"),
  "id": NumberInt(1310),
  "region_id": NumberInt(19),
  "name": "Мельница-Подольская",
  "phone_code": "3541"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42331"),
  "id": NumberInt(1311),
  "region_id": NumberInt(24),
  "name": "Мена",
  "phone_code": "4644"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42332"),
  "id": NumberInt(1312),
  "region_id": NumberInt(4),
  "name": "Менжинское",
  "phone_code": "5662"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42333"),
  "id": NumberInt(1313),
  "region_id": NumberInt(13),
  "name": "Мервичи",
  "phone_code": "3252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42334"),
  "id": NumberInt(1314),
  "region_id": NumberInt(20),
  "name": "Мерефа",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42335"),
  "id": NumberInt(1315),
  "region_id": NumberInt(14),
  "name": "Мешково-погорелово",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42336"),
  "id": NumberInt(1316),
  "region_id": NumberInt(15),
  "name": "Мизикевича",
  "phone_code": "4851"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42337"),
  "id": NumberInt(1317),
  "region_id": NumberInt(17),
  "name": "Мизоч",
  "phone_code": "3652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42338"),
  "id": NumberInt(1318),
  "region_id": NumberInt(13),
  "name": "Миклашев",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42339"),
  "id": NumberInt(1319),
  "region_id": NumberInt(19),
  "name": "Микулинцы",
  "phone_code": "3551"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4233a"),
  "id": NumberInt(1320),
  "region_id": NumberInt(9),
  "name": "Микуличин",
  "phone_code": "3434"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4233b"),
  "id": NumberInt(1321),
  "region_id": NumberInt(7),
  "name": "Минай",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4233c"),
  "id": NumberInt(1322),
  "region_id": NumberInt(16),
  "name": "Миргород",
  "phone_code": "5355"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4233d"),
  "id": NumberInt(1323),
  "region_id": NumberInt(6),
  "name": "Мирное",
  "phone_code": "4143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4233e"),
  "id": NumberInt(1324),
  "region_id": NumberInt(5),
  "name": "Мирное",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4233f"),
  "id": NumberInt(1325),
  "region_id": NumberInt(1),
  "name": "Мирное",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42340"),
  "id": NumberInt(1326),
  "region_id": NumberInt(5),
  "name": "Мирное",
  "phone_code": "6279"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42341"),
  "id": NumberInt(1327),
  "region_id": NumberInt(8),
  "name": "Мирное",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42342"),
  "id": NumberInt(1328),
  "region_id": NumberInt(6),
  "name": "Мирный",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42343"),
  "id": NumberInt(1329),
  "region_id": NumberInt(4),
  "name": "Мировое",
  "phone_code": "5668"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42344"),
  "id": NumberInt(1330),
  "region_id": NumberInt(6),
  "name": "Миролюбовка",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42345"),
  "id": NumberInt(1331),
  "region_id": NumberInt(5),
  "name": "Мироновка",
  "phone_code": "6249"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42346"),
  "id": NumberInt(1332),
  "region_id": NumberInt(10),
  "name": "Мироновка",
  "phone_code": "4474"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42347"),
  "id": NumberInt(1333),
  "region_id": NumberInt(6),
  "name": "Мирополь",
  "phone_code": "4146"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42348"),
  "id": NumberInt(1334),
  "region_id": NumberInt(12),
  "name": "Миусинск",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42349"),
  "id": NumberInt(1335),
  "region_id": NumberInt(14),
  "name": "Михайловка",
  "phone_code": "5167"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4234a"),
  "id": NumberInt(1336),
  "region_id": NumberInt(11),
  "name": "Михайловка",
  "phone_code": "5242"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4234b"),
  "id": NumberInt(1337),
  "region_id": NumberInt(8),
  "name": "Михайловка",
  "phone_code": "6132"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4234c"),
  "id": NumberInt(1338),
  "region_id": NumberInt(20),
  "name": "Михайловка",
  "phone_code": "5745"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4234d"),
  "id": NumberInt(1339),
  "region_id": NumberInt(2),
  "name": "Михайловка",
  "phone_code": "4344"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4234e"),
  "id": NumberInt(1340),
  "region_id": NumberInt(5),
  "name": "Михайловка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4234f"),
  "id": NumberInt(1341),
  "region_id": NumberInt(23),
  "name": "Михайловка",
  "phone_code": "04736"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42350"),
  "id": NumberInt(1342),
  "region_id": NumberInt(18),
  "name": "Михайловское",
  "phone_code": "5459"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42351"),
  "id": NumberInt(1343),
  "region_id": NumberInt(22),
  "name": "Михайлючка",
  "phone_code": "3842"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42352"),
  "id": NumberInt(1344),
  "region_id": NumberInt(25),
  "name": "Михальча",
  "phone_code": "3735"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42353"),
  "id": NumberInt(1345),
  "region_id": NumberInt(23),
  "name": "Млиев",
  "phone_code": "4734"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42354"),
  "id": NumberInt(1346),
  "region_id": NumberInt(17),
  "name": "Млинов",
  "phone_code": "3659"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42355"),
  "id": NumberInt(1347),
  "region_id": NumberInt(19),
  "name": "Млиновцы",
  "phone_code": "3540"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42356"),
  "id": NumberInt(1348),
  "region_id": NumberInt(16),
  "name": "Млыны",
  "phone_code": "5356"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42357"),
  "id": NumberInt(1349),
  "region_id": NumberInt(2),
  "name": "Могилев-Подольский",
  "phone_code": "4337"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42358"),
  "id": NumberInt(1350),
  "region_id": NumberInt(2),
  "name": "Могилевка",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42359"),
  "id": NumberInt(1351),
  "region_id": NumberInt(17),
  "name": "Могиляны",
  "phone_code": "3654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4235a"),
  "id": NumberInt(1352),
  "region_id": NumberInt(2),
  "name": "Моевка",
  "phone_code": "4357"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4235b"),
  "id": NumberInt(1353),
  "region_id": NumberInt(17),
  "name": "Моквин",
  "phone_code": "3653"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4235c"),
  "id": NumberInt(1354),
  "region_id": NumberInt(25),
  "name": "Молница",
  "phone_code": "3740"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4235d"),
  "id": NumberInt(1355),
  "region_id": NumberInt(15),
  "name": "Молодежное",
  "phone_code": "4851"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4235e"),
  "id": NumberInt(1356),
  "region_id": NumberInt(1),
  "name": "Молодежное",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4235f"),
  "id": NumberInt(1357),
  "region_id": NumberInt(11),
  "name": "Молодежное",
  "phone_code": "5234"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42360"),
  "id": NumberInt(1358),
  "region_id": NumberInt(5),
  "name": "Молодежное",
  "phone_code": "062"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42361"),
  "id": NumberInt(1359),
  "region_id": NumberInt(5),
  "name": "Молодецкое",
  "phone_code": "6255"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42362"),
  "id": NumberInt(1360),
  "region_id": NumberInt(12),
  "name": "Молодогвардейск",
  "phone_code": "6435"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42363"),
  "id": NumberInt(1361),
  "region_id": NumberInt(8),
  "name": "Молочанск",
  "phone_code": "6178"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42364"),
  "id": NumberInt(1362),
  "region_id": NumberInt(19),
  "name": "Монастыриска",
  "phone_code": "3555"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42365"),
  "id": NumberInt(1363),
  "region_id": NumberInt(23),
  "name": "Монастырище",
  "phone_code": "4746"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42366"),
  "id": NumberInt(1364),
  "region_id": NumberInt(13),
  "name": "Моршин",
  "phone_code": "32606"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42367"),
  "id": NumberInt(1365),
  "region_id": NumberInt(5),
  "name": "Моспино",
  "phone_code": "622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42368"),
  "id": NumberInt(1366),
  "region_id": NumberInt(13),
  "name": "Мостиска",
  "phone_code": "3234"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42369"),
  "id": NumberInt(1367),
  "region_id": NumberInt(14),
  "name": "Мостовое",
  "phone_code": "5152"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4236a"),
  "id": NumberInt(1368),
  "region_id": NumberInt(10),
  "name": "Мотыжин",
  "phone_code": "4478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4236b"),
  "id": NumberInt(1369),
  "region_id": NumberInt(1),
  "name": "Мраморное",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4236c"),
  "id": NumberInt(1370),
  "region_id": NumberInt(7),
  "name": "Мужиево",
  "phone_code": "3141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4236d"),
  "id": NumberInt(1371),
  "region_id": NumberInt(10),
  "name": "Музычи",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4236e"),
  "id": NumberInt(1372),
  "region_id": NumberInt(7),
  "name": "Мукачево",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4236f"),
  "id": NumberInt(1373),
  "region_id": NumberInt(12),
  "name": "Муратово",
  "phone_code": "6445"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42370"),
  "id": NumberInt(1374),
  "region_id": NumberInt(20),
  "name": "Мурафа",
  "phone_code": "5756"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42371"),
  "id": NumberInt(1375),
  "region_id": NumberInt(13),
  "name": "Мурованое",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42372"),
  "id": NumberInt(1376),
  "region_id": NumberInt(2),
  "name": "Мурованые Куриловцы",
  "phone_code": "4356"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42373"),
  "id": NumberInt(1377),
  "region_id": NumberInt(4),
  "name": "Мусиевка",
  "phone_code": "5662"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42374"),
  "id": NumberInt(1378),
  "region_id": NumberInt(17),
  "name": "Мутвица",
  "phone_code": "3632"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42375"),
  "id": NumberInt(1379),
  "region_id": NumberInt(10),
  "name": "Мыла",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42376"),
  "id": NumberInt(1380),
  "region_id": NumberInt(23),
  "name": "Набутов",
  "phone_code": "4735"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42377"),
  "id": NumberInt(1381),
  "region_id": NumberInt(13),
  "name": "Навария",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42378"),
  "id": NumberInt(1382),
  "region_id": NumberInt(13),
  "name": "Нагорное",
  "phone_code": "3236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42379"),
  "id": NumberInt(1383),
  "region_id": NumberInt(19),
  "name": "Нагорянка",
  "phone_code": "3552"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4237a"),
  "id": NumberInt(1384),
  "region_id": NumberInt(9),
  "name": "Надвирна",
  "phone_code": "3475"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4237b"),
  "id": NumberInt(1385),
  "region_id": NumberInt(9),
  "name": "Надворная",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4237c"),
  "id": NumberInt(1386),
  "region_id": NumberInt(4),
  "name": "Надеждовка",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4237d"),
  "id": NumberInt(1387),
  "region_id": NumberInt(9),
  "name": "Надиев",
  "phone_code": "3477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4237e"),
  "id": NumberInt(1388),
  "region_id": NumberInt(19),
  "name": "Надречное",
  "phone_code": "3551"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4237f"),
  "id": NumberInt(1389),
  "region_id": NumberInt(13),
  "name": "Надыбы",
  "phone_code": "3238"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42380"),
  "id": NumberInt(1390),
  "region_id": NumberInt(13),
  "name": "Надычи",
  "phone_code": "3252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42381"),
  "id": NumberInt(1391),
  "region_id": NumberInt(22),
  "name": "Наркевичи",
  "phone_code": "3845"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42382"),
  "id": NumberInt(1392),
  "region_id": NumberInt(6),
  "name": "Народичи",
  "phone_code": "4140"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42383"),
  "id": NumberInt(1393),
  "region_id": NumberInt(20),
  "name": "Наталино",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42384"),
  "id": NumberInt(1394),
  "region_id": NumberInt(10),
  "name": "Небелица",
  "phone_code": "4478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42385"),
  "id": NumberInt(1395),
  "region_id": NumberInt(7),
  "name": "Невицкое",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42386"),
  "id": NumberInt(1396),
  "region_id": NumberInt(4),
  "name": "Недайвода",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42387"),
  "id": NumberInt(1397),
  "region_id": NumberInt(18),
  "name": "Недригайлов",
  "phone_code": "5455"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42388"),
  "id": NumberInt(1398),
  "region_id": NumberInt(24),
  "name": "Нежин",
  "phone_code": "4631"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42389"),
  "id": NumberInt(1399),
  "region_id": NumberInt(2),
  "name": "Некрасово",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4238a"),
  "id": NumberInt(1400),
  "region_id": NumberInt(25),
  "name": "Нелиповцы",
  "phone_code": "3732"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4238b"),
  "id": NumberInt(1401),
  "region_id": NumberInt(10),
  "name": "Немешаево",
  "phone_code": "4477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4238c"),
  "id": NumberInt(1402),
  "region_id": NumberInt(13),
  "name": "Немиров",
  "phone_code": "3259"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4238d"),
  "id": NumberInt(1403),
  "region_id": NumberInt(2),
  "name": "Немиров",
  "phone_code": "4331"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4238e"),
  "id": NumberInt(1404),
  "region_id": NumberInt(11),
  "name": "Неопалимовка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4238f"),
  "id": NumberInt(1405),
  "region_id": NumberInt(25),
  "name": "Неполоковцы",
  "phone_code": "3736"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42390"),
  "id": NumberInt(1406),
  "region_id": NumberInt(7),
  "name": "Нересница",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42391"),
  "id": NumberInt(1407),
  "region_id": NumberInt(15),
  "name": "Нерубайское",
  "phone_code": "4852"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42392"),
  "id": NumberInt(1408),
  "region_id": NumberInt(3),
  "name": "Несвич",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42393"),
  "id": NumberInt(1409),
  "region_id": NumberInt(2),
  "name": "Нестерварка",
  "phone_code": "4335"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42394"),
  "id": NumberInt(1410),
  "region_id": NumberInt(22),
  "name": "Нестеривци",
  "phone_code": "4336"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42395"),
  "id": NumberInt(1411),
  "region_id": NumberInt(22),
  "name": "Нетишин",
  "phone_code": "3848"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42396"),
  "id": NumberInt(1412),
  "region_id": NumberInt(16),
  "name": "Нехвороща",
  "phone_code": "5344"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42397"),
  "id": NumberInt(1413),
  "region_id": NumberInt(12),
  "name": "Нещеретово",
  "phone_code": "6462"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42398"),
  "id": NumberInt(1414),
  "region_id": NumberInt(4),
  "name": "Нива трудовая",
  "phone_code": "5656"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42399"),
  "id": NumberInt(1415),
  "region_id": NumberInt(1),
  "name": "Нижнегорский",
  "phone_code": "6550"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4239a"),
  "id": NumberInt(1416),
  "region_id": NumberInt(7),
  "name": "Нижнее селище",
  "phone_code": "3142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4239b"),
  "id": NumberInt(1417),
  "region_id": NumberInt(7),
  "name": "Нижние ворота",
  "phone_code": "3136"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4239c"),
  "id": NumberInt(1418),
  "region_id": NumberInt(21),
  "name": "Нижние Серогозы",
  "phone_code": "5540"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4239d"),
  "id": NumberInt(1419),
  "region_id": NumberInt(9),
  "name": "Нижний вербиж",
  "phone_code": "3433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4239e"),
  "id": NumberInt(1420),
  "region_id": NumberInt(12),
  "name": "Нижний нагольчик",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4239f"),
  "id": NumberInt(1421),
  "region_id": NumberInt(13),
  "name": "Нижняя яблонька",
  "phone_code": "3269"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423a0"),
  "id": NumberInt(1422),
  "region_id": NumberInt(10),
  "name": "Низшая дубечня",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423a1"),
  "id": NumberInt(1423),
  "region_id": NumberInt(18),
  "name": "Низы",
  "phone_code": "542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423a2"),
  "id": NumberInt(1424),
  "region_id": NumberInt(1),
  "name": "Никита",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423a3"),
  "id": NumberInt(1425),
  "region_id": NumberInt(9),
  "name": "Никитинцы",
  "phone_code": "3422"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423a4"),
  "id": NumberInt(1426),
  "region_id": NumberInt(13),
  "name": "Николаев",
  "phone_code": "3241"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423a5"),
  "id": NumberInt(1427),
  "region_id": NumberInt(14),
  "name": "Николаев",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423a6"),
  "id": NumberInt(1428),
  "region_id": NumberInt(22),
  "name": "Николаев",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423a7"),
  "id": NumberInt(1429),
  "region_id": NumberInt(1),
  "name": "Николаевка",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423a8"),
  "id": NumberInt(1430),
  "region_id": NumberInt(15),
  "name": "Николаевка",
  "phone_code": "4851"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423a9"),
  "id": NumberInt(1431),
  "region_id": NumberInt(5),
  "name": "Николаевка",
  "phone_code": "6262"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423aa"),
  "id": NumberInt(1432),
  "region_id": NumberInt(4),
  "name": "Николаевка",
  "phone_code": "5657"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423ab"),
  "id": NumberInt(1433),
  "region_id": NumberInt(4),
  "name": "Николаевка",
  "phone_code": "5671"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423ac"),
  "id": NumberInt(1434),
  "region_id": NumberInt(15),
  "name": "Николаевка",
  "phone_code": "4857"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423ad"),
  "id": NumberInt(1435),
  "region_id": NumberInt(4),
  "name": "Николаевка",
  "phone_code": "5650"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423ae"),
  "id": NumberInt(1436),
  "region_id": NumberInt(14),
  "name": "Николаевка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423af"),
  "id": NumberInt(1437),
  "region_id": NumberInt(14),
  "name": "Николаевское",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423b0"),
  "id": NumberInt(1438),
  "region_id": NumberInt(5),
  "name": "Николайполье",
  "phone_code": "6272"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423b1"),
  "id": NumberInt(1439),
  "region_id": NumberInt(4),
  "name": "Никополь",
  "phone_code": "5662"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423b2"),
  "id": NumberInt(1440),
  "region_id": NumberInt(6),
  "name": "Новая Боровая",
  "phone_code": "4145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423b3"),
  "id": NumberInt(1441),
  "region_id": NumberInt(20),
  "name": "Новая Водолага",
  "phone_code": "5740"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423b4"),
  "id": NumberInt(1442),
  "region_id": NumberInt(16),
  "name": "Новая Галещина",
  "phone_code": "5342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423b5"),
  "id": NumberInt(1443),
  "region_id": NumberInt(23),
  "name": "Новая дмитровка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423b6"),
  "id": NumberInt(1444),
  "region_id": NumberInt(15),
  "name": "Новая долина",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423b7"),
  "id": NumberInt(1445),
  "region_id": NumberInt(15),
  "name": "Новая дофиновка",
  "phone_code": "4855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423b8"),
  "id": NumberInt(1446),
  "region_id": NumberInt(21),
  "name": "Новая збурьевка",
  "phone_code": "5539"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423b9"),
  "id": NumberInt(1447),
  "region_id": NumberInt(21),
  "name": "Новая Каховка",
  "phone_code": "5549"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423ba"),
  "id": NumberInt(1448),
  "region_id": NumberInt(3),
  "name": "Новая лешня",
  "phone_code": "3372"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423bb"),
  "id": NumberInt(1449),
  "region_id": NumberInt(17),
  "name": "Новая Любомирка",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423bc"),
  "id": NumberInt(1450),
  "region_id": NumberInt(21),
  "name": "Новая маячка",
  "phone_code": "5542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423bd"),
  "id": NumberInt(1451),
  "region_id": NumberInt(15),
  "name": "Новая некрасовка",
  "phone_code": "4841"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423be"),
  "id": NumberInt(1452),
  "region_id": NumberInt(14),
  "name": "Новая Одесса",
  "phone_code": "5167"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423bf"),
  "id": NumberInt(1453),
  "region_id": NumberInt(11),
  "name": "Новая прага",
  "phone_code": "5235"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423c0"),
  "id": NumberInt(1454),
  "region_id": NumberInt(4),
  "name": "Новая русь",
  "phone_code": "5672"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423c1"),
  "id": NumberInt(1455),
  "region_id": NumberInt(22),
  "name": "Новая Ушица",
  "phone_code": "3847"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423c2"),
  "id": NumberInt(1456),
  "region_id": NumberInt(24),
  "name": "Новгород-Северский",
  "phone_code": "4658"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423c3"),
  "id": NumberInt(1457),
  "region_id": NumberInt(11),
  "name": "Новгородка",
  "phone_code": "5241"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423c4"),
  "id": NumberInt(1458),
  "region_id": NumberInt(5),
  "name": "Новгородское",
  "phone_code": "6247"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423c5"),
  "id": NumberInt(1459),
  "region_id": NumberInt(9),
  "name": "Новица",
  "phone_code": "3472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423c6"),
  "id": NumberInt(1460),
  "region_id": NumberInt(16),
  "name": "Новоаврамовка",
  "phone_code": "5362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423c7"),
  "id": NumberInt(1461),
  "region_id": NumberInt(5),
  "name": "Новоазовск",
  "phone_code": "6296"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423c8"),
  "id": NumberInt(1462),
  "region_id": NumberInt(12),
  "name": "Новоайдар",
  "phone_code": "6445"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423c9"),
  "id": NumberInt(1463),
  "region_id": NumberInt(11),
  "name": "Новоалександровка",
  "phone_code": "5251"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423ca"),
  "id": NumberInt(1464),
  "region_id": NumberInt(4),
  "name": "Новоалександровка",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423cb"),
  "id": NumberInt(1465),
  "region_id": NumberInt(21),
  "name": "Новоалексеевка",
  "phone_code": "5534"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423cc"),
  "id": NumberInt(1466),
  "region_id": NumberInt(5),
  "name": "Новоамвросиевское",
  "phone_code": "6259"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423cd"),
  "id": NumberInt(1467),
  "region_id": NumberInt(11),
  "name": "Новоархангельск",
  "phone_code": "255"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423ce"),
  "id": NumberInt(1468),
  "region_id": NumberInt(8),
  "name": "Новобогдановка",
  "phone_code": "6142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423cf"),
  "id": NumberInt(1469),
  "region_id": NumberInt(15),
  "name": "Новоборисовка",
  "phone_code": "4859"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423d0"),
  "id": NumberInt(1470),
  "region_id": NumberInt(3),
  "name": "Нововолынск",
  "phone_code": "3344"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423d1"),
  "id": NumberInt(1471),
  "region_id": NumberInt(21),
  "name": "Нововоронцовка",
  "phone_code": "5533"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423d2"),
  "id": NumberInt(1472),
  "region_id": NumberInt(6),
  "name": "Новоград-Волынский",
  "phone_code": "4141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423d3"),
  "id": NumberInt(1473),
  "region_id": NumberInt(21),
  "name": "Новогригоровка",
  "phone_code": "5534"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423d4"),
  "id": NumberInt(1474),
  "region_id": NumberInt(5),
  "name": "Новогродовка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423d5"),
  "id": NumberInt(1475),
  "region_id": NumberInt(6),
  "name": "Новогуйвинское",
  "phone_code": "4122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423d6"),
  "id": NumberInt(1476),
  "region_id": NumberInt(12),
  "name": "Новодарьевка",
  "phone_code": "6433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423d7"),
  "id": NumberInt(1477),
  "region_id": NumberInt(25),
  "name": "Новоднестровск",
  "phone_code": "3741"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423d8"),
  "id": NumberInt(1478),
  "region_id": NumberInt(5),
  "name": "Новодонецкое",
  "phone_code": "6277"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423d9"),
  "id": NumberInt(1479),
  "region_id": NumberInt(12),
  "name": "Новодружеск",
  "phone_code": "6451"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423da"),
  "id": NumberInt(1480),
  "region_id": NumberInt(24),
  "name": "Новое",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423db"),
  "id": NumberInt(1481),
  "region_id": NumberInt(11),
  "name": "Новое",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423dc"),
  "id": NumberInt(1482),
  "region_id": NumberInt(7),
  "name": "Новое давыдково",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423dd"),
  "id": NumberInt(1483),
  "region_id": NumberInt(8),
  "name": "Новое запорожье",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423de"),
  "id": NumberInt(1484),
  "region_id": NumberInt(19),
  "name": "Новое Село",
  "phone_code": "3543"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423df"),
  "id": NumberInt(1485),
  "region_id": NumberInt(5),
  "name": "Новозарьевка",
  "phone_code": "6217"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423e0"),
  "id": NumberInt(1486),
  "region_id": NumberInt(4),
  "name": "Новоивановка",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423e1"),
  "id": NumberInt(1487),
  "region_id": NumberInt(4),
  "name": "Новолозоватка",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423e2"),
  "id": NumberInt(1488),
  "region_id": NumberInt(8),
  "name": "Новолюбимовка",
  "phone_code": "6178"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423e3"),
  "id": NumberInt(1489),
  "region_id": NumberInt(17),
  "name": "Новомалин",
  "phone_code": "3654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423e4"),
  "id": NumberInt(1490),
  "region_id": NumberInt(11),
  "name": "Новомиргород",
  "phone_code": "5256"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423e5"),
  "id": NumberInt(1491),
  "region_id": NumberInt(4),
  "name": "Новомосковск",
  "phone_code": "569"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423e6"),
  "id": NumberInt(1492),
  "region_id": NumberInt(8),
  "name": "Новониколаевка",
  "phone_code": "6178"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423e7"),
  "id": NumberInt(1493),
  "region_id": NumberInt(4),
  "name": "Новониколаевка",
  "phone_code": "5618"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423e8"),
  "id": NumberInt(1494),
  "region_id": NumberInt(4),
  "name": "Новониколаевка",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423e9"),
  "id": NumberInt(1495),
  "region_id": NumberInt(8),
  "name": "Новониколаевка",
  "phone_code": "6144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423ea"),
  "id": NumberInt(1496),
  "region_id": NumberInt(1),
  "name": "Новоозерное",
  "phone_code": "6569"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423eb"),
  "id": NumberInt(1497),
  "region_id": NumberInt(6),
  "name": "Новоозерянка",
  "phone_code": "4135"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423ec"),
  "id": NumberInt(1498),
  "region_id": NumberInt(11),
  "name": "Новоолександровка",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423ed"),
  "id": NumberInt(1499),
  "region_id": NumberInt(16),
  "name": "Новоореховка",
  "phone_code": "5322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423ee"),
  "id": NumberInt(1500),
  "region_id": NumberInt(16),
  "name": "Новооржицкое",
  "phone_code": "5357"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423ef"),
  "id": NumberInt(1501),
  "region_id": NumberInt(20),
  "name": "Новоосиново",
  "phone_code": "5742"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423f0"),
  "id": NumberInt(1502),
  "region_id": NumberInt(20),
  "name": "Новопавловка",
  "phone_code": "5757"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423f1"),
  "id": NumberInt(1503),
  "region_id": NumberInt(8),
  "name": "Новопетровка",
  "phone_code": "6153"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423f2"),
  "id": NumberInt(1504),
  "region_id": NumberInt(14),
  "name": "Новопетровское",
  "phone_code": "5167"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423f3"),
  "id": NumberInt(1505),
  "region_id": NumberInt(20),
  "name": "Новопокровка",
  "phone_code": "5746"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423f4"),
  "id": NumberInt(1506),
  "region_id": NumberInt(4),
  "name": "Новополье",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423f5"),
  "id": NumberInt(1507),
  "region_id": NumberInt(12),
  "name": "Новопсков",
  "phone_code": "6463"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423f6"),
  "id": NumberInt(1508),
  "region_id": NumberInt(9),
  "name": "Новоселица",
  "phone_code": "3477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423f7"),
  "id": NumberInt(1509),
  "region_id": NumberInt(25),
  "name": "Новоселица",
  "phone_code": "3733"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423f8"),
  "id": NumberInt(1510),
  "region_id": NumberInt(19),
  "name": "Новоселка",
  "phone_code": "3543"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423f9"),
  "id": NumberInt(1511),
  "region_id": NumberInt(10),
  "name": "Новоселки",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423fa"),
  "id": NumberInt(1512),
  "region_id": NumberInt(24),
  "name": "Новоселовка",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423fb"),
  "id": NumberInt(1513),
  "region_id": NumberInt(20),
  "name": "Новоселовка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423fc"),
  "id": NumberInt(1514),
  "region_id": NumberInt(1),
  "name": "Новоселовское",
  "phone_code": "6553"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423fd"),
  "id": NumberInt(1515),
  "region_id": NumberInt(1),
  "name": "Новосельское",
  "phone_code": "6558"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423fe"),
  "id": NumberInt(1516),
  "region_id": NumberInt(21),
  "name": "Новотроицкое",
  "phone_code": "5548"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc423ff"),
  "id": NumberInt(1517),
  "region_id": NumberInt(5),
  "name": "Новотроицкое",
  "phone_code": "6214"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42400"),
  "id": NumberInt(1518),
  "region_id": NumberInt(11),
  "name": "Новоукраинка",
  "phone_code": "5251"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42401"),
  "id": NumberInt(1519),
  "region_id": NumberInt(14),
  "name": "Новоукраинка",
  "phone_code": "5168"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42402"),
  "id": NumberInt(1520),
  "region_id": NumberInt(5),
  "name": "Новоэкономическое",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42403"),
  "id": NumberInt(1521),
  "region_id": NumberInt(13),
  "name": "Новояворовск",
  "phone_code": "3256"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42404"),
  "id": NumberInt(1522),
  "region_id": NumberInt(10),
  "name": "Новые безрадичи",
  "phone_code": "4472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42405"),
  "id": NumberInt(1523),
  "region_id": NumberInt(6),
  "name": "Новые Белокоровичи",
  "phone_code": "4135"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42406"),
  "id": NumberInt(1524),
  "region_id": NumberInt(15),
  "name": "Новые беляры",
  "phone_code": "4855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42407"),
  "id": NumberInt(1525),
  "region_id": NumberInt(24),
  "name": "Новые Млыны",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42408"),
  "id": NumberInt(1526),
  "region_id": NumberInt(10),
  "name": "Новые петровцы",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42409"),
  "id": NumberInt(1527),
  "region_id": NumberInt(16),
  "name": "Новые Санжары",
  "phone_code": "5344"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4240a"),
  "id": NumberInt(1528),
  "region_id": NumberInt(24),
  "name": "Новый белоус",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4240b"),
  "id": NumberInt(1529),
  "region_id": NumberInt(14),
  "name": "Новый Буг",
  "phone_code": "5151"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4240c"),
  "id": NumberInt(1530),
  "region_id": NumberInt(24),
  "name": "Новый Быков",
  "phone_code": "4632"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4240d"),
  "id": NumberInt(1531),
  "region_id": NumberInt(17),
  "name": "Новый корец",
  "phone_code": "3651"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4240e"),
  "id": NumberInt(1532),
  "region_id": NumberInt(22),
  "name": "Новый кривин",
  "phone_code": "3842"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4240f"),
  "id": NumberInt(1533),
  "region_id": NumberInt(9),
  "name": "Новый мизунь",
  "phone_code": "3477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42410"),
  "id": NumberInt(1534),
  "region_id": NumberInt(13),
  "name": "Новый Роздол",
  "phone_code": "3261"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42411"),
  "id": NumberInt(1535),
  "region_id": NumberInt(1),
  "name": "Новый Свет",
  "phone_code": "6566"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42412"),
  "id": NumberInt(1536),
  "region_id": NumberInt(5),
  "name": "Новый Свет",
  "phone_code": "6253"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42413"),
  "id": NumberInt(1537),
  "region_id": NumberInt(13),
  "name": "Новый ярычев",
  "phone_code": "3254"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42414"),
  "id": NumberInt(1538),
  "region_id": NumberInt(6),
  "name": "Норинск",
  "phone_code": "4851"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42415"),
  "id": NumberInt(1539),
  "region_id": NumberInt(24),
  "name": "Носовка",
  "phone_code": "4642"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42416"),
  "id": NumberInt(1540),
  "region_id": NumberInt(17),
  "name": "Обаров",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42417"),
  "id": NumberInt(1541),
  "region_id": NumberInt(9),
  "name": "Обертин",
  "phone_code": "3479"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42418"),
  "id": NumberInt(1542),
  "region_id": NumberInt(2),
  "name": "Ободовка",
  "phone_code": "4343"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42419"),
  "id": NumberInt(1543),
  "region_id": NumberInt(11),
  "name": "Обозновка",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4241a"),
  "id": NumberInt(1544),
  "region_id": NumberInt(9),
  "name": "Оболонье",
  "phone_code": "3477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4241b"),
  "id": NumberInt(1545),
  "region_id": NumberInt(13),
  "name": "Оброшино",
  "phone_code": "322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4241c"),
  "id": NumberInt(1546),
  "region_id": NumberInt(10),
  "name": "Обухов",
  "phone_code": "4472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4241d"),
  "id": NumberInt(1547),
  "region_id": NumberInt(3),
  "name": "Овадное",
  "phone_code": "3342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4241e"),
  "id": NumberInt(1548),
  "region_id": NumberInt(15),
  "name": "Овидиополь",
  "phone_code": "4851"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4241f"),
  "id": NumberInt(1549),
  "region_id": NumberInt(6),
  "name": "Овруч",
  "phone_code": "4148"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42420"),
  "id": NumberInt(1550),
  "region_id": NumberInt(11),
  "name": "Одая",
  "phone_code": "6559"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42421"),
  "id": NumberInt(1551),
  "region_id": NumberInt(15),
  "name": "Одесса",
  "phone_code": "48"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42422"),
  "id": NumberInt(1552),
  "region_id": NumberInt(17),
  "name": "Оженин",
  "phone_code": "3654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42423"),
  "id": NumberInt(1553),
  "region_id": NumberInt(16),
  "name": "Озера",
  "phone_code": "5343"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42424"),
  "id": NumberInt(1554),
  "region_id": NumberInt(6),
  "name": "Озерное",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42425"),
  "id": NumberInt(1555),
  "region_id": NumberInt(3),
  "name": "Озерцо",
  "phone_code": "3365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42426"),
  "id": NumberInt(1556),
  "region_id": NumberInt(19),
  "name": "Озеряны",
  "phone_code": "3541"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42427"),
  "id": NumberInt(1557),
  "region_id": NumberInt(10),
  "name": "Озирне",
  "phone_code": "263"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42428"),
  "id": NumberInt(1558),
  "region_id": NumberInt(9),
  "name": "Окно",
  "phone_code": "3430"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42429"),
  "id": NumberInt(1559),
  "region_id": NumberInt(25),
  "name": "Окно",
  "phone_code": "3737"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4242a"),
  "id": NumberInt(1560),
  "region_id": NumberInt(1),
  "name": "Октябрьское",
  "phone_code": "6557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4242b"),
  "id": NumberInt(1561),
  "region_id": NumberInt(1),
  "name": "Октябрьское",
  "phone_code": "6556"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4242c"),
  "id": NumberInt(1562),
  "region_id": NumberInt(6),
  "name": "Олевск",
  "phone_code": "4135"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4242d"),
  "id": NumberInt(1563),
  "region_id": NumberInt(6),
  "name": "Олекс",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4242e"),
  "id": NumberInt(1564),
  "region_id": NumberInt(22),
  "name": "Олешин",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4242f"),
  "id": NumberInt(1565),
  "region_id": NumberInt(7),
  "name": "Олешник",
  "phone_code": "3143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42430"),
  "id": NumberInt(1566),
  "region_id": NumberInt(9),
  "name": "Олешов",
  "phone_code": "3479"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42431"),
  "id": NumberInt(1567),
  "region_id": NumberInt(1),
  "name": "Олива",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42432"),
  "id": NumberInt(1568),
  "region_id": NumberInt(6),
  "name": "Олиевка",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42433"),
  "id": NumberInt(1569),
  "region_id": NumberInt(24),
  "name": "Олишевка",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42434"),
  "id": NumberInt(1570),
  "region_id": NumberInt(3),
  "name": "Олыка",
  "phone_code": "3365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42435"),
  "id": NumberInt(1571),
  "region_id": NumberInt(5),
  "name": "Ольгинка",
  "phone_code": "6214"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42436"),
  "id": NumberInt(1572),
  "region_id": NumberInt(12),
  "name": "Ольховое",
  "phone_code": "6472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42437"),
  "id": NumberInt(1573),
  "region_id": NumberInt(7),
  "name": "Ольховцы",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42438"),
  "id": NumberInt(1574),
  "region_id": NumberInt(7),
  "name": "Ольховцы-лазы",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42439"),
  "id": NumberInt(1575),
  "region_id": NumberInt(23),
  "name": "Ольшана",
  "phone_code": "4734"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4243a"),
  "id": NumberInt(1576),
  "region_id": NumberInt(18),
  "name": "Ольшана",
  "phone_code": "5452"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4243b"),
  "id": NumberInt(1577),
  "region_id": NumberInt(6),
  "name": "Ольшанка",
  "phone_code": "4139"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4243c"),
  "id": NumberInt(1578),
  "region_id": NumberInt(11),
  "name": "Ольшанка",
  "phone_code": "5250"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4243d"),
  "id": NumberInt(1579),
  "region_id": NumberInt(14),
  "name": "Ольшанское",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4243e"),
  "id": NumberInt(1580),
  "region_id": NumberInt(20),
  "name": "Ольшаны",
  "phone_code": "5763"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4243f"),
  "id": NumberInt(1581),
  "region_id": NumberInt(11),
  "name": "Оникеево",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42440"),
  "id": NumberInt(1582),
  "region_id": NumberInt(15),
  "name": "Ониськово",
  "phone_code": "4855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42441"),
  "id": NumberInt(1583),
  "region_id": NumberInt(16),
  "name": "Онишки",
  "phone_code": "5357"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42442"),
  "id": NumberInt(1584),
  "region_id": NumberInt(11),
  "name": "Онуфриевка",
  "phone_code": "5238"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42443"),
  "id": NumberInt(1585),
  "region_id": NumberInt(13),
  "name": "Опоры",
  "phone_code": "3244"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42444"),
  "id": NumberInt(1586),
  "region_id": NumberInt(16),
  "name": "Опошня",
  "phone_code": "5353"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42445"),
  "id": NumberInt(1587),
  "region_id": NumberInt(5),
  "name": "Опытное",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42446"),
  "id": NumberInt(1588),
  "region_id": NumberInt(2),
  "name": "Оратов",
  "phone_code": "4330"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42447"),
  "id": NumberInt(1589),
  "region_id": NumberInt(2),
  "name": "Оратов",
  "phone_code": "4330"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42448"),
  "id": NumberInt(1590),
  "region_id": NumberInt(17),
  "name": "Орвяница",
  "phone_code": "3658"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42449"),
  "id": NumberInt(1591),
  "region_id": NumberInt(12),
  "name": "Орджоникидзе",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4244a"),
  "id": NumberInt(1592),
  "region_id": NumberInt(1),
  "name": "Орджоникидзе",
  "phone_code": "6562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4244b"),
  "id": NumberInt(1593),
  "region_id": NumberInt(4),
  "name": "Орджоникидзе",
  "phone_code": "5667"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4244c"),
  "id": NumberInt(1594),
  "region_id": NumberInt(1),
  "name": "Ореанда",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4244d"),
  "id": NumberInt(1595),
  "region_id": NumberInt(8),
  "name": "Орехов",
  "phone_code": "6141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4244e"),
  "id": NumberInt(1596),
  "region_id": NumberInt(16),
  "name": "Ореховка",
  "phone_code": "5361"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4244f"),
  "id": NumberInt(1597),
  "region_id": NumberInt(12),
  "name": "Ореховка",
  "phone_code": "6436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42450"),
  "id": NumberInt(1598),
  "region_id": NumberInt(1),
  "name": "Орехово",
  "phone_code": "6563"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42451"),
  "id": NumberInt(1599),
  "region_id": NumberInt(17),
  "name": "Оржев",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42452"),
  "id": NumberInt(1600),
  "region_id": NumberInt(16),
  "name": "Оржица",
  "phone_code": "5357"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42453"),
  "id": NumberInt(1601),
  "region_id": NumberInt(20),
  "name": "Орилька-1",
  "phone_code": "5745"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42454"),
  "id": NumberInt(1602),
  "region_id": NumberInt(4),
  "name": "Орловщина",
  "phone_code": "5612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42455"),
  "id": NumberInt(1603),
  "region_id": NumberInt(8),
  "name": "Осипенко",
  "phone_code": "6153"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42456"),
  "id": NumberInt(1604),
  "region_id": NumberInt(1),
  "name": "Останино",
  "phone_code": "6557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42457"),
  "id": NumberInt(1605),
  "region_id": NumberInt(24),
  "name": "Остер",
  "phone_code": "4646"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42458"),
  "id": NumberInt(1606),
  "region_id": NumberInt(17),
  "name": "Остки",
  "phone_code": "3635"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42459"),
  "id": NumberInt(1607),
  "region_id": NumberInt(19),
  "name": "Остров",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4245a"),
  "id": NumberInt(1608),
  "region_id": NumberInt(13),
  "name": "Остров",
  "phone_code": "3257"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4245b"),
  "id": NumberInt(1609),
  "region_id": NumberInt(17),
  "name": "Острог",
  "phone_code": "3654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4245c"),
  "id": NumberInt(1610),
  "region_id": NumberInt(17),
  "name": "Острожец",
  "phone_code": "3659"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4245d"),
  "id": NumberInt(1611),
  "region_id": NumberInt(6),
  "name": "Осыково",
  "phone_code": "4143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4245e"),
  "id": NumberInt(1612),
  "region_id": NumberInt(1),
  "name": "Отрадное",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4245f"),
  "id": NumberInt(1613),
  "region_id": NumberInt(1),
  "name": "Отрадное",
  "phone_code": "6554"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42460"),
  "id": NumberInt(1614),
  "region_id": NumberInt(9),
  "name": "Отыния",
  "phone_code": "3433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42461"),
  "id": NumberInt(1615),
  "region_id": NumberInt(14),
  "name": "Очаков",
  "phone_code": "5154"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42462"),
  "id": NumberInt(1616),
  "region_id": NumberInt(5),
  "name": "Очеретино",
  "phone_code": "622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42463"),
  "id": NumberInt(1617),
  "region_id": NumberInt(13),
  "name": "Павлов",
  "phone_code": "3255"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42464"),
  "id": NumberInt(1618),
  "region_id": NumberInt(11),
  "name": "Павловка",
  "phone_code": "5236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42465"),
  "id": NumberInt(1619),
  "region_id": NumberInt(9),
  "name": "Павловка",
  "phone_code": "3436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42466"),
  "id": NumberInt(1620),
  "region_id": NumberInt(24),
  "name": "Павловка",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42467"),
  "id": NumberInt(1621),
  "region_id": NumberInt(4),
  "name": "Павлоград",
  "phone_code": "5632"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42468"),
  "id": NumberInt(1622),
  "region_id": NumberInt(11),
  "name": "Павлыш",
  "phone_code": "5258"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42469"),
  "id": NumberInt(1623),
  "region_id": NumberInt(7),
  "name": "Павшино",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4246a"),
  "id": NumberInt(1624),
  "region_id": NumberInt(10),
  "name": "Паляничинцы",
  "phone_code": "4465"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4246b"),
  "id": NumberInt(1625),
  "region_id": NumberInt(5),
  "name": "Пантелеймоновка",
  "phone_code": "6242"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4246c"),
  "id": NumberInt(1626),
  "region_id": NumberInt(20),
  "name": "Панютино",
  "phone_code": "5745"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4246d"),
  "id": NumberInt(1627),
  "region_id": NumberInt(24),
  "name": "Парафиевка",
  "phone_code": "4633"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4246e"),
  "id": NumberInt(1628),
  "region_id": NumberInt(6),
  "name": "Парипсы",
  "phone_code": "4137"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4246f"),
  "id": NumberInt(1629),
  "region_id": NumberInt(1),
  "name": "Парковое",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42470"),
  "id": NumberInt(1630),
  "region_id": NumberInt(1),
  "name": "Партенит",
  "phone_code": "56"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42471"),
  "id": NumberInt(1631),
  "region_id": NumberInt(4),
  "name": "Партизанское",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42472"),
  "id": NumberInt(1632),
  "region_id": NumberInt(21),
  "name": "Партизаны",
  "phone_code": "5534"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42473"),
  "id": NumberInt(1633),
  "region_id": NumberInt(20),
  "name": "Пархомовка",
  "phone_code": "5756"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42474"),
  "id": NumberInt(1634),
  "region_id": NumberInt(7),
  "name": "Пацканево",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42475"),
  "id": NumberInt(1635),
  "region_id": NumberInt(11),
  "name": "Первозвановка",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42476"),
  "id": NumberInt(1636),
  "region_id": NumberInt(14),
  "name": "Первомайск",
  "phone_code": "5161"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42477"),
  "id": NumberInt(1637),
  "region_id": NumberInt(12),
  "name": "Первомайск",
  "phone_code": "6455"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42478"),
  "id": NumberInt(1638),
  "region_id": NumberInt(4),
  "name": "Первомайск",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42479"),
  "id": NumberInt(1639),
  "region_id": NumberInt(20),
  "name": "Первомайский",
  "phone_code": "5748"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4247a"),
  "id": NumberInt(1640),
  "region_id": NumberInt(1),
  "name": "Первомайское",
  "phone_code": "6555"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4247b"),
  "id": NumberInt(1641),
  "region_id": NumberInt(1),
  "name": "Первомайское",
  "phone_code": "6552"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4247c"),
  "id": NumberInt(1642),
  "region_id": NumberInt(1),
  "name": "Перевальное",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4247d"),
  "id": NumberInt(1643),
  "region_id": NumberInt(12),
  "name": "Перевальск",
  "phone_code": "6441"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4247e"),
  "id": NumberInt(1644),
  "region_id": NumberInt(11),
  "name": "Перегоновка",
  "phone_code": "6559"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4247f"),
  "id": NumberInt(1645),
  "region_id": NumberInt(18),
  "name": "Перекрестовка",
  "phone_code": "5448"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42480"),
  "id": NumberInt(1646),
  "region_id": NumberInt(4),
  "name": "Перемога",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42481"),
  "id": NumberInt(1647),
  "region_id": NumberInt(13),
  "name": "Перемышляны",
  "phone_code": "3263"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42482"),
  "id": NumberInt(1648),
  "region_id": NumberInt(9),
  "name": "Перерыв",
  "phone_code": "3433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42483"),
  "id": NumberInt(1649),
  "region_id": NumberInt(14),
  "name": "Пересадовка",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42484"),
  "id": NumberInt(1650),
  "region_id": NumberInt(20),
  "name": "Пересечная",
  "phone_code": "5763"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42485"),
  "id": NumberInt(1651),
  "region_id": NumberInt(7),
  "name": "Перечин",
  "phone_code": "3145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42486"),
  "id": NumberInt(1652),
  "region_id": NumberInt(4),
  "name": "Перещепино",
  "phone_code": "5612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42487"),
  "id": NumberInt(1653),
  "region_id": NumberInt(10),
  "name": "Переяслав-Хмельницкий",
  "phone_code": "4467"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42488"),
  "id": NumberInt(1654),
  "region_id": NumberInt(6),
  "name": "Перлявка",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42489"),
  "id": NumberInt(1655),
  "region_id": NumberInt(1),
  "name": "Перово",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4248a"),
  "id": NumberInt(1656),
  "region_id": NumberInt(5),
  "name": "Перше травня",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4248b"),
  "id": NumberInt(1657),
  "region_id": NumberInt(6),
  "name": "Першотравенск",
  "phone_code": "4144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4248c"),
  "id": NumberInt(1658),
  "region_id": NumberInt(4),
  "name": "Першотравенск",
  "phone_code": "5633"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4248d"),
  "id": NumberInt(1659),
  "region_id": NumberInt(6),
  "name": "Першотравневое",
  "phone_code": "4148"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4248e"),
  "id": NumberInt(1660),
  "region_id": NumberInt(14),
  "name": "Першотравневое",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4248f"),
  "id": NumberInt(1661),
  "region_id": NumberInt(5),
  "name": "Пески",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42490"),
  "id": NumberInt(1662),
  "region_id": NumberInt(16),
  "name": "Пески",
  "phone_code": "5361"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42491"),
  "id": NumberInt(1663),
  "region_id": NumberInt(10),
  "name": "Песковка",
  "phone_code": "4477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42492"),
  "id": NumberInt(1664),
  "region_id": NumberInt(20),
  "name": "Песочин",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42493"),
  "id": NumberInt(1665),
  "region_id": NumberInt(7),
  "name": "Пестрялово",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42494"),
  "id": NumberInt(1666),
  "region_id": NumberInt(2),
  "name": "Песчанка",
  "phone_code": "4349"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42495"),
  "id": NumberInt(1667),
  "region_id": NumberInt(4),
  "name": "Песчанка",
  "phone_code": "5612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42496"),
  "id": NumberInt(1668),
  "region_id": NumberInt(1),
  "name": "Песчаное",
  "phone_code": "6554"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42497"),
  "id": NumberInt(1669),
  "region_id": NumberInt(16),
  "name": "Песчаное",
  "phone_code": "536"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42498"),
  "id": NumberInt(1670),
  "region_id": NumberInt(5),
  "name": "Песчаное",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42499"),
  "id": NumberInt(1671),
  "region_id": NumberInt(19),
  "name": "Петриков",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4249a"),
  "id": NumberInt(1672),
  "region_id": NumberInt(4),
  "name": "Петриковка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4249b"),
  "id": NumberInt(1673),
  "region_id": NumberInt(1),
  "name": "Петровка",
  "phone_code": "6556"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4249c"),
  "id": NumberInt(1674),
  "region_id": NumberInt(15),
  "name": "Петровка",
  "phone_code": "4854"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4249d"),
  "id": NumberInt(1675),
  "region_id": NumberInt(14),
  "name": "Петровка",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4249e"),
  "id": NumberInt(1676),
  "region_id": NumberInt(12),
  "name": "Петровка",
  "phone_code": "6472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4249f"),
  "id": NumberInt(1677),
  "region_id": NumberInt(16),
  "name": "Петровка-роменская",
  "phone_code": "5354"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424a0"),
  "id": NumberInt(1678),
  "region_id": NumberInt(11),
  "name": "Петрово",
  "phone_code": "5237"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424a1"),
  "id": NumberInt(1679),
  "region_id": NumberInt(12),
  "name": "Петровское",
  "phone_code": "6432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424a2"),
  "id": NumberInt(1680),
  "region_id": NumberInt(22),
  "name": "Петровское",
  "phone_code": "4336"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424a3"),
  "id": NumberInt(1681),
  "region_id": NumberInt(10),
  "name": "Петровское",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424a4"),
  "id": NumberInt(1682),
  "region_id": NumberInt(10),
  "name": "Петровское",
  "phone_code": "4495"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424a5"),
  "id": NumberInt(1683),
  "region_id": NumberInt(15),
  "name": "Петродолинское",
  "phone_code": "4851"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424a6"),
  "id": NumberInt(1684),
  "region_id": NumberInt(4),
  "name": "Петропавловка",
  "phone_code": "5671"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424a7"),
  "id": NumberInt(1685),
  "region_id": NumberInt(10),
  "name": "Петропавловская Борщаговка",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424a8"),
  "id": NumberInt(1686),
  "region_id": NumberInt(10),
  "name": "Петрушки",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424a9"),
  "id": NumberInt(1687),
  "region_id": NumberInt(20),
  "name": "Печенеги",
  "phone_code": "5765"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424aa"),
  "id": NumberInt(1688),
  "region_id": NumberInt(9),
  "name": "Печенежин",
  "phone_code": "3433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424ab"),
  "id": NumberInt(1689),
  "region_id": NumberInt(2),
  "name": "Пещанка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424ac"),
  "id": NumberInt(1690),
  "region_id": NumberInt(4),
  "name": "Пивденное",
  "phone_code": "5662"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424ad"),
  "id": NumberInt(1691),
  "region_id": NumberInt(20),
  "name": "Пивденное",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424ae"),
  "id": NumberInt(1692),
  "region_id": NumberInt(13),
  "name": "Пидбирцы",
  "phone_code": "322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424af"),
  "id": NumberInt(1693),
  "region_id": NumberInt(6),
  "name": "Пилиповичи",
  "phone_code": "4141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424b0"),
  "id": NumberInt(1694),
  "region_id": NumberInt(10),
  "name": "Пилиповка",
  "phone_code": "4465"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424b1"),
  "id": NumberInt(1695),
  "region_id": NumberInt(10),
  "name": "Пилипча",
  "phone_code": "4463"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424b2"),
  "id": NumberInt(1696),
  "region_id": NumberInt(1),
  "name": "Пионерское",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424b3"),
  "id": NumberInt(1697),
  "region_id": NumberInt(18),
  "name": "Пироговка",
  "phone_code": "5449"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424b4"),
  "id": NumberInt(1698),
  "region_id": NumberInt(16),
  "name": "Пирятин",
  "phone_code": "5358"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424b5"),
  "id": NumberInt(1699),
  "region_id": NumberInt(2),
  "name": "Писаревка",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424b6"),
  "id": NumberInt(1700),
  "region_id": NumberInt(5),
  "name": "Пискуновка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424b7"),
  "id": NumberInt(1701),
  "region_id": NumberInt(18),
  "name": "Плавинище",
  "phone_code": "5448"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424b8"),
  "id": NumberInt(1702),
  "region_id": NumberInt(15),
  "name": "Платоново",
  "phone_code": "4861"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424b9"),
  "id": NumberInt(1703),
  "region_id": NumberInt(10),
  "name": "Плесецкое",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424ba"),
  "id": NumberInt(1704),
  "region_id": NumberInt(11),
  "name": "Плетеный ташлык",
  "phone_code": "5258"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424bb"),
  "id": NumberInt(1705),
  "region_id": NumberInt(7),
  "name": "Плоске",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424bc"),
  "id": NumberInt(1706),
  "region_id": NumberInt(19),
  "name": "Плотыча",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424bd"),
  "id": NumberInt(1707),
  "region_id": NumberInt(9),
  "name": "Пнев",
  "phone_code": "3475"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424be"),
  "id": NumberInt(1708),
  "region_id": NumberInt(9),
  "name": "Побережье",
  "phone_code": "3436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424bf"),
  "id": NumberInt(1709),
  "region_id": NumberInt(11),
  "name": "Побугское",
  "phone_code": "5252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424c0"),
  "id": NumberInt(1710),
  "region_id": NumberInt(13),
  "name": "Повитное",
  "phone_code": "3231"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424c1"),
  "id": NumberInt(1711),
  "region_id": NumberInt(3),
  "name": "Поворск",
  "phone_code": "3352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424c2"),
  "id": NumberInt(1712),
  "region_id": NumberInt(22),
  "name": "Погорельцы",
  "phone_code": "4335"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424c3"),
  "id": NumberInt(1713),
  "region_id": NumberInt(2),
  "name": "Погребище",
  "phone_code": "4346"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424c4"),
  "id": NumberInt(1714),
  "region_id": NumberInt(2),
  "name": "Погребище первое",
  "phone_code": "4346"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424c5"),
  "id": NumberInt(1715),
  "region_id": NumberInt(10),
  "name": "Погребы",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424c6"),
  "id": NumberInt(1716),
  "region_id": NumberInt(13),
  "name": "Подберезцы",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424c7"),
  "id": NumberInt(1717),
  "region_id": NumberInt(13),
  "name": "Подбуж",
  "phone_code": "3244"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424c8"),
  "id": NumberInt(1718),
  "region_id": NumberInt(19),
  "name": "Подволочиск",
  "phone_code": "3543"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424c9"),
  "id": NumberInt(1719),
  "region_id": NumberInt(20),
  "name": "Подворки",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424ca"),
  "id": NumberInt(1720),
  "region_id": NumberInt(19),
  "name": "Подвысокое",
  "phone_code": "3548"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424cb"),
  "id": NumberInt(1721),
  "region_id": NumberInt(3),
  "name": "Подгайцы",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424cc"),
  "id": NumberInt(1722),
  "region_id": NumberInt(11),
  "name": "Подгайцы",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424cd"),
  "id": NumberInt(1723),
  "region_id": NumberInt(19),
  "name": "Подгайцы",
  "phone_code": "3542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424ce"),
  "id": NumberInt(1724),
  "region_id": NumberInt(14),
  "name": "Подгородная",
  "phone_code": "5161"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424cf"),
  "id": NumberInt(1725),
  "region_id": NumberInt(6),
  "name": "Подгородное",
  "phone_code": "4143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424d0"),
  "id": NumberInt(1726),
  "region_id": NumberInt(4),
  "name": "Подгородное",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424d1"),
  "id": NumberInt(1727),
  "region_id": NumberInt(19),
  "name": "Подгородное",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424d2"),
  "id": NumberInt(1728),
  "region_id": NumberInt(13),
  "name": "Подгородное",
  "phone_code": "3265"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424d3"),
  "id": NumberInt(1729),
  "region_id": NumberInt(10),
  "name": "Подгорцы",
  "phone_code": "4472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424d4"),
  "id": NumberInt(1730),
  "region_id": NumberInt(9),
  "name": "Подгорье",
  "phone_code": "3471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424d5"),
  "id": NumberInt(1731),
  "region_id": NumberInt(13),
  "name": "Подкамень",
  "phone_code": "3266"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424d6"),
  "id": NumberInt(1732),
  "region_id": NumberInt(9),
  "name": "Подмихайля",
  "phone_code": "3472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424d7"),
  "id": NumberInt(1733),
  "region_id": NumberInt(7),
  "name": "Подобовец",
  "phone_code": "03146"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424d8"),
  "id": NumberInt(1734),
  "region_id": NumberInt(13),
  "name": "Подорожное",
  "phone_code": "3239"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424d9"),
  "id": NumberInt(1735),
  "region_id": NumberInt(9),
  "name": "Подпечеры",
  "phone_code": "3436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424da"),
  "id": NumberInt(1736),
  "region_id": NumberInt(1),
  "name": "Пожарское",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424db"),
  "id": NumberInt(1737),
  "region_id": NumberInt(20),
  "name": "Покотиловка",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424dc"),
  "id": NumberInt(1738),
  "region_id": NumberInt(16),
  "name": "Покровская богачка",
  "phone_code": "5362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424dd"),
  "id": NumberInt(1739),
  "region_id": NumberInt(4),
  "name": "Покровское",
  "phone_code": "5662"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424de"),
  "id": NumberInt(1740),
  "region_id": NumberInt(4),
  "name": "Покровское",
  "phone_code": "5678"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424df"),
  "id": NumberInt(1741),
  "region_id": NumberInt(12),
  "name": "Покровское",
  "phone_code": "6456"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424e0"),
  "id": NumberInt(1742),
  "region_id": NumberInt(20),
  "name": "Полевая",
  "phone_code": "5763"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424e1"),
  "id": NumberInt(1743),
  "region_id": NumberInt(10),
  "name": "Полесское",
  "phone_code": "4492"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424e2"),
  "id": NumberInt(1744),
  "region_id": NumberInt(24),
  "name": "Политрудня",
  "phone_code": "4645"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424e3"),
  "id": NumberInt(1745),
  "region_id": NumberInt(12),
  "name": "Половинкино",
  "phone_code": "6461"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424e4"),
  "id": NumberInt(1746),
  "region_id": NumberInt(23),
  "name": "Половинчик",
  "phone_code": "4746"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424e5"),
  "id": NumberInt(1747),
  "region_id": NumberInt(8),
  "name": "Пологи",
  "phone_code": "6165"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424e6"),
  "id": NumberInt(1748),
  "region_id": NumberInt(18),
  "name": "Пологи",
  "phone_code": "5446"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424e7"),
  "id": NumberInt(1749),
  "region_id": NumberInt(10),
  "name": "Пологи-вергуны",
  "phone_code": "4467"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424e8"),
  "id": NumberInt(1750),
  "region_id": NumberInt(3),
  "name": "Полонка",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424e9"),
  "id": NumberInt(1751),
  "region_id": NumberInt(22),
  "name": "Полонное",
  "phone_code": "3843"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424ea"),
  "id": NumberInt(1752),
  "region_id": NumberInt(16),
  "name": "Полтава",
  "phone_code": "532"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424eb"),
  "id": NumberInt(1753),
  "region_id": NumberInt(1),
  "name": "Полтавка",
  "phone_code": "6556"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424ec"),
  "id": NumberInt(1754),
  "region_id": NumberInt(7),
  "name": "Поляна",
  "phone_code": "3133"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424ed"),
  "id": NumberInt(1755),
  "region_id": NumberInt(9),
  "name": "Поляница",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424ee"),
  "id": NumberInt(1756),
  "region_id": NumberInt(6),
  "name": "Полянка",
  "phone_code": "4144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424ef"),
  "id": NumberInt(1757),
  "region_id": NumberInt(22),
  "name": "Полянь",
  "phone_code": "3842"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424f0"),
  "id": NumberInt(1758),
  "region_id": NumberInt(11),
  "name": "Помошная",
  "phone_code": "6564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424f1"),
  "id": NumberInt(1759),
  "region_id": NumberInt(1),
  "name": "Понизовка",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424f2"),
  "id": NumberInt(1760),
  "region_id": NumberInt(22),
  "name": "Понинка",
  "phone_code": "3843"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424f3"),
  "id": NumberInt(1761),
  "region_id": NumberInt(12),
  "name": "Попасная",
  "phone_code": "6474"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424f4"),
  "id": NumberInt(1762),
  "region_id": NumberInt(4),
  "name": "Попасное",
  "phone_code": "5612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424f5"),
  "id": NumberInt(1763),
  "region_id": NumberInt(6),
  "name": "Попельня",
  "phone_code": "4137"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424f6"),
  "id": NumberInt(1764),
  "region_id": NumberInt(6),
  "name": "Попельня",
  "phone_code": "4137"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424f7"),
  "id": NumberInt(1765),
  "region_id": NumberInt(18),
  "name": "Поповка",
  "phone_code": "5447"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424f8"),
  "id": NumberInt(1766),
  "region_id": NumberInt(16),
  "name": "Поповка",
  "phone_code": "5346"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424f9"),
  "id": NumberInt(1767),
  "region_id": NumberInt(7),
  "name": "Попово",
  "phone_code": "3141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424fa"),
  "id": NumberInt(1768),
  "region_id": NumberInt(6),
  "name": "Поромовка",
  "phone_code": "4145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424fb"),
  "id": NumberInt(1769),
  "region_id": NumberInt(23),
  "name": "Поташ",
  "phone_code": "4748"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424fc"),
  "id": NumberInt(1770),
  "region_id": NumberInt(16),
  "name": "Потоки",
  "phone_code": "5366"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424fd"),
  "id": NumberInt(1771),
  "region_id": NumberInt(19),
  "name": "Почаев",
  "phone_code": "3546"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424fe"),
  "id": NumberInt(1772),
  "region_id": NumberInt(19),
  "name": "Почапинцы",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc424ff"),
  "id": NumberInt(1773),
  "region_id": NumberInt(23),
  "name": "Почапинцы",
  "phone_code": "4749"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42500"),
  "id": NumberInt(1774),
  "region_id": NumberInt(1),
  "name": "Почтовое",
  "phone_code": "6554"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42501"),
  "id": NumberInt(1775),
  "region_id": NumberInt(5),
  "name": "Предтечино",
  "phone_code": "6272"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42502"),
  "id": NumberInt(1776),
  "region_id": NumberInt(8),
  "name": "Преображенка",
  "phone_code": "6141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42503"),
  "id": NumberInt(1777),
  "region_id": NumberInt(8),
  "name": "Приазовское",
  "phone_code": "6133"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42504"),
  "id": NumberInt(1778),
  "region_id": NumberInt(1),
  "name": "Прибрежное",
  "phone_code": "6563"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42505"),
  "id": NumberInt(1779),
  "region_id": NumberInt(14),
  "name": "Прибугское",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42506"),
  "id": NumberInt(1780),
  "region_id": NumberInt(13),
  "name": "Прибужаны",
  "phone_code": "3254"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42507"),
  "id": NumberInt(1781),
  "region_id": NumberInt(14),
  "name": "Прибужье",
  "phone_code": "5152"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42508"),
  "id": NumberInt(1782),
  "region_id": NumberInt(1),
  "name": "Приветное",
  "phone_code": "06560"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42509"),
  "id": NumberInt(1783),
  "region_id": NumberInt(5),
  "name": "Приволье",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4250a"),
  "id": NumberInt(1784),
  "region_id": NumberInt(12),
  "name": "Приволье",
  "phone_code": "6451"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4250b"),
  "id": NumberInt(1785),
  "region_id": NumberInt(4),
  "name": "Приднепрянское",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4250c"),
  "id": NumberInt(1786),
  "region_id": NumberInt(20),
  "name": "Приколотное",
  "phone_code": "5752"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4250d"),
  "id": NumberInt(1787),
  "region_id": NumberInt(15),
  "name": "Прилиманское",
  "phone_code": "4851"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4250e"),
  "id": NumberInt(1788),
  "region_id": NumberInt(24),
  "name": "Прилуки",
  "phone_code": "4637"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4250f"),
  "id": NumberInt(1789),
  "region_id": NumberInt(8),
  "name": "Приморск",
  "phone_code": "6137"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42510"),
  "id": NumberInt(1790),
  "region_id": NumberInt(1),
  "name": "Приморский",
  "phone_code": "6562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42511"),
  "id": NumberInt(1791),
  "region_id": NumberInt(21),
  "name": "Приозерное",
  "phone_code": "5534"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42512"),
  "id": NumberInt(1792),
  "region_id": NumberInt(1),
  "name": "Приозерное",
  "phone_code": "6557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42513"),
  "id": NumberInt(1793),
  "region_id": NumberInt(6),
  "name": "Пристанционное",
  "phone_code": "4133"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42514"),
  "id": NumberInt(1794),
  "region_id": NumberInt(16),
  "name": "Пришиб",
  "phone_code": "5366"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42515"),
  "id": NumberInt(1795),
  "region_id": NumberInt(8),
  "name": "Пришиб",
  "phone_code": "6132"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42516"),
  "id": NumberInt(1796),
  "region_id": NumberInt(11),
  "name": "Приютовка",
  "phone_code": "5235"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42517"),
  "id": NumberInt(1797),
  "region_id": NumberInt(19),
  "name": "Пробежная",
  "phone_code": "3552"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42518"),
  "id": NumberInt(1798),
  "region_id": NumberInt(12),
  "name": "Пролетарский",
  "phone_code": "6433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42519"),
  "id": NumberInt(1799),
  "region_id": NumberInt(10),
  "name": "Пролиски",
  "phone_code": "4495"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4251a"),
  "id": NumberInt(1800),
  "region_id": NumberInt(4),
  "name": "Просяная",
  "phone_code": "567"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4251b"),
  "id": NumberInt(1801),
  "region_id": NumberInt(11),
  "name": "Протопоповка",
  "phone_code": "5235"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4251c"),
  "id": NumberInt(1802),
  "region_id": NumberInt(3),
  "name": "Проходы",
  "phone_code": "3362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4251d"),
  "id": NumberInt(1803),
  "region_id": NumberInt(23),
  "name": "Прохоровка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4251e"),
  "id": NumberInt(1804),
  "region_id": NumberInt(10),
  "name": "Процев",
  "phone_code": "4495"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4251f"),
  "id": NumberInt(1805),
  "region_id": NumberInt(20),
  "name": "Прудянка",
  "phone_code": "5763"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42520"),
  "id": NumberInt(1806),
  "region_id": NumberInt(6),
  "name": "Пряжов",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42521"),
  "id": NumberInt(1807),
  "region_id": NumberInt(13),
  "name": "Пукеничи",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42522"),
  "id": NumberInt(1808),
  "region_id": NumberInt(13),
  "name": "Пустомыты",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42523"),
  "id": NumberInt(1809),
  "region_id": NumberInt(18),
  "name": "Путивль",
  "phone_code": "5442"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42524"),
  "id": NumberInt(1810),
  "region_id": NumberInt(25),
  "name": "Путила",
  "phone_code": "3738"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42525"),
  "id": NumberInt(1811),
  "region_id": NumberInt(10),
  "name": "Пуховка",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42526"),
  "id": NumberInt(1812),
  "region_id": NumberInt(4),
  "name": "Пушкаревка",
  "phone_code": "5618"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42527"),
  "id": NumberInt(1813),
  "region_id": NumberInt(19),
  "name": "Пышковцы",
  "phone_code": "3542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42528"),
  "id": NumberInt(1814),
  "region_id": NumberInt(4),
  "name": "Пятихатки",
  "phone_code": "56510"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42529"),
  "id": NumberInt(1815),
  "region_id": NumberInt(13),
  "name": "Рава-Русская",
  "phone_code": "3252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4252a"),
  "id": NumberInt(1816),
  "region_id": NumberInt(24),
  "name": "Равнополье",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4252b"),
  "id": NumberInt(1817),
  "region_id": NumberInt(21),
  "name": "Раденск",
  "phone_code": "5542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4252c"),
  "id": NumberInt(1818),
  "region_id": NumberInt(13),
  "name": "Радехов",
  "phone_code": "3255"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4252d"),
  "id": NumberInt(1819),
  "region_id": NumberInt(6),
  "name": "Радомышль",
  "phone_code": "4132"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4252e"),
  "id": NumberInt(1820),
  "region_id": NumberInt(3),
  "name": "Радомышль",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4252f"),
  "id": NumberInt(1821),
  "region_id": NumberInt(15),
  "name": "Радостное",
  "phone_code": "48"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42530"),
  "id": NumberInt(1822),
  "region_id": NumberInt(4),
  "name": "Радушное",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42531"),
  "id": NumberInt(1823),
  "region_id": NumberInt(9),
  "name": "Радча",
  "phone_code": "3436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42532"),
  "id": NumberInt(1824),
  "region_id": NumberInt(17),
  "name": "Радывылив",
  "phone_code": "3633"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42533"),
  "id": NumberInt(1825),
  "region_id": NumberInt(17),
  "name": "Радыжево",
  "phone_code": "3634"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42534"),
  "id": NumberInt(1826),
  "region_id": NumberInt(16),
  "name": "Радянское",
  "phone_code": "5343"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42535"),
  "id": NumberInt(1827),
  "region_id": NumberInt(15),
  "name": "Раздельная",
  "phone_code": "4853"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42536"),
  "id": NumberInt(1828),
  "region_id": NumberInt(1),
  "name": "Раздольное",
  "phone_code": "6553"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42537"),
  "id": NumberInt(1829),
  "region_id": NumberInt(5),
  "name": "Райгородок",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42538"),
  "id": NumberInt(1830),
  "region_id": NumberInt(3),
  "name": "Ракита",
  "phone_code": "3346"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42539"),
  "id": NumberInt(1831),
  "region_id": NumberInt(16),
  "name": "Ракитное",
  "phone_code": "5366"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4253a"),
  "id": NumberInt(1832),
  "region_id": NumberInt(10),
  "name": "Ракитное",
  "phone_code": "4462"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4253b"),
  "id": NumberInt(1833),
  "region_id": NumberInt(7),
  "name": "Раково",
  "phone_code": "3145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4253c"),
  "id": NumberInt(1834),
  "region_id": NumberInt(9),
  "name": "Раковчик",
  "phone_code": "3433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4253d"),
  "id": NumberInt(1835),
  "region_id": NumberInt(7),
  "name": "Ракошино",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4253e"),
  "id": NumberInt(1836),
  "region_id": NumberInt(16),
  "name": "Рассошенцы",
  "phone_code": "5322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4253f"),
  "id": NumberInt(1837),
  "region_id": NumberInt(3),
  "name": "Ратно",
  "phone_code": "3310"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42540"),
  "id": NumberInt(1838),
  "region_id": NumberInt(3),
  "name": "Ратнов",
  "phone_code": "3366"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42541"),
  "id": NumberInt(1839),
  "region_id": NumberInt(7),
  "name": "Ратовцы",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42542"),
  "id": NumberInt(1840),
  "region_id": NumberInt(12),
  "name": "Рафайловка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42543"),
  "id": NumberInt(1841),
  "region_id": NumberInt(17),
  "name": "Рафаловка",
  "phone_code": "3634"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42544"),
  "id": NumberInt(1842),
  "region_id": NumberInt(7),
  "name": "Рахов",
  "phone_code": "3132"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42545"),
  "id": NumberInt(1843),
  "region_id": NumberInt(23),
  "name": "Рацево",
  "phone_code": "4730"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42546"),
  "id": NumberInt(1844),
  "region_id": NumberInt(17),
  "name": "Рачин",
  "phone_code": "3656"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42547"),
  "id": NumberInt(1845),
  "region_id": NumberInt(3),
  "name": "Рачин",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42548"),
  "id": NumberInt(1846),
  "region_id": NumberInt(15),
  "name": "Рени",
  "phone_code": "4840"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42549"),
  "id": NumberInt(1847),
  "region_id": NumberInt(24),
  "name": "Репки",
  "phone_code": "4641"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4254a"),
  "id": NumberInt(1848),
  "region_id": NumberInt(16),
  "name": "Решетиловка",
  "phone_code": "5363"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4254b"),
  "id": NumberInt(1849),
  "region_id": NumberInt(10),
  "name": "Ржищев",
  "phone_code": "4473"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4254c"),
  "id": NumberInt(1850),
  "region_id": NumberInt(12),
  "name": "Ровеньки",
  "phone_code": "6433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4254d"),
  "id": NumberInt(1851),
  "region_id": NumberInt(17),
  "name": "Ровно",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4254e"),
  "id": NumberInt(1852),
  "region_id": NumberInt(3),
  "name": "Ровное",
  "phone_code": "3377"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4254f"),
  "id": NumberInt(1853),
  "region_id": NumberInt(5),
  "name": "Ровное",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42550"),
  "id": NumberInt(1854),
  "region_id": NumberInt(11),
  "name": "Ровное",
  "phone_code": "5251"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42551"),
  "id": NumberInt(1855),
  "region_id": NumberInt(14),
  "name": "Ровное",
  "phone_code": "5154"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42552"),
  "id": NumberInt(1856),
  "region_id": NumberInt(20),
  "name": "Рогань",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42553"),
  "id": NumberInt(1857),
  "region_id": NumberInt(9),
  "name": "Рогатин",
  "phone_code": "3435"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42554"),
  "id": NumberInt(1858),
  "region_id": NumberInt(19),
  "name": "Рогачин",
  "phone_code": "3548"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42555"),
  "id": NumberInt(1859),
  "region_id": NumberInt(10),
  "name": "Рогозов",
  "phone_code": "4495"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42556"),
  "id": NumberInt(1860),
  "region_id": NumberInt(12),
  "name": "Родаково",
  "phone_code": "6473"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42557"),
  "id": NumberInt(1861),
  "region_id": NumberInt(5),
  "name": "Родинское",
  "phone_code": "6239"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42558"),
  "id": NumberInt(1862),
  "region_id": NumberInt(1),
  "name": "Родниковое",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42559"),
  "id": NumberInt(1863),
  "region_id": NumberInt(3),
  "name": "Рожище",
  "phone_code": "3368"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4255a"),
  "id": NumberInt(1864),
  "region_id": NumberInt(10),
  "name": "Рожны",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4255b"),
  "id": NumberInt(1865),
  "region_id": NumberInt(9),
  "name": "Рожнятов",
  "phone_code": "3474"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4255c"),
  "id": NumberInt(1866),
  "region_id": NumberInt(13),
  "name": "Розвадов",
  "phone_code": "3241"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4255d"),
  "id": NumberInt(1867),
  "region_id": NumberInt(13),
  "name": "Розгирче",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4255e"),
  "id": NumberInt(1868),
  "region_id": NumberInt(13),
  "name": "Роздол",
  "phone_code": "3241"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4255f"),
  "id": NumberInt(1869),
  "region_id": NumberInt(1),
  "name": "Роздольное",
  "phone_code": "6553"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42560"),
  "id": NumberInt(1870),
  "region_id": NumberInt(7),
  "name": "Розовка",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42561"),
  "id": NumberInt(1871),
  "region_id": NumberInt(8),
  "name": "Розовка",
  "phone_code": "6162"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42562"),
  "id": NumberInt(1872),
  "region_id": NumberInt(7),
  "name": "Розтоки",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42563"),
  "id": NumberInt(1873),
  "region_id": NumberInt(3),
  "name": "Рокини",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42564"),
  "id": NumberInt(1874),
  "region_id": NumberInt(17),
  "name": "Рокитное",
  "phone_code": "3635"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42565"),
  "id": NumberInt(1875),
  "region_id": NumberInt(17),
  "name": "Рокитное",
  "phone_code": "3635"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42566"),
  "id": NumberInt(1876),
  "region_id": NumberInt(7),
  "name": "Рокосово",
  "phone_code": "3142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42567"),
  "id": NumberInt(1877),
  "region_id": NumberInt(22),
  "name": "Романины",
  "phone_code": "3842"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42568"),
  "id": NumberInt(1878),
  "region_id": NumberInt(3),
  "name": "Романов",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42569"),
  "id": NumberInt(1879),
  "region_id": NumberInt(6),
  "name": "Романов",
  "phone_code": "4146"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4256a"),
  "id": NumberInt(1880),
  "region_id": NumberInt(18),
  "name": "Ромны",
  "phone_code": "5448"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4256b"),
  "id": NumberInt(1881),
  "region_id": NumberInt(10),
  "name": "Росава",
  "phone_code": "4474"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4256c"),
  "id": NumberInt(1882),
  "region_id": NumberInt(10),
  "name": "Роскошная",
  "phone_code": "4464"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4256d"),
  "id": NumberInt(1883),
  "region_id": NumberInt(11),
  "name": "Роскошное",
  "phone_code": "05252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4256e"),
  "id": NumberInt(1884),
  "region_id": NumberInt(10),
  "name": "Рославичи",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4256f"),
  "id": NumberInt(1885),
  "region_id": NumberInt(13),
  "name": "Росохач",
  "phone_code": "3251"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42570"),
  "id": NumberInt(1886),
  "region_id": NumberInt(2),
  "name": "Росоша",
  "phone_code": "4358"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42571"),
  "id": NumberInt(1887),
  "region_id": NumberInt(22),
  "name": "Россоша",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42572"),
  "id": NumberInt(1888),
  "region_id": NumberInt(25),
  "name": "Ростоки",
  "phone_code": "3738"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42573"),
  "id": NumberInt(1889),
  "region_id": NumberInt(23),
  "name": "Ротмистровка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42574"),
  "id": NumberInt(1890),
  "region_id": NumberInt(12),
  "name": "Рубежное",
  "phone_code": "6453"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42575"),
  "id": NumberInt(1891),
  "region_id": NumberInt(13),
  "name": "Рудки",
  "phone_code": "3236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42576"),
  "id": NumberInt(1892),
  "region_id": NumberInt(18),
  "name": "Руднево",
  "phone_code": "5442"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42577"),
  "id": NumberInt(1893),
  "region_id": NumberInt(2),
  "name": "Рудница",
  "phone_code": "4349"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42578"),
  "id": NumberInt(1894),
  "region_id": NumberInt(13),
  "name": "Рудно",
  "phone_code": "322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42579"),
  "id": NumberInt(1895),
  "region_id": NumberInt(22),
  "name": "Рудня-новенькая",
  "phone_code": "3840"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4257a"),
  "id": NumberInt(1896),
  "region_id": NumberInt(6),
  "name": "Ружин",
  "phone_code": "4138"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4257b"),
  "id": NumberInt(1897),
  "region_id": NumberInt(22),
  "name": "Русановцы",
  "phone_code": "3857"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4257c"),
  "id": NumberInt(1898),
  "region_id": NumberInt(23),
  "name": "Русская поляна",
  "phone_code": "472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4257d"),
  "id": NumberInt(1899),
  "region_id": NumberInt(14),
  "name": "Рыбаковка",
  "phone_code": "5153"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4257e"),
  "id": NumberInt(1900),
  "region_id": NumberInt(24),
  "name": "Рыбинск",
  "phone_code": "4657"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4257f"),
  "id": NumberInt(1901),
  "region_id": NumberInt(13),
  "name": "Рыхтичи",
  "phone_code": "3244"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42580"),
  "id": NumberInt(1902),
  "region_id": NumberInt(14),
  "name": "с. Воссиятское",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42581"),
  "id": NumberInt(1903),
  "region_id": NumberInt(23),
  "name": "с. Литвинец",
  "phone_code": "4736"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42582"),
  "id": NumberInt(1904),
  "region_id": NumberInt(4),
  "name": "с. Лозуватка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42583"),
  "id": NumberInt(1905),
  "region_id": NumberInt(6),
  "name": "с. Михайловка",
  "phone_code": "4142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42584"),
  "id": NumberInt(1906),
  "region_id": NumberInt(2),
  "name": "с. Поповцы",
  "phone_code": "4341"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42585"),
  "id": NumberInt(1907),
  "region_id": NumberInt(20),
  "name": "Савинцы",
  "phone_code": "5749"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42586"),
  "id": NumberInt(1908),
  "region_id": NumberInt(15),
  "name": "Саврань",
  "phone_code": "4865"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42587"),
  "id": NumberInt(1909),
  "region_id": NumberInt(23),
  "name": "Сагуновка",
  "phone_code": "472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42588"),
  "id": NumberInt(1910),
  "region_id": NumberInt(18),
  "name": "Сад",
  "phone_code": "542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42589"),
  "id": NumberInt(1911),
  "region_id": NumberInt(9),
  "name": "Саджава",
  "phone_code": "3471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4258a"),
  "id": NumberInt(1912),
  "region_id": NumberInt(9),
  "name": "Саджавка",
  "phone_code": "3475"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4258b"),
  "id": NumberInt(1913),
  "region_id": NumberInt(1),
  "name": "Садовое",
  "phone_code": "6550"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4258c"),
  "id": NumberInt(1914),
  "region_id": NumberInt(1),
  "name": "Саки",
  "phone_code": "6563"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4258d"),
  "id": NumberInt(1915),
  "region_id": NumberInt(15),
  "name": "Салганы",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4258e"),
  "id": NumberInt(1916),
  "region_id": NumberInt(10),
  "name": "Саливонки",
  "phone_code": "271"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4258f"),
  "id": NumberInt(1917),
  "region_id": NumberInt(11),
  "name": "Сальково",
  "phone_code": "6554"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42590"),
  "id": NumberInt(1918),
  "region_id": NumberInt(13),
  "name": "Самбор",
  "phone_code": "3236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42591"),
  "id": NumberInt(1919),
  "region_id": NumberInt(10),
  "name": "Самгородок",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42592"),
  "id": NumberInt(1920),
  "region_id": NumberInt(18),
  "name": "Самотоевка",
  "phone_code": "5459"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42593"),
  "id": NumberInt(1921),
  "region_id": NumberInt(12),
  "name": "Самсоновка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42594"),
  "id": NumberInt(1922),
  "region_id": NumberInt(1),
  "name": "Санаторное",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42595"),
  "id": NumberInt(1923),
  "region_id": NumberInt(19),
  "name": "Саранчуки",
  "phone_code": "3548"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42596"),
  "id": NumberInt(1924),
  "region_id": NumberInt(15),
  "name": "Сарата",
  "phone_code": "4848"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42597"),
  "id": NumberInt(1925),
  "region_id": NumberInt(17),
  "name": "Сарны",
  "phone_code": "36552"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42598"),
  "id": NumberInt(1926),
  "region_id": NumberInt(5),
  "name": "Сартана",
  "phone_code": "629"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42599"),
  "id": NumberInt(1927),
  "region_id": NumberInt(7),
  "name": "Сасово",
  "phone_code": "3143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4259a"),
  "id": NumberInt(1928),
  "region_id": NumberInt(22),
  "name": "Сатанив",
  "phone_code": "3851"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4259b"),
  "id": NumberInt(1929),
  "region_id": NumberInt(15),
  "name": "Сафьяны",
  "phone_code": "4841"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4259c"),
  "id": NumberInt(1930),
  "region_id": NumberInt(22),
  "name": "Сахкамень",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4259d"),
  "id": NumberInt(1931),
  "region_id": NumberInt(20),
  "name": "Сахновщина",
  "phone_code": "5762"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4259e"),
  "id": NumberInt(1932),
  "region_id": NumberInt(7),
  "name": "Свалява",
  "phone_code": "3133"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4259f"),
  "id": NumberInt(1933),
  "region_id": NumberInt(12),
  "name": "Сватово",
  "phone_code": "6471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425a0"),
  "id": NumberInt(1934),
  "region_id": NumberInt(12),
  "name": "Свердловск",
  "phone_code": "6434"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425a1"),
  "id": NumberInt(1935),
  "region_id": NumberInt(18),
  "name": "Свесса",
  "phone_code": "5456"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425a2"),
  "id": NumberInt(1936),
  "region_id": NumberInt(11),
  "name": "Светловодск",
  "phone_code": "5236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425a3"),
  "id": NumberInt(1937),
  "region_id": NumberInt(16),
  "name": "Светлогорское",
  "phone_code": "5343"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425a4"),
  "id": NumberInt(1938),
  "region_id": NumberInt(5),
  "name": "Светлодарск",
  "phone_code": "6249"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425a5"),
  "id": NumberInt(1939),
  "region_id": NumberInt(23),
  "name": "Свидовок",
  "phone_code": "472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425a6"),
  "id": NumberInt(1940),
  "region_id": NumberInt(10),
  "name": "Свитанок",
  "phone_code": "4467"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425a7"),
  "id": NumberInt(1941),
  "region_id": NumberInt(16),
  "name": "Святиловка",
  "phone_code": "5365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425a8"),
  "id": NumberInt(1942),
  "region_id": NumberInt(5),
  "name": "Святогорск",
  "phone_code": "6262"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425a9"),
  "id": NumberInt(1943),
  "region_id": NumberInt(1),
  "name": "Севастополь",
  "phone_code": "692"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425aa"),
  "id": NumberInt(1944),
  "region_id": NumberInt(2),
  "name": "Севериновка",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425ab"),
  "id": NumberInt(1945),
  "region_id": NumberInt(12),
  "name": "Северодонецк",
  "phone_code": "6452"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425ac"),
  "id": NumberInt(1946),
  "region_id": NumberInt(5),
  "name": "Северск",
  "phone_code": "6274"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425ad"),
  "id": NumberInt(1947),
  "region_id": NumberInt(24),
  "name": "Седнев",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425ae"),
  "id": NumberInt(1948),
  "region_id": NumberInt(5),
  "name": "Селезневка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425af"),
  "id": NumberInt(1949),
  "region_id": NumberInt(16),
  "name": "Селещина",
  "phone_code": "5364"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425b0"),
  "id": NumberInt(1950),
  "region_id": NumberInt(5),
  "name": "Селидово",
  "phone_code": "6237"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425b1"),
  "id": NumberInt(1951),
  "region_id": NumberInt(17),
  "name": "Селище",
  "phone_code": "3655"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425b2"),
  "id": NumberInt(1952),
  "region_id": NumberInt(2),
  "name": "Селище",
  "phone_code": "4347"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425b3"),
  "id": NumberInt(1953),
  "region_id": NumberInt(23),
  "name": "Селище",
  "phone_code": "4735"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425b4"),
  "id": NumberInt(1954),
  "region_id": NumberInt(25),
  "name": "Селятин",
  "phone_code": "3738"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425b5"),
  "id": NumberInt(1955),
  "region_id": NumberInt(8),
  "name": "Семеновка",
  "phone_code": "6142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425b6"),
  "id": NumberInt(1956),
  "region_id": NumberInt(16),
  "name": "Семеновка",
  "phone_code": "5341"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425b7"),
  "id": NumberInt(1957),
  "region_id": NumberInt(24),
  "name": "Семеновка",
  "phone_code": "4659"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425b8"),
  "id": NumberInt(1958),
  "region_id": NumberInt(13),
  "name": "Семеновка",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425b9"),
  "id": NumberInt(1959),
  "region_id": NumberInt(10),
  "name": "Семиполки",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425ba"),
  "id": NumberInt(1960),
  "region_id": NumberInt(21),
  "name": "Семихатка",
  "phone_code": "5534"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425bb"),
  "id": NumberInt(1961),
  "region_id": NumberInt(1),
  "name": "Сенокосное",
  "phone_code": "6553"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425bc"),
  "id": NumberInt(1962),
  "region_id": NumberInt(24),
  "name": "Сеньковка",
  "phone_code": "4645"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425bd"),
  "id": NumberInt(1963),
  "region_id": NumberInt(10),
  "name": "Сеньковка",
  "phone_code": "4495"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425be"),
  "id": NumberInt(1964),
  "region_id": NumberInt(15),
  "name": "Сергеевка",
  "phone_code": "4849"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425bf"),
  "id": NumberInt(1965),
  "region_id": NumberInt(24),
  "name": "Серебряное",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425c0"),
  "id": NumberInt(1966),
  "region_id": NumberInt(18),
  "name": "Середина-Буда",
  "phone_code": "5451"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425c1"),
  "id": NumberInt(1967),
  "region_id": NumberInt(24),
  "name": "Серединка",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425c2"),
  "id": NumberInt(1968),
  "region_id": NumberInt(1),
  "name": "Симеиз",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425c3"),
  "id": NumberInt(1969),
  "region_id": NumberInt(7),
  "name": "Симерки",
  "phone_code": "3145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425c4"),
  "id": NumberInt(1970),
  "region_id": NumberInt(1),
  "name": "Симферополь",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425c5"),
  "id": NumberInt(1971),
  "region_id": NumberInt(6),
  "name": "Сингуры",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425c6"),
  "id": NumberInt(1972),
  "region_id": NumberInt(4),
  "name": "Синельниково",
  "phone_code": "5663"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425c7"),
  "id": NumberInt(1973),
  "region_id": NumberInt(10),
  "name": "Синяк",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425c8"),
  "id": NumberInt(1974),
  "region_id": NumberInt(2),
  "name": "Ситковцы",
  "phone_code": "4331"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425c9"),
  "id": NumberInt(1975),
  "region_id": NumberInt(10),
  "name": "Ситняки",
  "phone_code": "4478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425ca"),
  "id": NumberInt(1976),
  "region_id": NumberInt(21),
  "name": "Скадовск",
  "phone_code": "5537"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425cb"),
  "id": NumberInt(1977),
  "region_id": NumberInt(19),
  "name": "Скала-Подольская",
  "phone_code": "3541"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425cc"),
  "id": NumberInt(1978),
  "region_id": NumberInt(19),
  "name": "Скалат",
  "phone_code": "3543"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425cd"),
  "id": NumberInt(1979),
  "region_id": NumberInt(1),
  "name": "Скалистое",
  "phone_code": "6554"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425ce"),
  "id": NumberInt(1980),
  "region_id": NumberInt(10),
  "name": "Сквира",
  "phone_code": "4468"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425cf"),
  "id": NumberInt(1981),
  "region_id": NumberInt(1),
  "name": "Скворцово",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425d0"),
  "id": NumberInt(1982),
  "region_id": NumberInt(13),
  "name": "Сколе",
  "phone_code": "3251"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425d1"),
  "id": NumberInt(1983),
  "region_id": NumberInt(2),
  "name": "Скоморошки",
  "phone_code": "4330"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425d2"),
  "id": NumberInt(1984),
  "region_id": NumberInt(24),
  "name": "Слабин",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425d3"),
  "id": NumberInt(1985),
  "region_id": NumberInt(4),
  "name": "Славгород",
  "phone_code": "5663"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425d4"),
  "id": NumberInt(1986),
  "region_id": NumberInt(13),
  "name": "Славское",
  "phone_code": "3251"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425d5"),
  "id": NumberInt(1987),
  "region_id": NumberInt(22),
  "name": "Славута",
  "phone_code": "3842"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425d6"),
  "id": NumberInt(1988),
  "region_id": NumberInt(10),
  "name": "Славутич",
  "phone_code": "4479"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425d7"),
  "id": NumberInt(1989),
  "region_id": NumberInt(12),
  "name": "Славяносербск",
  "phone_code": "6473"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425d8"),
  "id": NumberInt(1990),
  "region_id": NumberInt(5),
  "name": "Славянск",
  "phone_code": "6262"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425d9"),
  "id": NumberInt(1991),
  "region_id": NumberInt(20),
  "name": "Слатино",
  "phone_code": "5763"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425da"),
  "id": NumberInt(1992),
  "region_id": NumberInt(14),
  "name": "Сливино",
  "phone_code": "512"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425db"),
  "id": NumberInt(1993),
  "region_id": NumberInt(18),
  "name": "Слобода",
  "phone_code": "5454"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425dc"),
  "id": NumberInt(1994),
  "region_id": NumberInt(18),
  "name": "Слобода",
  "phone_code": "5447"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425dd"),
  "id": NumberInt(1995),
  "region_id": NumberInt(6),
  "name": "Слободище",
  "phone_code": "4143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425de"),
  "id": NumberInt(1996),
  "region_id": NumberInt(19),
  "name": "Слободка",
  "phone_code": "3551"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425df"),
  "id": NumberInt(1997),
  "region_id": NumberInt(13),
  "name": "Слободка",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425e0"),
  "id": NumberInt(1998),
  "region_id": NumberInt(22),
  "name": "Слободка-гуменецкая",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425e1"),
  "id": NumberInt(1999),
  "region_id": NumberInt(22),
  "name": "Слободка-рыхтивская",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425e2"),
  "id": NumberInt(2000),
  "region_id": NumberInt(15),
  "name": "Словяносербка",
  "phone_code": "4859"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425e3"),
  "id": NumberInt(2001),
  "region_id": NumberInt(23),
  "name": "Смела",
  "phone_code": "4733"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425e4"),
  "id": NumberInt(2002),
  "region_id": NumberInt(18),
  "name": "Смелое",
  "phone_code": "5448"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425e5"),
  "id": NumberInt(2003),
  "region_id": NumberInt(9),
  "name": "Смодна",
  "phone_code": "3478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425e6"),
  "id": NumberInt(2004),
  "region_id": NumberInt(11),
  "name": "Смолино",
  "phone_code": "5258"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425e7"),
  "id": NumberInt(2005),
  "region_id": NumberInt(22),
  "name": "Смотрич",
  "phone_code": "4336"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425e8"),
  "id": NumberInt(2006),
  "region_id": NumberInt(17),
  "name": "Смыга",
  "phone_code": "3656"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425e9"),
  "id": NumberInt(2007),
  "region_id": NumberInt(19),
  "name": "Смыковцы",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425ea"),
  "id": NumberInt(2008),
  "region_id": NumberInt(5),
  "name": "Снежное",
  "phone_code": "6256"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425eb"),
  "id": NumberInt(2009),
  "region_id": NumberInt(14),
  "name": "Снигиревка",
  "phone_code": "5162"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425ec"),
  "id": NumberInt(2010),
  "region_id": NumberInt(9),
  "name": "Снятин",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425ed"),
  "id": NumberInt(2011),
  "region_id": NumberInt(9),
  "name": "Снятын",
  "phone_code": "3476"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425ee"),
  "id": NumberInt(2012),
  "region_id": NumberInt(18),
  "name": "Собич",
  "phone_code": "5449"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425ef"),
  "id": NumberInt(2013),
  "region_id": NumberInt(2),
  "name": "Соболевка",
  "phone_code": "4353"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425f0"),
  "id": NumberInt(2014),
  "region_id": NumberInt(1),
  "name": "Советский",
  "phone_code": "6551"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425f1"),
  "id": NumberInt(2015),
  "region_id": NumberInt(1),
  "name": "Советское",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425f2"),
  "id": NumberInt(2016),
  "region_id": NumberInt(11),
  "name": "Созоновка",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425f3"),
  "id": NumberInt(2017),
  "region_id": NumberInt(13),
  "name": "Сокаль",
  "phone_code": "3257"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425f4"),
  "id": NumberInt(2018),
  "region_id": NumberInt(2),
  "name": "Сокиринцы",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425f5"),
  "id": NumberInt(2019),
  "region_id": NumberInt(3),
  "name": "Сокиричи",
  "phone_code": "3365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425f6"),
  "id": NumberInt(2020),
  "region_id": NumberInt(7),
  "name": "Сокирница",
  "phone_code": "3142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425f7"),
  "id": NumberInt(2021),
  "region_id": NumberInt(25),
  "name": "Сокиряны",
  "phone_code": "3739"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425f8"),
  "id": NumberInt(2022),
  "region_id": NumberInt(2),
  "name": "Соколец",
  "phone_code": "4342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425f9"),
  "id": NumberInt(2023),
  "region_id": NumberInt(2),
  "name": "Соколовка",
  "phone_code": "4340"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425fa"),
  "id": NumberInt(2024),
  "region_id": NumberInt(11),
  "name": "Соколовское",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425fb"),
  "id": NumberInt(2025),
  "region_id": NumberInt(13),
  "name": "Сокольники",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425fc"),
  "id": NumberInt(2026),
  "region_id": NumberInt(5),
  "name": "Соледар",
  "phone_code": "6274"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425fd"),
  "id": NumberInt(2027),
  "region_id": NumberInt(4),
  "name": "Соленое",
  "phone_code": "5616"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425fe"),
  "id": NumberInt(2028),
  "region_id": NumberInt(8),
  "name": "Солнечное",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc425ff"),
  "id": NumberInt(2029),
  "region_id": NumberInt(18),
  "name": "Солнечное",
  "phone_code": "5446"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42600"),
  "id": NumberInt(2030),
  "region_id": NumberInt(7),
  "name": "Соломоново",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42601"),
  "id": NumberInt(2031),
  "region_id": NumberInt(17),
  "name": "Солонив",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42602"),
  "id": NumberInt(2032),
  "region_id": NumberInt(20),
  "name": "Солоницевка",
  "phone_code": "5763"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42603"),
  "id": NumberInt(2033),
  "region_id": NumberInt(13),
  "name": "Солонка",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42604"),
  "id": NumberInt(2034),
  "region_id": NumberInt(9),
  "name": "Солотвин",
  "phone_code": "3471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42605"),
  "id": NumberInt(2035),
  "region_id": NumberInt(7),
  "name": "Солотвино",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42606"),
  "id": NumberInt(2036),
  "region_id": NumberInt(1),
  "name": "Соляное",
  "phone_code": "6557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42607"),
  "id": NumberInt(2037),
  "region_id": NumberInt(9),
  "name": "Сопов",
  "phone_code": "3433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42608"),
  "id": NumberInt(2038),
  "region_id": NumberInt(24),
  "name": "Сосница",
  "phone_code": "4655"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42609"),
  "id": NumberInt(2039),
  "region_id": NumberInt(13),
  "name": "Сосновка",
  "phone_code": "3249"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4260a"),
  "id": NumberInt(2040),
  "region_id": NumberInt(2),
  "name": "Сосновка",
  "phone_code": "4344"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4260b"),
  "id": NumberInt(2041),
  "region_id": NumberInt(17),
  "name": "Сосновое",
  "phone_code": "3653"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4260c"),
  "id": NumberInt(2042),
  "region_id": NumberInt(20),
  "name": "Сосоновка",
  "phone_code": "5740"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4260d"),
  "id": NumberInt(2043),
  "region_id": NumberInt(4),
  "name": "Софиевка",
  "phone_code": "5650"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4260e"),
  "id": NumberInt(2044),
  "region_id": NumberInt(10),
  "name": "Софиевская Борщаговка",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4260f"),
  "id": NumberInt(2045),
  "region_id": NumberInt(12),
  "name": "Софиевский",
  "phone_code": "6432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42610"),
  "id": NumberInt(2046),
  "region_id": NumberInt(5),
  "name": "Спартак",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42611"),
  "id": NumberInt(2047),
  "region_id": NumberInt(7),
  "name": "Среднее",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42612"),
  "id": NumberInt(2048),
  "region_id": NumberInt(7),
  "name": "Среднее водяное",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42613"),
  "id": NumberInt(2049),
  "region_id": NumberInt(9),
  "name": "Средний бабин",
  "phone_code": "3472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42614"),
  "id": NumberInt(2050),
  "region_id": NumberInt(10),
  "name": "Ставище",
  "phone_code": "4464"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42615"),
  "id": NumberInt(2051),
  "region_id": NumberInt(10),
  "name": "Стайки",
  "phone_code": "4473"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42616"),
  "id": NumberInt(2052),
  "region_id": NumberInt(12),
  "name": "Станично-Луганское",
  "phone_code": "6472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42617"),
  "id": NumberInt(2053),
  "region_id": NumberInt(6),
  "name": "Станишовка",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42618"),
  "id": NumberInt(2054),
  "region_id": NumberInt(3),
  "name": "Старая Выжевка",
  "phone_code": "3346"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42619"),
  "id": NumberInt(2055),
  "region_id": NumberInt(21),
  "name": "Старая збурьевка",
  "phone_code": "5539"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4261a"),
  "id": NumberInt(2056),
  "region_id": NumberInt(18),
  "name": "Старая ивановка",
  "phone_code": "5446"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4261b"),
  "id": NumberInt(2057),
  "region_id": NumberInt(15),
  "name": "Старая некрасовка",
  "phone_code": "4841"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4261c"),
  "id": NumberInt(2058),
  "region_id": NumberInt(22),
  "name": "Старая Синява",
  "phone_code": "3850"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4261d"),
  "id": NumberInt(2059),
  "region_id": NumberInt(12),
  "name": "Старобельск",
  "phone_code": "6461"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4261e"),
  "id": NumberInt(2060),
  "region_id": NumberInt(5),
  "name": "Старобешево",
  "phone_code": "6253"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4261f"),
  "id": NumberInt(2061),
  "region_id": NumberInt(20),
  "name": "Староверовка",
  "phone_code": "5751"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42620"),
  "id": NumberInt(2062),
  "region_id": NumberInt(3),
  "name": "Старовойтовое",
  "phone_code": "3377"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42621"),
  "id": NumberInt(2063),
  "region_id": NumberInt(10),
  "name": "Старое",
  "phone_code": "4495"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42622"),
  "id": NumberInt(2064),
  "region_id": NumberInt(13),
  "name": "Старое село",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42623"),
  "id": NumberInt(2065),
  "region_id": NumberInt(22),
  "name": "Староконстантинов",
  "phone_code": "3854"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42624"),
  "id": NumberInt(2066),
  "region_id": NumberInt(5),
  "name": "Старомихайловка",
  "phone_code": "6212"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42625"),
  "id": NumberInt(2067),
  "region_id": NumberInt(3),
  "name": "Староселье",
  "phone_code": "3376"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42626"),
  "id": NumberInt(2068),
  "region_id": NumberInt(23),
  "name": "Старые бабаны",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42627"),
  "id": NumberInt(2069),
  "region_id": NumberInt(4),
  "name": "Старые кодаки",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42628"),
  "id": NumberInt(2070),
  "region_id": NumberInt(10),
  "name": "Старые петровцы",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42629"),
  "id": NumberInt(2071),
  "region_id": NumberInt(24),
  "name": "Старый белоус",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4262a"),
  "id": NumberInt(2072),
  "region_id": NumberInt(9),
  "name": "Старый косов",
  "phone_code": "3478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4262b"),
  "id": NumberInt(2073),
  "region_id": NumberInt(22),
  "name": "Старый кривин",
  "phone_code": "3842"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4262c"),
  "id": NumberInt(2074),
  "region_id": NumberInt(5),
  "name": "Старый крым",
  "phone_code": "629"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4262d"),
  "id": NumberInt(2075),
  "region_id": NumberInt(1),
  "name": "Старый Крым",
  "phone_code": "6555"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4262e"),
  "id": NumberInt(2076),
  "region_id": NumberInt(20),
  "name": "Старый Мерчик",
  "phone_code": "5753"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4262f"),
  "id": NumberInt(2077),
  "region_id": NumberInt(20),
  "name": "Старый Салтов",
  "phone_code": "5741"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42630"),
  "id": NumberInt(2078),
  "region_id": NumberInt(13),
  "name": "Старый Самбор",
  "phone_code": "3238"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42631"),
  "id": NumberInt(2079),
  "region_id": NumberInt(6),
  "name": "Старый солотвин",
  "phone_code": "4143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42632"),
  "id": NumberInt(2080),
  "region_id": NumberInt(13),
  "name": "Старый ярычев",
  "phone_code": "3254"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42633"),
  "id": NumberInt(2081),
  "region_id": NumberInt(12),
  "name": "Стаханов",
  "phone_code": "6444"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42634"),
  "id": NumberInt(2082),
  "region_id": NumberInt(23),
  "name": "Стеблев",
  "phone_code": "4735"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42635"),
  "id": NumberInt(2083),
  "region_id": NumberInt(7),
  "name": "Стеблевка",
  "phone_code": "3142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42636"),
  "id": NumberInt(2084),
  "region_id": NumberInt(13),
  "name": "Стебник",
  "phone_code": "3244"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42637"),
  "id": NumberInt(2085),
  "region_id": NumberInt(18),
  "name": "Степановка",
  "phone_code": "542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42638"),
  "id": NumberInt(2086),
  "region_id": NumberInt(21),
  "name": "Степановка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42639"),
  "id": NumberInt(2087),
  "region_id": NumberInt(17),
  "name": "Степань",
  "phone_code": "3655"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4263a"),
  "id": NumberInt(2088),
  "region_id": NumberInt(18),
  "name": "Стецковка",
  "phone_code": "542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4263b"),
  "id": NumberInt(2089),
  "region_id": NumberInt(5),
  "name": "Стожково",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4263c"),
  "id": NumberInt(2090),
  "region_id": NumberInt(9),
  "name": "Стопчатов",
  "phone_code": "3478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4263d"),
  "id": NumberInt(2091),
  "region_id": NumberInt(25),
  "name": "Сторожинец",
  "phone_code": "3735"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4263e"),
  "id": NumberInt(2092),
  "region_id": NumberInt(13),
  "name": "Сторонибабы",
  "phone_code": "3264"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4263f"),
  "id": NumberInt(2093),
  "region_id": NumberInt(10),
  "name": "Стоянка",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42640"),
  "id": NumberInt(2094),
  "region_id": NumberInt(7),
  "name": "Страбычово",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42641"),
  "id": NumberInt(2095),
  "region_id": NumberInt(13),
  "name": "Страдч",
  "phone_code": "3256"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42642"),
  "id": NumberInt(2096),
  "region_id": NumberInt(13),
  "name": "Страшевичи",
  "phone_code": "3238"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42643"),
  "id": NumberInt(2097),
  "region_id": NumberInt(22),
  "name": "Стриганы",
  "phone_code": "3842"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42644"),
  "id": NumberInt(2098),
  "region_id": NumberInt(2),
  "name": "Стрижавка",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42645"),
  "id": NumberInt(2099),
  "region_id": NumberInt(6),
  "name": "Стрижевка",
  "phone_code": "4130"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42646"),
  "id": NumberInt(2100),
  "region_id": NumberInt(25),
  "name": "Строинцы",
  "phone_code": "3733"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42647"),
  "id": NumberInt(2101),
  "region_id": NumberInt(22),
  "name": "Струга",
  "phone_code": "3847"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42648"),
  "id": NumberInt(2102),
  "region_id": NumberInt(3),
  "name": "Струмовка",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42649"),
  "id": NumberInt(2103),
  "region_id": NumberInt(19),
  "name": "Струсов",
  "phone_code": "3551"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4264a"),
  "id": NumberInt(2104),
  "region_id": NumberInt(13),
  "name": "Стрый",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4264b"),
  "id": NumberInt(2105),
  "region_id": NumberInt(2),
  "name": "Студеная",
  "phone_code": "4349"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4264c"),
  "id": NumberInt(2106),
  "region_id": NumberInt(19),
  "name": "Ступки",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4264d"),
  "id": NumberInt(2107),
  "region_id": NumberInt(22),
  "name": "Стуфчинцы",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4264e"),
  "id": NumberInt(2108),
  "region_id": NumberInt(11),
  "name": "Субботцы",
  "phone_code": "6556"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4264f"),
  "id": NumberInt(2109),
  "region_id": NumberInt(15),
  "name": "Суворово",
  "phone_code": "4841"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42650"),
  "id": NumberInt(2110),
  "region_id": NumberInt(1),
  "name": "Судак",
  "phone_code": "6566"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42651"),
  "id": NumberInt(2111),
  "region_id": NumberInt(22),
  "name": "Судилков",
  "phone_code": "3840"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42652"),
  "id": NumberInt(2112),
  "region_id": NumberInt(13),
  "name": "Судовая вишня",
  "phone_code": "3234"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42653"),
  "id": NumberInt(2113),
  "region_id": NumberInt(18),
  "name": "Сумы",
  "phone_code": "542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42654"),
  "id": NumberInt(2114),
  "region_id": NumberInt(4),
  "name": "Сурско-литовское",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42655"),
  "id": NumberInt(2115),
  "region_id": NumberInt(3),
  "name": "Суск",
  "phone_code": "3365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42656"),
  "id": NumberInt(2116),
  "region_id": NumberInt(6),
  "name": "Суслы",
  "phone_code": "4141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42657"),
  "id": NumberInt(2117),
  "region_id": NumberInt(2),
  "name": "Сутиски",
  "phone_code": "4355"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42658"),
  "id": NumberInt(2118),
  "region_id": NumberInt(12),
  "name": "Суходольск",
  "phone_code": "6435"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42659"),
  "id": NumberInt(2119),
  "region_id": NumberInt(23),
  "name": "Сушковка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4265a"),
  "id": NumberInt(2120),
  "region_id": NumberInt(13),
  "name": "Сходница",
  "phone_code": "3248"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4265b"),
  "id": NumberInt(2121),
  "region_id": NumberInt(11),
  "name": "Счастливое",
  "phone_code": "5235"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4265c"),
  "id": NumberInt(2122),
  "region_id": NumberInt(21),
  "name": "Счастливцево",
  "phone_code": "5534"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4265d"),
  "id": NumberInt(2123),
  "region_id": NumberInt(12),
  "name": "Счастье",
  "phone_code": "642"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4265e"),
  "id": NumberInt(2124),
  "region_id": NumberInt(15),
  "name": "Сычавка",
  "phone_code": "4855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4265f"),
  "id": NumberInt(2125),
  "region_id": NumberInt(7),
  "name": "Сюртэ",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42660"),
  "id": NumberInt(2126),
  "region_id": NumberInt(24),
  "name": "Сядрине",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42661"),
  "id": NumberInt(2127),
  "region_id": NumberInt(15),
  "name": "Табаки",
  "phone_code": "4846"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42662"),
  "id": NumberInt(2128),
  "region_id": NumberInt(21),
  "name": "Таврийск",
  "phone_code": "4332"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42663"),
  "id": NumberInt(2129),
  "region_id": NumberInt(21),
  "name": "Таврия",
  "phone_code": "5537"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42664"),
  "id": NumberInt(2130),
  "region_id": NumberInt(15),
  "name": "Таирово",
  "phone_code": "4851"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42665"),
  "id": NumberInt(2131),
  "region_id": NumberInt(24),
  "name": "Талалаевка",
  "phone_code": "4634"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42666"),
  "id": NumberInt(2132),
  "region_id": NumberInt(23),
  "name": "Тальное",
  "phone_code": "4731"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42667"),
  "id": NumberInt(2133),
  "region_id": NumberInt(1),
  "name": "Тамбовка",
  "phone_code": "6550"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42668"),
  "id": NumberInt(2134),
  "region_id": NumberInt(17),
  "name": "Тараканов",
  "phone_code": "3656"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42669"),
  "id": NumberInt(2135),
  "region_id": NumberInt(20),
  "name": "Тарановка",
  "phone_code": "5747"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4266a"),
  "id": NumberInt(2136),
  "region_id": NumberInt(10),
  "name": "Тарасовка",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4266b"),
  "id": NumberInt(2137),
  "region_id": NumberInt(3),
  "name": "Тарасово",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4266c"),
  "id": NumberInt(2138),
  "region_id": NumberInt(10),
  "name": "Тараща",
  "phone_code": "4466"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4266d"),
  "id": NumberInt(2139),
  "region_id": NumberInt(4),
  "name": "Таромское",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4266e"),
  "id": NumberInt(2140),
  "region_id": NumberInt(15),
  "name": "Тарутино",
  "phone_code": "4847"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4266f"),
  "id": NumberInt(2141),
  "region_id": NumberInt(15),
  "name": "Татарбунары",
  "phone_code": "4844"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42670"),
  "id": NumberInt(2142),
  "region_id": NumberInt(9),
  "name": "Татаров",
  "phone_code": "3434"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42671"),
  "id": NumberInt(2143),
  "region_id": NumberInt(5),
  "name": "Тельманово",
  "phone_code": "6279"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42672"),
  "id": NumberInt(2144),
  "region_id": NumberInt(22),
  "name": "Теофиполь",
  "phone_code": "3844"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42673"),
  "id": NumberInt(2145),
  "region_id": NumberInt(2),
  "name": "Теплик",
  "phone_code": "4353"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42674"),
  "id": NumberInt(2146),
  "region_id": NumberInt(8),
  "name": "Тепличное",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42675"),
  "id": NumberInt(2147),
  "region_id": NumberInt(4),
  "name": "Тепловка",
  "phone_code": "5617"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42676"),
  "id": NumberInt(2148),
  "region_id": NumberInt(12),
  "name": "Теплогорск",
  "phone_code": "6444"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42677"),
  "id": NumberInt(2149),
  "region_id": NumberInt(15),
  "name": "Теплодар",
  "phone_code": "482"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42678"),
  "id": NumberInt(2150),
  "region_id": NumberInt(19),
  "name": "Теребовля",
  "phone_code": "3551"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42679"),
  "id": NumberInt(2151),
  "region_id": NumberInt(10),
  "name": "Терезино",
  "phone_code": "4463"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4267a"),
  "id": NumberInt(2152),
  "region_id": NumberInt(7),
  "name": "Тересва",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4267b"),
  "id": NumberInt(2153),
  "region_id": NumberInt(16),
  "name": "Терешки",
  "phone_code": "5322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4267c"),
  "id": NumberInt(2154),
  "region_id": NumberInt(8),
  "name": "Терноватое",
  "phone_code": "6144"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4267d"),
  "id": NumberInt(2155),
  "region_id": NumberInt(4),
  "name": "Терновка",
  "phone_code": "05636"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4267e"),
  "id": NumberInt(2156),
  "region_id": NumberInt(7),
  "name": "Терново",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4267f"),
  "id": NumberInt(2157),
  "region_id": NumberInt(19),
  "name": "Тернополь",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42680"),
  "id": NumberInt(2158),
  "region_id": NumberInt(18),
  "name": "Терны",
  "phone_code": "5452"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42681"),
  "id": NumberInt(2159),
  "region_id": NumberInt(6),
  "name": "Тетеревка",
  "phone_code": "412"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42682"),
  "id": NumberInt(2160),
  "region_id": NumberInt(10),
  "name": "Тетиев",
  "phone_code": "4460"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42683"),
  "id": NumberInt(2161),
  "region_id": NumberInt(2),
  "name": "Тиврев",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42684"),
  "id": NumberInt(2162),
  "region_id": NumberInt(1),
  "name": "Тиловое",
  "phone_code": "692"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42685"),
  "id": NumberInt(2163),
  "region_id": NumberInt(9),
  "name": "Тисменница",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42686"),
  "id": NumberInt(2164),
  "region_id": NumberInt(2),
  "name": "Титусовка",
  "phone_code": "4342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42687"),
  "id": NumberInt(2165),
  "region_id": NumberInt(3),
  "name": "Тишковичи",
  "phone_code": "3372"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42688"),
  "id": NumberInt(2166),
  "region_id": NumberInt(9),
  "name": "Тлумач",
  "phone_code": "3479"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42689"),
  "id": NumberInt(2167),
  "region_id": NumberInt(8),
  "name": "Токмак",
  "phone_code": "6178"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4268a"),
  "id": NumberInt(2168),
  "region_id": NumberInt(4),
  "name": "Токмаковка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4268b"),
  "id": NumberInt(2169),
  "region_id": NumberInt(4),
  "name": "Токовское",
  "phone_code": "5656"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4268c"),
  "id": NumberInt(2170),
  "region_id": NumberInt(19),
  "name": "Толстое",
  "phone_code": "3554"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4268d"),
  "id": NumberInt(2171),
  "region_id": NumberInt(19),
  "name": "Толстолуг",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4268e"),
  "id": NumberInt(2172),
  "region_id": NumberInt(4),
  "name": "Томаковка",
  "phone_code": "5668"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4268f"),
  "id": NumberInt(2173),
  "region_id": NumberInt(17),
  "name": "Томашгород",
  "phone_code": "3635"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42690"),
  "id": NumberInt(2174),
  "region_id": NumberInt(18),
  "name": "Томашовка",
  "phone_code": "5452"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42691"),
  "id": NumberInt(2175),
  "region_id": NumberInt(2),
  "name": "Томашполь",
  "phone_code": "4348"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42692"),
  "id": NumberInt(2176),
  "region_id": NumberInt(6),
  "name": "Топильня",
  "phone_code": "4161"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42693"),
  "id": NumberInt(2177),
  "region_id": NumberInt(1),
  "name": "Топольное",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42694"),
  "id": NumberInt(2178),
  "region_id": NumberInt(25),
  "name": "Топоровцы",
  "phone_code": "3733"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42695"),
  "id": NumberInt(2179),
  "region_id": NumberInt(9),
  "name": "Торговица",
  "phone_code": "3430"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42696"),
  "id": NumberInt(2180),
  "region_id": NumberInt(9),
  "name": "Торговица",
  "phone_code": "3433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42697"),
  "id": NumberInt(2181),
  "region_id": NumberInt(5),
  "name": "Торез",
  "phone_code": "6254"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42698"),
  "id": NumberInt(2182),
  "region_id": NumberInt(19),
  "name": "Торское",
  "phone_code": "3554"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42699"),
  "id": NumberInt(2183),
  "region_id": NumberInt(3),
  "name": "Торчин",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4269a"),
  "id": NumberInt(2184),
  "region_id": NumberInt(12),
  "name": "Тошковка",
  "phone_code": "6455"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4269b"),
  "id": NumberInt(2185),
  "region_id": NumberInt(10),
  "name": "Требухов",
  "phone_code": "4494"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4269c"),
  "id": NumberInt(2186),
  "region_id": NumberInt(11),
  "name": "Треповка",
  "phone_code": "6556"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4269d"),
  "id": NumberInt(2187),
  "region_id": NumberInt(12),
  "name": "Троицкое",
  "phone_code": "6456"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4269e"),
  "id": NumberInt(2188),
  "region_id": NumberInt(18),
  "name": "Тростянец",
  "phone_code": "5458"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4269f"),
  "id": NumberInt(2189),
  "region_id": NumberInt(2),
  "name": "Тростянец",
  "phone_code": "4343"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426a0"),
  "id": NumberInt(2190),
  "region_id": NumberInt(13),
  "name": "Тростянец",
  "phone_code": "3241"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426a1"),
  "id": NumberInt(2191),
  "region_id": NumberInt(13),
  "name": "Трускавец",
  "phone_code": "3247"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426a2"),
  "id": NumberInt(2192),
  "region_id": NumberInt(9),
  "name": "Тужилов",
  "phone_code": "3472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426a3"),
  "id": NumberInt(2193),
  "region_id": NumberInt(2),
  "name": "Тульчин",
  "phone_code": "4335"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426a4"),
  "id": NumberInt(2194),
  "region_id": NumberInt(2),
  "name": "Турбов",
  "phone_code": "4358"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426a5"),
  "id": NumberInt(2195),
  "region_id": NumberInt(3),
  "name": "Турийск",
  "phone_code": "3363"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426a6"),
  "id": NumberInt(2196),
  "region_id": NumberInt(7),
  "name": "Турички",
  "phone_code": "3145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426a7"),
  "id": NumberInt(2197),
  "region_id": NumberInt(13),
  "name": "Турка",
  "phone_code": "3269"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426a8"),
  "id": NumberInt(2198),
  "region_id": NumberInt(9),
  "name": "Турка",
  "phone_code": "3433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426a9"),
  "id": NumberInt(2199),
  "region_id": NumberInt(7),
  "name": "Турьи реметы",
  "phone_code": "3145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426aa"),
  "id": NumberInt(2200),
  "region_id": NumberInt(2),
  "name": "Тывров",
  "phone_code": "4355"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426ab"),
  "id": NumberInt(2201),
  "region_id": NumberInt(9),
  "name": "Тысменица",
  "phone_code": "3436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426ac"),
  "id": NumberInt(2202),
  "region_id": NumberInt(2),
  "name": "Тютьки",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426ad"),
  "id": NumberInt(2203),
  "region_id": NumberInt(7),
  "name": "Тячев",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426ae"),
  "id": NumberInt(2204),
  "region_id": NumberInt(5),
  "name": "Углегорск",
  "phone_code": "6252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426af"),
  "id": NumberInt(2205),
  "region_id": NumberInt(5),
  "name": "Угледар",
  "phone_code": "6273"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426b0"),
  "id": NumberInt(2206),
  "region_id": NumberInt(7),
  "name": "Угля",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426b1"),
  "id": NumberInt(2207),
  "region_id": NumberInt(13),
  "name": "Угнев",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426b2"),
  "id": NumberInt(2208),
  "region_id": NumberInt(9),
  "name": "Угорники",
  "phone_code": "3422"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426b3"),
  "id": NumberInt(2209),
  "region_id": NumberInt(9),
  "name": "Угринов",
  "phone_code": "3422"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426b4"),
  "id": NumberInt(2210),
  "region_id": NumberInt(18),
  "name": "Угроеды",
  "phone_code": "5459"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426b5"),
  "id": NumberInt(2211),
  "region_id": NumberInt(5),
  "name": "Удачное",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426b6"),
  "id": NumberInt(2212),
  "region_id": NumberInt(2),
  "name": "Удич",
  "phone_code": "4353"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426b7"),
  "id": NumberInt(2213),
  "region_id": NumberInt(17),
  "name": "Удрицк",
  "phone_code": "3658"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426b8"),
  "id": NumberInt(2214),
  "region_id": NumberInt(7),
  "name": "Ужгород",
  "phone_code": "312"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426b9"),
  "id": NumberInt(2215),
  "region_id": NumberInt(10),
  "name": "Узин",
  "phone_code": "4463"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426ba"),
  "id": NumberInt(2216),
  "region_id": NumberInt(10),
  "name": "Украинка",
  "phone_code": "4472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426bb"),
  "id": NumberInt(2217),
  "region_id": NumberInt(5),
  "name": "Украинск",
  "phone_code": "6237"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426bc"),
  "id": NumberInt(2218),
  "region_id": NumberInt(1),
  "name": "Укромное",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426bd"),
  "id": NumberInt(2219),
  "region_id": NumberInt(2),
  "name": "Уладовка",
  "phone_code": "4347"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426be"),
  "id": NumberInt(2220),
  "region_id": NumberInt(2),
  "name": "Уланов",
  "phone_code": "43388"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426bf"),
  "id": NumberInt(2221),
  "region_id": NumberInt(22),
  "name": "Улашановка",
  "phone_code": "3842"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426c0"),
  "id": NumberInt(2222),
  "region_id": NumberInt(11),
  "name": "Ульяновка",
  "phone_code": "5259"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426c1"),
  "id": NumberInt(2223),
  "region_id": NumberInt(23),
  "name": "Умань",
  "phone_code": "4744"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426c2"),
  "id": NumberInt(2224),
  "region_id": NumberInt(15),
  "name": "Усатово",
  "phone_code": "4852"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426c3"),
  "id": NumberInt(2225),
  "region_id": NumberInt(12),
  "name": "Успенка",
  "phone_code": "6436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426c4"),
  "id": NumberInt(2226),
  "region_id": NumberInt(9),
  "name": "Устерики",
  "phone_code": "3432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426c5"),
  "id": NumberInt(2227),
  "region_id": NumberInt(16),
  "name": "Устивица",
  "phone_code": "5345"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426c6"),
  "id": NumberInt(2228),
  "region_id": NumberInt(3),
  "name": "Устилуг",
  "phone_code": "3342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426c7"),
  "id": NumberInt(2229),
  "region_id": NumberInt(10),
  "name": "Устимовка",
  "phone_code": "4471"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426c8"),
  "id": NumberInt(2230),
  "region_id": NumberInt(11),
  "name": "Устиновка",
  "phone_code": "5239"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426c9"),
  "id": NumberInt(2231),
  "region_id": NumberInt(7),
  "name": "Усть-Черна",
  "phone_code": "3134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426ca"),
  "id": NumberInt(2232),
  "region_id": NumberInt(20),
  "name": "Утковка",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426cb"),
  "id": NumberInt(2233),
  "region_id": NumberInt(6),
  "name": "Ушомир",
  "phone_code": "4142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426cc"),
  "id": NumberInt(2234),
  "region_id": NumberInt(7),
  "name": "Фанчиково",
  "phone_code": "3143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426cd"),
  "id": NumberInt(2235),
  "region_id": NumberInt(10),
  "name": "Фастов",
  "phone_code": "4465"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426ce"),
  "id": NumberInt(2236),
  "region_id": NumberInt(12),
  "name": "Фащевка",
  "phone_code": "6441"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426cf"),
  "id": NumberInt(2237),
  "region_id": NumberInt(3),
  "name": "Федоровка",
  "phone_code": "3342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426d0"),
  "id": NumberInt(2238),
  "region_id": NumberInt(1),
  "name": "Феодосия",
  "phone_code": "6562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426d1"),
  "id": NumberInt(2239),
  "region_id": NumberInt(15),
  "name": "Фонтанка",
  "phone_code": "4855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426d2"),
  "id": NumberInt(2240),
  "region_id": NumberInt(1),
  "name": "Фонтаны",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426d3"),
  "id": NumberInt(2241),
  "region_id": NumberInt(1),
  "name": "Форос",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426d4"),
  "id": NumberInt(2242),
  "region_id": NumberInt(21),
  "name": "Фрунзе",
  "phone_code": "5534"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426d5"),
  "id": NumberInt(2243),
  "region_id": NumberInt(12),
  "name": "Фрунзе",
  "phone_code": "6473"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426d6"),
  "id": NumberInt(2244),
  "region_id": NumberInt(15),
  "name": "Фрунзовка",
  "phone_code": "4860"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426d7"),
  "id": NumberInt(2245),
  "region_id": NumberInt(10),
  "name": "Фурсы",
  "phone_code": "4463"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426d8"),
  "id": NumberInt(2246),
  "region_id": NumberInt(16),
  "name": "Халтурино",
  "phone_code": "5346"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426d9"),
  "id": NumberInt(2247),
  "region_id": NumberInt(16),
  "name": "Халтурино",
  "phone_code": "5341"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426da"),
  "id": NumberInt(2248),
  "region_id": NumberInt(5),
  "name": "Харцызск",
  "phone_code": "6257"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426db"),
  "id": NumberInt(2249),
  "region_id": NumberInt(20),
  "name": "Харьков",
  "phone_code": "57"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426dc"),
  "id": NumberInt(2250),
  "region_id": NumberInt(11),
  "name": "Хащеватое",
  "phone_code": "6554"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426dd"),
  "id": NumberInt(2251),
  "region_id": NumberInt(4),
  "name": "Хащевое",
  "phone_code": "5612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426de"),
  "id": NumberInt(2252),
  "region_id": NumberInt(21),
  "name": "Херсон",
  "phone_code": "552"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426df"),
  "id": NumberInt(2253),
  "region_id": NumberInt(2),
  "name": "Хижинцы",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426e0"),
  "id": NumberInt(2254),
  "region_id": NumberInt(17),
  "name": "Хиночи",
  "phone_code": "3634"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426e1"),
  "id": NumberInt(2255),
  "region_id": NumberInt(13),
  "name": "Хирев",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426e2"),
  "id": NumberInt(2256),
  "region_id": NumberInt(13),
  "name": "Хишевичи",
  "phone_code": "3231"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426e3"),
  "id": NumberInt(2257),
  "region_id": NumberInt(15),
  "name": "Хлебодарское",
  "phone_code": "4852"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426e4"),
  "id": NumberInt(2258),
  "region_id": NumberInt(23),
  "name": "Хлыстуновка",
  "phone_code": "4734"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426e5"),
  "id": NumberInt(2259),
  "region_id": NumberInt(2),
  "name": "Хмельник",
  "phone_code": "43388"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426e6"),
  "id": NumberInt(2260),
  "region_id": NumberInt(22),
  "name": "Хмельницкий",
  "phone_code": "382"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426e7"),
  "id": NumberInt(2261),
  "region_id": NumberInt(6),
  "name": "Ходаки",
  "phone_code": "4142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426e8"),
  "id": NumberInt(2262),
  "region_id": NumberInt(13),
  "name": "Ходовичи",
  "phone_code": "3245"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426e9"),
  "id": NumberInt(2263),
  "region_id": NumberInt(13),
  "name": "Ходоров",
  "phone_code": "3239"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426ea"),
  "id": NumberInt(2264),
  "region_id": NumberInt(11),
  "name": "Ходоров",
  "phone_code": "5252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426eb"),
  "id": NumberInt(2265),
  "region_id": NumberInt(10),
  "name": "Ходосовка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426ec"),
  "id": NumberInt(2266),
  "region_id": NumberInt(15),
  "name": "Холодная балка",
  "phone_code": "4852"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426ed"),
  "id": NumberInt(2267),
  "region_id": NumberInt(13),
  "name": "Холодноводка",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426ee"),
  "id": NumberInt(2268),
  "region_id": NumberInt(23),
  "name": "Холоднянское",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426ef"),
  "id": NumberInt(2269),
  "region_id": NumberInt(16),
  "name": "Хорол",
  "phone_code": "5362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426f0"),
  "id": NumberInt(2270),
  "region_id": NumberInt(19),
  "name": "Хоростков",
  "phone_code": "3557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426f1"),
  "id": NumberInt(2271),
  "region_id": NumberInt(20),
  "name": "Хорошево",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426f2"),
  "id": NumberInt(2272),
  "region_id": NumberInt(18),
  "name": "Хотень",
  "phone_code": "542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426f3"),
  "id": NumberInt(2273),
  "region_id": NumberInt(25),
  "name": "Хотин",
  "phone_code": "37312"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426f4"),
  "id": NumberInt(2274),
  "region_id": NumberInt(10),
  "name": "Хотов",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426f5"),
  "id": NumberInt(2275),
  "region_id": NumberInt(23),
  "name": "Хрещатик",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426f6"),
  "id": NumberInt(2276),
  "region_id": NumberInt(9),
  "name": "Хриплин",
  "phone_code": "3422"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426f7"),
  "id": NumberInt(2277),
  "region_id": NumberInt(23),
  "name": "Христиновка",
  "phone_code": "4745"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426f8"),
  "id": NumberInt(2278),
  "region_id": NumberInt(4),
  "name": "Христофоровка",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426f9"),
  "id": NumberInt(2279),
  "region_id": NumberInt(12),
  "name": "Хрящеватое",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426fa"),
  "id": NumberInt(2280),
  "region_id": NumberInt(7),
  "name": "Хуст",
  "phone_code": "3142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426fb"),
  "id": NumberInt(2281),
  "region_id": NumberInt(9),
  "name": "Хутор-Будилов",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426fc"),
  "id": NumberInt(2282),
  "region_id": NumberInt(20),
  "name": "Царедаровка",
  "phone_code": "5745"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426fd"),
  "id": NumberInt(2283),
  "region_id": NumberInt(4),
  "name": "Царичанка",
  "phone_code": "5610"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426fe"),
  "id": NumberInt(2284),
  "region_id": NumberInt(23),
  "name": "Цибулев",
  "phone_code": "4746"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc426ff"),
  "id": NumberInt(2285),
  "region_id": NumberInt(11),
  "name": "Цибулево",
  "phone_code": "6556"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42700"),
  "id": NumberInt(2286),
  "region_id": NumberInt(9),
  "name": "Цинева",
  "phone_code": "3474"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42701"),
  "id": NumberInt(2287),
  "region_id": NumberInt(20),
  "name": "Циркуны",
  "phone_code": "572"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42702"),
  "id": NumberInt(2288),
  "region_id": NumberInt(5),
  "name": "Цукурино",
  "phone_code": "6237"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42703"),
  "id": NumberInt(2289),
  "region_id": NumberInt(3),
  "name": "Цумань",
  "phone_code": "3348"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42704"),
  "id": NumberInt(2290),
  "region_id": NumberInt(21),
  "name": "Цюрупинск",
  "phone_code": "5542"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42705"),
  "id": NumberInt(2291),
  "region_id": NumberInt(10),
  "name": "Чабаны",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42706"),
  "id": NumberInt(2292),
  "region_id": NumberInt(25),
  "name": "Чагор",
  "phone_code": "3734"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42707"),
  "id": NumberInt(2293),
  "region_id": NumberInt(1),
  "name": "Чайкино",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42708"),
  "id": NumberInt(2294),
  "region_id": NumberInt(23),
  "name": "Чапаевка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42709"),
  "id": NumberInt(2295),
  "region_id": NumberInt(20),
  "name": "Чапаево",
  "phone_code": "5755"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4270a"),
  "id": NumberInt(2296),
  "region_id": NumberInt(21),
  "name": "Чаплинка",
  "phone_code": "5538"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4270b"),
  "id": NumberInt(2297),
  "region_id": NumberInt(4),
  "name": "Чаплино",
  "phone_code": "93549"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4270c"),
  "id": NumberInt(2298),
  "region_id": NumberInt(3),
  "name": "Чаруков",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4270d"),
  "id": NumberInt(2299),
  "region_id": NumberInt(24),
  "name": "Часниковка",
  "phone_code": "4635"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4270e"),
  "id": NumberInt(2300),
  "region_id": NumberInt(5),
  "name": "Часов Яр",
  "phone_code": "6274"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4270f"),
  "id": NumberInt(2301),
  "region_id": NumberInt(3),
  "name": "Чемерин",
  "phone_code": "3365"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42710"),
  "id": NumberInt(2302),
  "region_id": NumberInt(2),
  "name": "Чемерисы-барские",
  "phone_code": "43410"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42711"),
  "id": NumberInt(2303),
  "region_id": NumberInt(22),
  "name": "Чемеровцы",
  "phone_code": "3859"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42712"),
  "id": NumberInt(2304),
  "region_id": NumberInt(22),
  "name": "Червоная Зирка",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42713"),
  "id": NumberInt(2305),
  "region_id": NumberInt(11),
  "name": "Червоная каменка",
  "phone_code": "5235"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42714"),
  "id": NumberInt(2306),
  "region_id": NumberInt(10),
  "name": "Червоная слобода",
  "phone_code": "4478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42715"),
  "id": NumberInt(2307),
  "region_id": NumberInt(23),
  "name": "Червоная слобода",
  "phone_code": "472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42716"),
  "id": NumberInt(2308),
  "region_id": NumberInt(5),
  "name": "Червоная украина",
  "phone_code": "6297"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42717"),
  "id": NumberInt(2309),
  "region_id": NumberInt(6),
  "name": "Червоноармейск",
  "phone_code": "4231"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42718"),
  "id": NumberInt(2310),
  "region_id": NumberInt(15),
  "name": "Червоноармейское",
  "phone_code": "4846"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42719"),
  "id": NumberInt(2311),
  "region_id": NumberInt(13),
  "name": "Червоноград",
  "phone_code": "3249"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4271a"),
  "id": NumberInt(2312),
  "region_id": NumberInt(6),
  "name": "Червоногранитное",
  "phone_code": "4145"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4271b"),
  "id": NumberInt(2313),
  "region_id": NumberInt(4),
  "name": "Червоногригоровка",
  "phone_code": "5662"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4271c"),
  "id": NumberInt(2314),
  "region_id": NumberInt(8),
  "name": "Червоноднепровка",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4271d"),
  "id": NumberInt(2315),
  "region_id": NumberInt(18),
  "name": "Червоное",
  "phone_code": "5444"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4271e"),
  "id": NumberInt(2316),
  "region_id": NumberInt(6),
  "name": "Червоное",
  "phone_code": "4136"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4271f"),
  "id": NumberInt(2317),
  "region_id": NumberInt(16),
  "name": "Червонозаводское",
  "phone_code": "5356"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42720"),
  "id": NumberInt(2318),
  "region_id": NumberInt(12),
  "name": "Червонопартизанск",
  "phone_code": "6434"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42721"),
  "id": NumberInt(2319),
  "region_id": NumberInt(4),
  "name": "Червоные поды",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42722"),
  "id": NumberInt(2320),
  "region_id": NumberInt(20),
  "name": "Червоный Донец",
  "phone_code": "5749"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42723"),
  "id": NumberInt(2321),
  "region_id": NumberInt(11),
  "name": "Червоный кут",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42724"),
  "id": NumberInt(2322),
  "region_id": NumberInt(20),
  "name": "Черкасская Лозовая",
  "phone_code": "5763"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42725"),
  "id": NumberInt(2323),
  "region_id": NumberInt(5),
  "name": "Черкасское",
  "phone_code": "6262"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42726"),
  "id": NumberInt(2324),
  "region_id": NumberInt(23),
  "name": "Черкассы",
  "phone_code": "472"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42727"),
  "id": NumberInt(2325),
  "region_id": NumberInt(13),
  "name": "Черляны",
  "phone_code": "3231"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42728"),
  "id": NumberInt(2326),
  "region_id": NumberInt(2),
  "name": "Черневцы",
  "phone_code": "4337"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42729"),
  "id": NumberInt(2327),
  "region_id": NumberInt(24),
  "name": "Чернигов",
  "phone_code": "462"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4272a"),
  "id": NumberInt(2328),
  "region_id": NumberInt(8),
  "name": "Черниговка",
  "phone_code": "6140"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4272b"),
  "id": NumberInt(2329),
  "region_id": NumberInt(23),
  "name": "Чернобай",
  "phone_code": "4739"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4272c"),
  "id": NumberInt(2330),
  "region_id": NumberInt(10),
  "name": "Чернобыль",
  "phone_code": "4493"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4272d"),
  "id": NumberInt(2331),
  "region_id": NumberInt(25),
  "name": "Черновцы",
  "phone_code": "372"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4272e"),
  "id": NumberInt(2332),
  "region_id": NumberInt(10),
  "name": "Черногородка",
  "phone_code": "0278"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4272f"),
  "id": NumberInt(2333),
  "region_id": NumberInt(2),
  "name": "Черномин",
  "phone_code": "4349"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42730"),
  "id": NumberInt(2334),
  "region_id": NumberInt(1),
  "name": "Черноморское",
  "phone_code": "6558"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42731"),
  "id": NumberInt(2335),
  "region_id": NumberInt(15),
  "name": "Черноморское",
  "phone_code": "4855"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42732"),
  "id": NumberInt(2336),
  "region_id": NumberInt(21),
  "name": "Черноморьевка",
  "phone_code": "5536"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42733"),
  "id": NumberInt(2337),
  "region_id": NumberInt(7),
  "name": "Чернотисов",
  "phone_code": "3143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42734"),
  "id": NumberInt(2338),
  "region_id": NumberInt(16),
  "name": "Чернухи",
  "phone_code": "5340"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42735"),
  "id": NumberInt(2339),
  "region_id": NumberInt(22),
  "name": "Черный остров",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42736"),
  "id": NumberInt(2340),
  "region_id": NumberInt(21),
  "name": "Чернянка",
  "phone_code": "5536"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42737"),
  "id": NumberInt(2341),
  "region_id": NumberInt(9),
  "name": "Чернятин",
  "phone_code": "3430"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42738"),
  "id": NumberInt(2342),
  "region_id": NumberInt(6),
  "name": "Черняхов",
  "phone_code": "4134"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42739"),
  "id": NumberInt(2343),
  "region_id": NumberInt(11),
  "name": "Черняховка",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4273a"),
  "id": NumberInt(2344),
  "region_id": NumberInt(25),
  "name": "Чертория",
  "phone_code": "3736"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4273b"),
  "id": NumberInt(2345),
  "region_id": NumberInt(16),
  "name": "Чечелево",
  "phone_code": "5366"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4273c"),
  "id": NumberInt(2346),
  "region_id": NumberInt(2),
  "name": "Чечельник",
  "phone_code": "4351"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4273d"),
  "id": NumberInt(2347),
  "region_id": NumberInt(23),
  "name": "Чигирин",
  "phone_code": "4730"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4273e"),
  "id": NumberInt(2348),
  "region_id": NumberInt(6),
  "name": "Чижовка",
  "phone_code": "4141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4273f"),
  "id": NumberInt(2349),
  "region_id": NumberInt(7),
  "name": "Чинадиево",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42740"),
  "id": NumberInt(2350),
  "region_id": NumberInt(1),
  "name": "Чистенькое",
  "phone_code": "652"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42741"),
  "id": NumberInt(2351),
  "region_id": NumberInt(1),
  "name": "Чистополье",
  "phone_code": "6557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42742"),
  "id": NumberInt(2352),
  "region_id": NumberInt(4),
  "name": "Чкаловка",
  "phone_code": "564"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42743"),
  "id": NumberInt(2353),
  "region_id": NumberInt(1),
  "name": "Чкалово",
  "phone_code": "6550"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42744"),
  "id": NumberInt(2354),
  "region_id": NumberInt(4),
  "name": "Чкалово",
  "phone_code": "5662"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42745"),
  "id": NumberInt(2355),
  "region_id": NumberInt(21),
  "name": "Чкалово",
  "phone_code": "5548"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42746"),
  "id": NumberInt(2356),
  "region_id": NumberInt(20),
  "name": "Чкаловское",
  "phone_code": "5746"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42747"),
  "id": NumberInt(2357),
  "region_id": NumberInt(12),
  "name": "Чмыровка",
  "phone_code": "6461"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42748"),
  "id": NumberInt(2358),
  "region_id": NumberInt(7),
  "name": "Чома",
  "phone_code": "3141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42749"),
  "id": NumberInt(2359),
  "region_id": NumberInt(7),
  "name": "Чоп",
  "phone_code": "3137"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4274a"),
  "id": NumberInt(2360),
  "region_id": NumberInt(6),
  "name": "Чоповичи",
  "phone_code": "4133"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4274b"),
  "id": NumberInt(2361),
  "region_id": NumberInt(19),
  "name": "Чортков",
  "phone_code": "3552"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4274c"),
  "id": NumberInt(2362),
  "region_id": NumberInt(10),
  "name": "Чубинское",
  "phone_code": "4495"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4274d"),
  "id": NumberInt(2363),
  "region_id": NumberInt(20),
  "name": "Чугуев",
  "phone_code": "5746"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4274e"),
  "id": NumberInt(2364),
  "region_id": NumberInt(6),
  "name": "Чуднов",
  "phone_code": "4139"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4274f"),
  "id": NumberInt(2365),
  "region_id": NumberInt(13),
  "name": "Чуква",
  "phone_code": "3236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42750"),
  "id": NumberInt(2366),
  "region_id": NumberInt(4),
  "name": "Чумаки",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42751"),
  "id": NumberInt(2367),
  "region_id": NumberInt(18),
  "name": "Чупаховка",
  "phone_code": "5446"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42752"),
  "id": NumberInt(2368),
  "region_id": NumberInt(16),
  "name": "Чутово",
  "phone_code": "5347"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42753"),
  "id": NumberInt(2369),
  "region_id": NumberInt(13),
  "name": "Шабельня",
  "phone_code": "3252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42754"),
  "id": NumberInt(2370),
  "region_id": NumberInt(15),
  "name": "Шабо",
  "phone_code": "4849"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42755"),
  "id": NumberInt(2371),
  "region_id": NumberInt(7),
  "name": "Шаланки",
  "phone_code": "3143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42756"),
  "id": NumberInt(2372),
  "region_id": NumberInt(18),
  "name": "Шалыгино",
  "phone_code": "5444"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42757"),
  "id": NumberInt(2373),
  "region_id": NumberInt(10),
  "name": "Шамраевка",
  "phone_code": "268"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42758"),
  "id": NumberInt(2374),
  "region_id": NumberInt(2),
  "name": "Шаргород",
  "phone_code": "4344"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42759"),
  "id": NumberInt(2375),
  "region_id": NumberInt(22),
  "name": "Шаровечка",
  "phone_code": "3822"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4275a"),
  "id": NumberInt(2376),
  "region_id": NumberInt(18),
  "name": "Шатрище",
  "phone_code": "05456"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4275b"),
  "id": NumberInt(2377),
  "region_id": NumberInt(6),
  "name": "Шахворостовка",
  "phone_code": "4130"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4275c"),
  "id": NumberInt(2378),
  "region_id": NumberInt(5),
  "name": "Шахтерск",
  "phone_code": "6255"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4275d"),
  "id": NumberInt(2379),
  "region_id": NumberInt(12),
  "name": "Шахтерское",
  "phone_code": "6434"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4275e"),
  "id": NumberInt(2380),
  "region_id": NumberInt(5),
  "name": "Шахтное",
  "phone_code": "6275"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4275f"),
  "id": NumberInt(2381),
  "region_id": NumberInt(3),
  "name": "Шацк",
  "phone_code": "3355"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42760"),
  "id": NumberInt(2382),
  "region_id": NumberInt(6),
  "name": "Швайковка",
  "phone_code": "4143"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42761"),
  "id": NumberInt(2383),
  "region_id": NumberInt(20),
  "name": "Шевченково",
  "phone_code": "5751"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42762"),
  "id": NumberInt(2384),
  "region_id": NumberInt(20),
  "name": "Шевченково",
  "phone_code": "5751"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42763"),
  "id": NumberInt(2385),
  "region_id": NumberInt(8),
  "name": "Шевченково",
  "phone_code": "6153"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42764"),
  "id": NumberInt(2386),
  "region_id": NumberInt(15),
  "name": "Шевченково",
  "phone_code": "4843"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42765"),
  "id": NumberInt(2387),
  "region_id": NumberInt(20),
  "name": "Шелестово",
  "phone_code": "5763"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42766"),
  "id": NumberInt(2388),
  "region_id": NumberInt(20),
  "name": "Шелудьковка",
  "phone_code": "5747"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42767"),
  "id": NumberInt(2389),
  "region_id": NumberInt(7),
  "name": "Шенборн",
  "phone_code": "3131"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42768"),
  "id": NumberInt(2390),
  "region_id": NumberInt(3),
  "name": "Шепель",
  "phone_code": "3322"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42769"),
  "id": NumberInt(2391),
  "region_id": NumberInt(22),
  "name": "Шепетовка",
  "phone_code": "3840"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4276a"),
  "id": NumberInt(2392),
  "region_id": NumberInt(11),
  "name": "Шестаковка",
  "phone_code": "6565"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4276b"),
  "id": NumberInt(2393),
  "region_id": NumberInt(24),
  "name": "Шестовица",
  "phone_code": "4622"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4276c"),
  "id": NumberInt(2394),
  "region_id": NumberInt(9),
  "name": "Шешоры",
  "phone_code": "3478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4276d"),
  "id": NumberInt(2395),
  "region_id": NumberInt(10),
  "name": "Шибене",
  "phone_code": "04477"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4276e"),
  "id": NumberInt(2396),
  "region_id": NumberInt(2),
  "name": "Широкая гребля",
  "phone_code": "4342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4276f"),
  "id": NumberInt(2397),
  "region_id": NumberInt(8),
  "name": "Широкое",
  "phone_code": "6136"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42770"),
  "id": NumberInt(2398),
  "region_id": NumberInt(4),
  "name": "Широкое",
  "phone_code": "5657"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42771"),
  "id": NumberInt(2399),
  "region_id": NumberInt(21),
  "name": "Широкое",
  "phone_code": "5537"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42772"),
  "id": NumberInt(2400),
  "region_id": NumberInt(8),
  "name": "Широкое",
  "phone_code": "612"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42773"),
  "id": NumberInt(2401),
  "region_id": NumberInt(15),
  "name": "Ширяево",
  "phone_code": "4858"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42774"),
  "id": NumberInt(2402),
  "region_id": NumberInt(16),
  "name": "Шишаки",
  "phone_code": "5352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42775"),
  "id": NumberInt(2403),
  "region_id": NumberInt(10),
  "name": "Шкаровка",
  "phone_code": "4463"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42776"),
  "id": NumberInt(2404),
  "region_id": NumberInt(13),
  "name": "Шкло",
  "phone_code": "3259"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42777"),
  "id": NumberInt(2405),
  "region_id": NumberInt(16),
  "name": "Шкурупиевка",
  "phone_code": "5363"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42778"),
  "id": NumberInt(2406),
  "region_id": NumberInt(19),
  "name": "Шляхтинцы",
  "phone_code": "352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42779"),
  "id": NumberInt(2407),
  "region_id": NumberInt(4),
  "name": "Шолохово",
  "phone_code": "5662"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4277a"),
  "id": NumberInt(2408),
  "region_id": NumberInt(18),
  "name": "Шостка",
  "phone_code": "5449"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4277b"),
  "id": NumberInt(2409),
  "region_id": NumberInt(17),
  "name": "Шпанов",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4277c"),
  "id": NumberInt(2410),
  "region_id": NumberInt(25),
  "name": "Шпетки",
  "phone_code": "3738"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4277d"),
  "id": NumberInt(2411),
  "region_id": NumberInt(2),
  "name": "Шпиков",
  "phone_code": "4335"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4277e"),
  "id": NumberInt(2412),
  "region_id": NumberInt(23),
  "name": "Шпола",
  "phone_code": "4741"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4277f"),
  "id": NumberInt(2413),
  "region_id": NumberInt(23),
  "name": "Шрамковка",
  "phone_code": "4738"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42780"),
  "id": NumberInt(2414),
  "region_id": NumberInt(17),
  "name": "Шубков",
  "phone_code": "362"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42781"),
  "id": NumberInt(2415),
  "region_id": NumberInt(19),
  "name": "Шумск",
  "phone_code": "3558"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42782"),
  "id": NumberInt(2416),
  "region_id": NumberInt(1),
  "name": "Щебетовка",
  "phone_code": "6566"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42783"),
  "id": NumberInt(2417),
  "region_id": NumberInt(1),
  "name": "Щелкино",
  "phone_code": "6557"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42784"),
  "id": NumberInt(2418),
  "region_id": NumberInt(16),
  "name": "Щербани",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42785"),
  "id": NumberInt(2419),
  "region_id": NumberInt(13),
  "name": "Щирец",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42786"),
  "id": NumberInt(2420),
  "region_id": NumberInt(24),
  "name": "Щорс",
  "phone_code": "4654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42787"),
  "id": NumberInt(2421),
  "region_id": NumberInt(6),
  "name": "Щорсовка",
  "phone_code": "4142"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42788"),
  "id": NumberInt(2422),
  "region_id": NumberInt(21),
  "name": "Щорсовка",
  "phone_code": "5534"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42789"),
  "id": NumberInt(2423),
  "region_id": NumberInt(8),
  "name": "Энергодар",
  "phone_code": "6139"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4278a"),
  "id": NumberInt(2424),
  "region_id": NumberInt(20),
  "name": "Эсхар",
  "phone_code": "5746"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4278b"),
  "id": NumberInt(2425),
  "region_id": NumberInt(4),
  "name": "Юбилейное",
  "phone_code": "562"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4278c"),
  "id": NumberInt(2426),
  "region_id": NumberInt(12),
  "name": "Юбилейное",
  "phone_code": "642"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4278d"),
  "id": NumberInt(2427),
  "region_id": NumberInt(12),
  "name": "Южная ломоватка",
  "phone_code": "6563"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4278e"),
  "id": NumberInt(2428),
  "region_id": NumberInt(14),
  "name": "Южноукраинск",
  "phone_code": "5136"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4278f"),
  "id": NumberInt(2429),
  "region_id": NumberInt(15),
  "name": "Южный",
  "phone_code": "4842"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42790"),
  "id": NumberInt(2430),
  "region_id": NumberInt(2),
  "name": "Юзефо-Николаевка",
  "phone_code": "4342"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42791"),
  "id": NumberInt(2431),
  "region_id": NumberInt(5),
  "name": "Юнокоммунаровск",
  "phone_code": "6252"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42792"),
  "id": NumberInt(2432),
  "region_id": NumberInt(22),
  "name": "Юркивцы с.",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42793"),
  "id": NumberInt(2433),
  "region_id": NumberInt(10),
  "name": "Юрковка",
  "phone_code": "4464"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42794"),
  "id": NumberInt(2434),
  "region_id": NumberInt(10),
  "name": "Юровка с.",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42795"),
  "id": NumberInt(2435),
  "region_id": NumberInt(5),
  "name": "Юрьевка",
  "phone_code": "6297"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42796"),
  "id": NumberInt(2436),
  "region_id": NumberInt(12),
  "name": "Юрьевка",
  "phone_code": "6436"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42797"),
  "id": NumberInt(2437),
  "region_id": NumberInt(4),
  "name": "Юрьевка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42798"),
  "id": NumberInt(2438),
  "region_id": NumberInt(6),
  "name": "Яблонец",
  "phone_code": "4149"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc42799"),
  "id": NumberInt(2439),
  "region_id": NumberInt(9),
  "name": "Яблоница",
  "phone_code": "3434"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4279a"),
  "id": NumberInt(2440),
  "region_id": NumberInt(9),
  "name": "Яблонов",
  "phone_code": "3478"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4279b"),
  "id": NumberInt(2441),
  "region_id": NumberInt(13),
  "name": "Яворов",
  "phone_code": "3259"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4279c"),
  "id": NumberInt(2442),
  "region_id": NumberInt(10),
  "name": "Яготин",
  "phone_code": "4475"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4279d"),
  "id": NumberInt(2443),
  "region_id": NumberInt(5),
  "name": "Яковлевка",
  "phone_code": ""
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4279e"),
  "id": NumberInt(2444),
  "region_id": NumberInt(2),
  "name": "Якушинцы",
  "phone_code": "432"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc4279f"),
  "id": NumberInt(2445),
  "region_id": NumberInt(1),
  "name": "Ялта",
  "phone_code": "654"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427a0"),
  "id": NumberInt(2446),
  "region_id": NumberInt(5),
  "name": "Ялта",
  "phone_code": "6297"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427a1"),
  "id": NumberInt(2447),
  "region_id": NumberInt(2),
  "name": "Ялтушков",
  "phone_code": "43410"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427a2"),
  "id": NumberInt(2448),
  "region_id": NumberInt(9),
  "name": "Ямница",
  "phone_code": "3422"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427a3"),
  "id": NumberInt(2449),
  "region_id": NumberInt(22),
  "name": "Ямполь",
  "phone_code": "3841"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427a4"),
  "id": NumberInt(2450),
  "region_id": NumberInt(18),
  "name": "Ямполь",
  "phone_code": "5456"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427a5"),
  "id": NumberInt(2451),
  "region_id": NumberInt(2),
  "name": "Ямполь",
  "phone_code": "4336"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427a6"),
  "id": NumberInt(2452),
  "region_id": NumberInt(13),
  "name": "Ямполь",
  "phone_code": "3230"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427a7"),
  "id": NumberInt(2453),
  "region_id": NumberInt(1),
  "name": "Янтарное",
  "phone_code": "6556"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427a8"),
  "id": NumberInt(2454),
  "region_id": NumberInt(9),
  "name": "Яремча",
  "phone_code": "3434"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427a9"),
  "id": NumberInt(2455),
  "region_id": NumberInt(16),
  "name": "Яреськи",
  "phone_code": "5352"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427aa"),
  "id": NumberInt(2456),
  "region_id": NumberInt(22),
  "name": "Ярмолинцы",
  "phone_code": "3853"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427ab"),
  "id": NumberInt(2457),
  "region_id": NumberInt(23),
  "name": "Ярославка",
  "phone_code": "4741"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427ac"),
  "id": NumberInt(2458),
  "region_id": NumberInt(23),
  "name": "Ярошевка",
  "phone_code": "4742"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427ad"),
  "id": NumberInt(2459),
  "region_id": NumberInt(6),
  "name": "Ярунь",
  "phone_code": "4141"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427ae"),
  "id": NumberInt(2460),
  "region_id": NumberInt(12),
  "name": "Ясеновский",
  "phone_code": "6433"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427af"),
  "id": NumberInt(2461),
  "region_id": NumberInt(13),
  "name": "Ясеновцы",
  "phone_code": "3265"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427b0"),
  "id": NumberInt(2462),
  "region_id": NumberInt(5),
  "name": "Ясиноватая",
  "phone_code": "6236"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427b1"),
  "id": NumberInt(2463),
  "region_id": NumberInt(7),
  "name": "Ясиня",
  "phone_code": "3122"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427b2"),
  "id": NumberInt(2464),
  "region_id": NumberInt(17),
  "name": "Ясногорка",
  "phone_code": "3655"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427b3"),
  "id": NumberInt(2465),
  "region_id": NumberInt(10),
  "name": "Ясногородка",
  "phone_code": "44"
});
db.getCollection("city").insert({
  "_id": ObjectId("54ff57a351884f15bcc427b4"),
  "id": NumberInt(2466),
  "region_id": NumberInt(1),
  "name": "Ясное",
  "phone_code": "6564"
});

/** makes records **/
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd523"),
  "name": "AM General",
  "niceName": "am-general",
  "years": [
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": NumberInt(200347864),
  "createdAt": ISODate("2015-03-15T08:41:45.91Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.91Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd524"),
  "name": "Acura",
  "niceName": "acura",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200002038),
  "createdAt": ISODate("2015-03-15T08:41:45.95Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.95Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd525"),
  "name": "Alfa Romeo",
  "niceName": "alfa-romeo",
  "years": [
    "2015"
  ],
  "edmundsId": NumberInt(200464140),
  "createdAt": ISODate("2015-03-15T08:41:45.96Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.96Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd526"),
  "name": "Aston Martin",
  "niceName": "aston-martin",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200001769),
  "createdAt": ISODate("2015-03-15T08:41:45.97Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.97Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd527"),
  "name": "Audi",
  "niceName": "audi",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200000001),
  "createdAt": ISODate("2015-03-15T08:41:45.98Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.98Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd528"),
  "name": "BMW",
  "niceName": "bmw",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200000081),
  "createdAt": ISODate("2015-03-15T08:41:45.100Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.100Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd529"),
  "name": "Bentley",
  "niceName": "bentley",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200005848),
  "createdAt": ISODate("2015-03-15T08:41:45.101Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.101Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd52a"),
  "name": "Bugatti",
  "niceName": "bugatti",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": NumberInt(200030397),
  "createdAt": ISODate("2015-03-15T08:41:45.102Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.102Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd52b"),
  "name": "Buick",
  "niceName": "buick",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200006659),
  "createdAt": ISODate("2015-03-15T08:41:45.103Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.103Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd52c"),
  "name": "Cadillac",
  "niceName": "cadillac",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200001663),
  "createdAt": ISODate("2015-03-15T08:41:45.104Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.104Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd52d"),
  "name": "Chevrolet",
  "niceName": "chevrolet",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200000404),
  "createdAt": ISODate("2015-03-15T08:41:45.108Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.108Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd52e"),
  "name": "Chrysler",
  "niceName": "chrysler",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2017"
  ],
  "edmundsId": NumberInt(200003644),
  "createdAt": ISODate("2015-03-15T08:41:45.109Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.109Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd52f"),
  "name": "Daewoo",
  "niceName": "daewoo",
  "years": [
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": NumberInt(200312185),
  "createdAt": ISODate("2015-03-15T08:41:45.111Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.111Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd530"),
  "name": "Dodge",
  "niceName": "dodge",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200009788),
  "createdAt": ISODate("2015-03-15T08:41:45.112Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.112Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd531"),
  "name": "Eagle",
  "niceName": "eagle",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998"
  ],
  "edmundsId": NumberInt(200347865),
  "createdAt": ISODate("2015-03-15T08:41:45.113Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.113Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd532"),
  "name": "FIAT",
  "niceName": "fiat",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200033022),
  "createdAt": ISODate("2015-03-15T08:41:45.114Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.114Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd533"),
  "name": "Ferrari",
  "niceName": "ferrari",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200006023),
  "createdAt": ISODate("2015-03-15T08:41:45.115Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.115Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd534"),
  "name": "Fisker",
  "niceName": "fisker",
  "years": [
    "2012"
  ],
  "edmundsId": NumberInt(200005745),
  "createdAt": ISODate("2015-03-15T08:41:45.116Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.116Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd535"),
  "name": "Ford",
  "niceName": "ford",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017"
  ],
  "edmundsId": NumberInt(200005143),
  "createdAt": ISODate("2015-03-15T08:41:45.125Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.125Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd536"),
  "name": "GMC",
  "niceName": "gmc",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200007302),
  "createdAt": ISODate("2015-03-15T08:41:45.137Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.137Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd537"),
  "name": "Geo",
  "niceName": "geo",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997"
  ],
  "edmundsId": NumberInt(200347866),
  "createdAt": ISODate("2015-03-15T08:41:45.140Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.140Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd538"),
  "name": "HUMMER",
  "niceName": "hummer",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": NumberInt(200004021),
  "createdAt": ISODate("2015-03-15T08:41:45.143Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.143Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd539"),
  "name": "Honda",
  "niceName": "honda",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200001444),
  "createdAt": ISODate("2015-03-15T08:41:45.144Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.144Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd53a"),
  "name": "Hyundai",
  "niceName": "hyundai",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200001398),
  "createdAt": ISODate("2015-03-15T08:41:45.146Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.146Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd53b"),
  "name": "Infiniti",
  "niceName": "infiniti",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017"
  ],
  "edmundsId": NumberInt(200000089),
  "createdAt": ISODate("2015-03-15T08:41:45.147Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.147Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd53c"),
  "name": "Isuzu",
  "niceName": "isuzu",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": NumberInt(200110731),
  "createdAt": ISODate("2015-03-15T08:41:45.147Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.147Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd53d"),
  "name": "Jaguar",
  "niceName": "jaguar",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017"
  ],
  "edmundsId": NumberInt(200003196),
  "createdAt": ISODate("2015-03-15T08:41:45.150Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.150Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd53e"),
  "name": "Jeep",
  "niceName": "jeep",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200001510),
  "createdAt": ISODate("2015-03-15T08:41:45.151Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.151Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd53f"),
  "name": "Kia",
  "niceName": "kia",
  "years": [
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200003063),
  "createdAt": ISODate("2015-03-15T08:41:45.152Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.152Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd540"),
  "name": "Lamborghini",
  "niceName": "lamborghini",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200005922),
  "createdAt": ISODate("2015-03-15T08:41:45.153Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.153Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd541"),
  "name": "Land Rover",
  "niceName": "land-rover",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200006582),
  "createdAt": ISODate("2015-03-15T08:41:45.153Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.153Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd542"),
  "name": "Lexus",
  "niceName": "lexus",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017"
  ],
  "edmundsId": NumberInt(200001623),
  "createdAt": ISODate("2015-03-15T08:41:45.154Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.154Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd543"),
  "name": "Lincoln",
  "niceName": "lincoln",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200001777),
  "createdAt": ISODate("2015-03-15T08:41:45.156Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.156Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd544"),
  "name": "Lotus",
  "niceName": "lotus",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2013"
  ],
  "edmundsId": NumberInt(200006242),
  "createdAt": ISODate("2015-03-15T08:41:45.157Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.157Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd545"),
  "name": "MINI",
  "niceName": "mini",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200002305),
  "createdAt": ISODate("2015-03-15T08:41:45.158Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.158Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd546"),
  "name": "Maserati",
  "niceName": "maserati",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200028029),
  "createdAt": ISODate("2015-03-15T08:41:45.159Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.159Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd547"),
  "name": "Maybach",
  "niceName": "maybach",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": NumberInt(200043087),
  "createdAt": ISODate("2015-03-15T08:41:45.159Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.159Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd548"),
  "name": "Mazda",
  "niceName": "mazda",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200004100),
  "createdAt": ISODate("2015-03-15T08:41:45.160Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.160Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd549"),
  "name": "McLaren",
  "niceName": "mclaren",
  "years": [
    "2012",
    "2013",
    "2015"
  ],
  "edmundsId": NumberInt(200051397),
  "createdAt": ISODate("2015-03-15T08:41:45.160Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.160Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd54a"),
  "name": "Mercedes-Benz",
  "niceName": "mercedes-benz",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200000130),
  "createdAt": ISODate("2015-03-15T08:41:45.161Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.161Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd54b"),
  "name": "Mercury",
  "niceName": "mercury",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": NumberInt(200007711),
  "createdAt": ISODate("2015-03-15T08:41:45.162Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.162Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd54c"),
  "name": "Mitsubishi",
  "niceName": "mitsubishi",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200002915),
  "createdAt": ISODate("2015-03-15T08:41:45.164Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.164Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd54d"),
  "name": "Nissan",
  "niceName": "nissan",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200000201),
  "createdAt": ISODate("2015-03-15T08:41:45.164Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.164Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd54e"),
  "name": "Oldsmobile",
  "niceName": "oldsmobile",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": NumberInt(200249342),
  "createdAt": ISODate("2015-03-15T08:41:45.165Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.165Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd54f"),
  "name": "Panoz",
  "niceName": "panoz",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": NumberInt(200194838),
  "createdAt": ISODate("2015-03-15T08:41:45.166Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.166Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd550"),
  "name": "Plymouth",
  "niceName": "plymouth",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001"
  ],
  "edmundsId": NumberInt(200339126),
  "createdAt": ISODate("2015-03-15T08:41:45.167Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.167Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd551"),
  "name": "Pontiac",
  "niceName": "pontiac",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": NumberInt(200002634),
  "createdAt": ISODate("2015-03-15T08:41:45.171Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.171Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd552"),
  "name": "Porsche",
  "niceName": "porsche",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200000886),
  "createdAt": ISODate("2015-03-15T08:41:45.172Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.172Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd553"),
  "name": "Ram",
  "niceName": "ram",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200393150),
  "createdAt": ISODate("2015-03-15T08:41:45.173Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.173Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd554"),
  "name": "Rolls-Royce",
  "niceName": "rolls-royce",
  "years": [
    "2001",
    "2002",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200005044),
  "createdAt": ISODate("2015-03-15T08:41:45.176Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.176Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd555"),
  "name": "Saab",
  "niceName": "saab",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": NumberInt(200074504),
  "createdAt": ISODate("2015-03-15T08:41:45.177Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.177Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd556"),
  "name": "Saturn",
  "niceName": "saturn",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": NumberInt(200004446),
  "createdAt": ISODate("2015-03-15T08:41:45.178Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.178Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd557"),
  "name": "Scion",
  "niceName": "scion",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200006515),
  "createdAt": ISODate("2015-03-15T08:41:45.178Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.178Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd558"),
  "name": "Spyker",
  "niceName": "spyker",
  "years": [
    "2009"
  ],
  "edmundsId": NumberInt(200046567),
  "createdAt": ISODate("2015-03-15T08:41:45.179Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.179Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd559"),
  "name": "Subaru",
  "niceName": "subaru",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200004491),
  "createdAt": ISODate("2015-03-15T08:41:45.180Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.180Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd55a"),
  "name": "Suzuki",
  "niceName": "suzuki",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": NumberInt(200001853),
  "createdAt": ISODate("2015-03-15T08:41:45.181Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.181Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd55b"),
  "name": "Tesla",
  "niceName": "tesla",
  "years": [
    "2008",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200018920),
  "createdAt": ISODate("2015-03-15T08:41:45.182Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.182Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd55c"),
  "name": "Toyota",
  "niceName": "toyota",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200003381),
  "createdAt": ISODate("2015-03-15T08:41:45.183Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.183Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd55d"),
  "name": "Volkswagen",
  "niceName": "volkswagen",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017"
  ],
  "edmundsId": NumberInt(200000238),
  "createdAt": ISODate("2015-03-15T08:41:45.184Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.184Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd55e"),
  "name": "Volvo",
  "niceName": "volvo",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200010382),
  "createdAt": ISODate("2015-03-15T08:41:45.185Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.185Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550545c9bddac9101f1bd55f"),
  "name": "smart",
  "niceName": "smart",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200038885),
  "createdAt": ISODate("2015-03-15T08:41:45.186Z"),
  "updatedAt": ISODate("2015-03-15T08:41:45.186Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054642bddac9101f1bd560"),
  "name": "AM General",
  "niceName": "am-general",
  "years": [
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": NumberInt(200347864),
  "createdAt": ISODate("2015-03-15T08:43:46.971Z"),
  "updatedAt": ISODate("2015-03-15T08:43:46.971Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054642bddac9101f1bd561"),
  "name": "Acura",
  "niceName": "acura",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200002038),
  "createdAt": ISODate("2015-03-15T08:43:46.986Z"),
  "updatedAt": ISODate("2015-03-15T08:43:46.986Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054642bddac9101f1bd562"),
  "name": "Alfa Romeo",
  "niceName": "alfa-romeo",
  "years": [
    "2015"
  ],
  "edmundsId": NumberInt(200464140),
  "createdAt": ISODate("2015-03-15T08:43:46.994Z"),
  "updatedAt": ISODate("2015-03-15T08:43:46.994Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd563"),
  "name": "Aston Martin",
  "niceName": "aston-martin",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200001769),
  "createdAt": ISODate("2015-03-15T08:43:47.0Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.0Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd564"),
  "name": "Audi",
  "niceName": "audi",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200000001),
  "createdAt": ISODate("2015-03-15T08:43:47.7Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.7Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd565"),
  "name": "BMW",
  "niceName": "bmw",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200000081),
  "createdAt": ISODate("2015-03-15T08:43:47.11Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.11Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd566"),
  "name": "Bentley",
  "niceName": "bentley",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200005848),
  "createdAt": ISODate("2015-03-15T08:43:47.15Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.15Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd567"),
  "name": "Bugatti",
  "niceName": "bugatti",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": NumberInt(200030397),
  "createdAt": ISODate("2015-03-15T08:43:47.17Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.17Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd568"),
  "name": "Buick",
  "niceName": "buick",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200006659),
  "createdAt": ISODate("2015-03-15T08:43:47.18Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.18Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd569"),
  "name": "Cadillac",
  "niceName": "cadillac",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200001663),
  "createdAt": ISODate("2015-03-15T08:43:47.21Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.21Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd56a"),
  "name": "Chevrolet",
  "niceName": "chevrolet",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200000404),
  "createdAt": ISODate("2015-03-15T08:43:47.23Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.23Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd56b"),
  "name": "Chrysler",
  "niceName": "chrysler",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2017"
  ],
  "edmundsId": NumberInt(200003644),
  "createdAt": ISODate("2015-03-15T08:43:47.24Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.24Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd56c"),
  "name": "Daewoo",
  "niceName": "daewoo",
  "years": [
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": NumberInt(200312185),
  "createdAt": ISODate("2015-03-15T08:43:47.25Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.25Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd56d"),
  "name": "Dodge",
  "niceName": "dodge",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200009788),
  "createdAt": ISODate("2015-03-15T08:43:47.25Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.25Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd56e"),
  "name": "Eagle",
  "niceName": "eagle",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998"
  ],
  "edmundsId": NumberInt(200347865),
  "createdAt": ISODate("2015-03-15T08:43:47.26Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.26Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd56f"),
  "name": "FIAT",
  "niceName": "fiat",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200033022),
  "createdAt": ISODate("2015-03-15T08:43:47.27Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.27Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd570"),
  "name": "Ferrari",
  "niceName": "ferrari",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200006023),
  "createdAt": ISODate("2015-03-15T08:43:47.29Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.29Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd571"),
  "name": "Fisker",
  "niceName": "fisker",
  "years": [
    "2012"
  ],
  "edmundsId": NumberInt(200005745),
  "createdAt": ISODate("2015-03-15T08:43:47.29Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.29Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd572"),
  "name": "Ford",
  "niceName": "ford",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017"
  ],
  "edmundsId": NumberInt(200005143),
  "createdAt": ISODate("2015-03-15T08:43:47.30Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.30Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd573"),
  "name": "GMC",
  "niceName": "gmc",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200007302),
  "createdAt": ISODate("2015-03-15T08:43:47.31Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.31Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd574"),
  "name": "Geo",
  "niceName": "geo",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997"
  ],
  "edmundsId": NumberInt(200347866),
  "createdAt": ISODate("2015-03-15T08:43:47.31Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.31Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd575"),
  "name": "HUMMER",
  "niceName": "hummer",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": NumberInt(200004021),
  "createdAt": ISODate("2015-03-15T08:43:47.32Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.32Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd576"),
  "name": "Honda",
  "niceName": "honda",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200001444),
  "createdAt": ISODate("2015-03-15T08:43:47.32Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.32Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd577"),
  "name": "Hyundai",
  "niceName": "hyundai",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200001398),
  "createdAt": ISODate("2015-03-15T08:43:47.33Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.33Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd578"),
  "name": "Infiniti",
  "niceName": "infiniti",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017"
  ],
  "edmundsId": NumberInt(200000089),
  "createdAt": ISODate("2015-03-15T08:43:47.34Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.34Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd579"),
  "name": "Isuzu",
  "niceName": "isuzu",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": NumberInt(200110731),
  "createdAt": ISODate("2015-03-15T08:43:47.34Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.34Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd57a"),
  "name": "Jaguar",
  "niceName": "jaguar",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017"
  ],
  "edmundsId": NumberInt(200003196),
  "createdAt": ISODate("2015-03-15T08:43:47.35Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.35Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd57b"),
  "name": "Jeep",
  "niceName": "jeep",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200001510),
  "createdAt": ISODate("2015-03-15T08:43:47.36Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.36Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd57c"),
  "name": "Kia",
  "niceName": "kia",
  "years": [
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200003063),
  "createdAt": ISODate("2015-03-15T08:43:47.41Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.41Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd584"),
  "name": "Maybach",
  "niceName": "maybach",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": NumberInt(200043087),
  "createdAt": ISODate("2015-03-15T08:43:47.51Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.51Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd57d"),
  "name": "Lamborghini",
  "niceName": "lamborghini",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200005922),
  "createdAt": ISODate("2015-03-15T08:43:47.43Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.43Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd57e"),
  "name": "Land Rover",
  "niceName": "land-rover",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200006582),
  "createdAt": ISODate("2015-03-15T08:43:47.44Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.44Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd57f"),
  "name": "Lexus",
  "niceName": "lexus",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017"
  ],
  "edmundsId": NumberInt(200001623),
  "createdAt": ISODate("2015-03-15T08:43:47.47Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.47Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd580"),
  "name": "Lincoln",
  "niceName": "lincoln",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200001777),
  "createdAt": ISODate("2015-03-15T08:43:47.48Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.48Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd581"),
  "name": "Lotus",
  "niceName": "lotus",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2013"
  ],
  "edmundsId": NumberInt(200006242),
  "createdAt": ISODate("2015-03-15T08:43:47.49Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.49Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd582"),
  "name": "MINI",
  "niceName": "mini",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200002305),
  "createdAt": ISODate("2015-03-15T08:43:47.50Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.50Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd583"),
  "name": "Maserati",
  "niceName": "maserati",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200028029),
  "createdAt": ISODate("2015-03-15T08:43:47.50Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.50Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd585"),
  "name": "Mazda",
  "niceName": "mazda",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200004100),
  "createdAt": ISODate("2015-03-15T08:43:47.56Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.56Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd586"),
  "name": "McLaren",
  "niceName": "mclaren",
  "years": [
    "2012",
    "2013",
    "2015"
  ],
  "edmundsId": NumberInt(200051397),
  "createdAt": ISODate("2015-03-15T08:43:47.58Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.58Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd587"),
  "name": "Mercedes-Benz",
  "niceName": "mercedes-benz",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200000130),
  "createdAt": ISODate("2015-03-15T08:43:47.59Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.59Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd588"),
  "name": "Mercury",
  "niceName": "mercury",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": NumberInt(200007711),
  "createdAt": ISODate("2015-03-15T08:43:47.60Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.60Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd589"),
  "name": "Mitsubishi",
  "niceName": "mitsubishi",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200002915),
  "createdAt": ISODate("2015-03-15T08:43:47.61Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.61Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd58a"),
  "name": "Nissan",
  "niceName": "nissan",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200000201),
  "createdAt": ISODate("2015-03-15T08:43:47.62Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.62Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd58b"),
  "name": "Oldsmobile",
  "niceName": "oldsmobile",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": NumberInt(200249342),
  "createdAt": ISODate("2015-03-15T08:43:47.63Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.63Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd58c"),
  "name": "Panoz",
  "niceName": "panoz",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": NumberInt(200194838),
  "createdAt": ISODate("2015-03-15T08:43:47.64Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.64Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd58d"),
  "name": "Plymouth",
  "niceName": "plymouth",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001"
  ],
  "edmundsId": NumberInt(200339126),
  "createdAt": ISODate("2015-03-15T08:43:47.65Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.65Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd58e"),
  "name": "Pontiac",
  "niceName": "pontiac",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": NumberInt(200002634),
  "createdAt": ISODate("2015-03-15T08:43:47.66Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.66Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd58f"),
  "name": "Porsche",
  "niceName": "porsche",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200000886),
  "createdAt": ISODate("2015-03-15T08:43:47.71Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.71Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd590"),
  "name": "Ram",
  "niceName": "ram",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200393150),
  "createdAt": ISODate("2015-03-15T08:43:47.84Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.84Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd591"),
  "name": "Rolls-Royce",
  "niceName": "rolls-royce",
  "years": [
    "2001",
    "2002",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200005044),
  "createdAt": ISODate("2015-03-15T08:43:47.94Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.95Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd592"),
  "name": "Saab",
  "niceName": "saab",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": NumberInt(200074504),
  "createdAt": ISODate("2015-03-15T08:43:47.97Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.97Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd593"),
  "name": "Saturn",
  "niceName": "saturn",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": NumberInt(200004446),
  "createdAt": ISODate("2015-03-15T08:43:47.98Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.98Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd594"),
  "name": "Scion",
  "niceName": "scion",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200006515),
  "createdAt": ISODate("2015-03-15T08:43:47.100Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.100Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd595"),
  "name": "Spyker",
  "niceName": "spyker",
  "years": [
    "2009"
  ],
  "edmundsId": NumberInt(200046567),
  "createdAt": ISODate("2015-03-15T08:43:47.103Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.103Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd596"),
  "name": "Subaru",
  "niceName": "subaru",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": NumberInt(200004491),
  "createdAt": ISODate("2015-03-15T08:43:47.104Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.104Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd597"),
  "name": "Suzuki",
  "niceName": "suzuki",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": NumberInt(200001853),
  "createdAt": ISODate("2015-03-15T08:43:47.105Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.105Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd598"),
  "name": "Tesla",
  "niceName": "tesla",
  "years": [
    "2008",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200018920),
  "createdAt": ISODate("2015-03-15T08:43:47.106Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.106Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd599"),
  "name": "Toyota",
  "niceName": "toyota",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200003381),
  "createdAt": ISODate("2015-03-15T08:43:47.107Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.107Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd59a"),
  "name": "Volkswagen",
  "niceName": "volkswagen",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017"
  ],
  "edmundsId": NumberInt(200000238),
  "createdAt": ISODate("2015-03-15T08:43:47.108Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.108Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd59b"),
  "name": "Volvo",
  "niceName": "volvo",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200010382),
  "createdAt": ISODate("2015-03-15T08:43:47.110Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.110Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("55054643bddac9101f1bd59c"),
  "name": "smart",
  "niceName": "smart",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": NumberInt(200038885),
  "createdAt": ISODate("2015-03-15T08:43:47.113Z"),
  "updatedAt": ISODate("2015-03-15T08:43:47.113Z")
});

/** models records **/
db.getCollection("models").insert({
  "_id": ObjectId("550560cf966eb45819ed5064"),
  "name": "fido",
  "make": ObjectId("550545c9bddac9101f1bd523"),
  "createdAt": ISODate("2015-03-15T10:37:03.994Z"),
  "updatedAt": ISODate("2015-03-15T10:37:03.994Z")
});

/** passport records **/
db.getCollection("passport").insert({
  "_id": ObjectId("54a71d3c7c94cecc0fbd37d0"),
  "protocol": "local",
  "password": "$2a$10$UGScyHmMhX4IU.tk1Gg.ruaKzJnnOVWVBTM5dbJAWSw2CzBpKyxMm",
  "user": ObjectId("54a71d3c7c94cecc0fbd37cf"),
  "createdAt": ISODate("2015-01-02T22:35:40.628Z"),
  "updatedAt": ISODate("2015-01-02T22:35:40.628Z")
});
db.getCollection("passport").insert({
  "_id": ObjectId("54a71dfeabbfb3001ec51e86"),
  "protocol": "local",
  "password": "$2a$10$I25VbHCoJlj.4.kAtuN93eVHpPGa3wBMubBDzr9xeI3zwnT7uCywK",
  "user": ObjectId("54a71dfdabbfb3001ec51e85"),
  "createdAt": ISODate("2015-01-02T22:38:54.251Z"),
  "updatedAt": ISODate("2015-01-02T22:38:54.251Z")
});

/** region records **/
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427b5"),
  "id": NumberInt(1),
  "name": "АР Крым"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427b6"),
  "id": NumberInt(2),
  "name": "Винницкая область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427b7"),
  "id": NumberInt(3),
  "name": "Волынская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427b8"),
  "id": NumberInt(4),
  "name": "Днепропетровская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427b9"),
  "id": NumberInt(5),
  "name": "Донецкая область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427ba"),
  "id": NumberInt(6),
  "name": "Житомирская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427bb"),
  "id": NumberInt(7),
  "name": "Закарпатская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427bc"),
  "id": NumberInt(8),
  "name": "Запорожская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427bd"),
  "id": NumberInt(9),
  "name": "Ивано-Франковская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427be"),
  "id": NumberInt(10),
  "name": "Киевская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427bf"),
  "id": NumberInt(11),
  "name": "Кировоградская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427c0"),
  "id": NumberInt(12),
  "name": "Луганская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427c1"),
  "id": NumberInt(13),
  "name": "Львовская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427c2"),
  "id": NumberInt(14),
  "name": "Николаевская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427c3"),
  "id": NumberInt(15),
  "name": "Одесская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427c4"),
  "id": NumberInt(16),
  "name": "Полтавская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427c5"),
  "id": NumberInt(17),
  "name": "Ровенская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427c6"),
  "id": NumberInt(18),
  "name": "Сумская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427c7"),
  "id": NumberInt(19),
  "name": "Тернопольская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427c8"),
  "id": NumberInt(20),
  "name": "Харьковская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427c9"),
  "id": NumberInt(21),
  "name": "Херсонская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427ca"),
  "id": NumberInt(22),
  "name": "Хмельницкая область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427cb"),
  "id": NumberInt(23),
  "name": "Черкасская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427cc"),
  "id": NumberInt(24),
  "name": "Черниговская область"
});
db.getCollection("region").insert({
  "_id": ObjectId("54ff57a351884f15bcc427cd"),
  "id": NumberInt(25),
  "name": "Черновицкая область"
});

/** styles records **/

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "car.city"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "car.region"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "car.makes"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "car.models"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "car.passport"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "car.styles"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "name": "_id_",
  "ns": "car.user"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "unique": true,
  "key": {
    "email": NumberInt(1)
  },
  "name": "email_1",
  "ns": "car.user",
  "sparse": true
});

/** user records **/
db.getCollection("user").insert({
  "_id": ObjectId("54a71d3c7c94cecc0fbd37cf"),
  "name": "Ihor Hayduk",
  "phone": "(093) 167-3185",
  "email": "cookkycok@gmail.com",
  "createdAt": ISODate("2015-01-02T22:35:40.260Z"),
  "updatedAt": ISODate("2015-03-10T20:21:25.731Z"),
  "avatar": "/avatars/BuC94_1426018524694.jpg",
  "city": "2",
  "job": "DreamScape"
});
db.getCollection("user").insert({
  "_id": ObjectId("54a71dfdabbfb3001ec51e85"),
  "name": "12142412",
  "phone": "(111) 111-1111",
  "email": "cookkycok2@gmail.com",
  "createdAt": ISODate("2015-01-02T22:38:53.905Z"),
  "updatedAt": ISODate("2015-01-02T22:38:53.905Z"),
  "avatar": "eeeee"
});
