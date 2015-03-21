
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
  "_id": ObjectId("550b28a0229533b02408404c"),
  "name": "AM General",
  "niceName": "am-general",
  "years": [
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": NumberInt(200347864),
  "createdAt": ISODate("2015-03-19T19:50:56.622Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.622Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408404d"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.625Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.625Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408404e"),
  "name": "Alfa Romeo",
  "niceName": "alfa-romeo",
  "years": [
    "2015"
  ],
  "edmundsId": NumberInt(200464140),
  "createdAt": ISODate("2015-03-19T19:50:56.627Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.627Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408404f"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.629Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.629Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084050"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.630Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.630Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084051"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.632Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.632Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084052"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.634Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.634Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084053"),
  "name": "Bugatti",
  "niceName": "bugatti",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": NumberInt(200030397),
  "createdAt": ISODate("2015-03-19T19:50:56.636Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.636Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084054"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.637Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.637Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084055"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.643Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.643Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084056"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.645Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.645Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084057"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.646Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.646Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084058"),
  "name": "Daewoo",
  "niceName": "daewoo",
  "years": [
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": NumberInt(200312185),
  "createdAt": ISODate("2015-03-19T19:50:56.648Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.648Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084059"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.649Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.649Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408405a"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.650Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.650Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408405b"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.654Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.654Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408405c"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.656Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.656Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408405d"),
  "name": "Fisker",
  "niceName": "fisker",
  "years": [
    "2012"
  ],
  "edmundsId": NumberInt(200005745),
  "createdAt": ISODate("2015-03-19T19:50:56.658Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.658Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408405e"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.660Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.660Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408405f"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.662Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.662Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084060"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.663Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.663Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084062"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.665Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.665Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084061"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.664Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.664Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084063"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.666Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.666Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084064"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.668Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.668Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084065"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.669Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.669Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084066"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.672Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.672Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084067"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.674Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.674Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084068"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.675Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.675Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084069"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.676Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.676Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408406a"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.678Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.678Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408406b"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.679Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.679Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408406c"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.680Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.680Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408406d"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.682Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.682Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408406e"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.684Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.684Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408406f"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.686Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.686Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084070"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.687Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.687Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084071"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.689Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.689Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084072"),
  "name": "McLaren",
  "niceName": "mclaren",
  "years": [
    "2012",
    "2013",
    "2015"
  ],
  "edmundsId": NumberInt(200051397),
  "createdAt": ISODate("2015-03-19T19:50:56.690Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.690Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084073"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.691Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.691Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084074"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.696Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.696Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084075"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.697Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.697Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084076"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.699Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.699Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084077"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.701Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.701Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084078"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.703Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.703Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084079"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.704Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.704Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408407a"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.705Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.705Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408407b"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.707Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.707Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408407c"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.708Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.708Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408407d"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.709Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.709Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408407e"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.710Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.710Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b02408407f"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.713Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.713Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084080"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.714Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.714Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084081"),
  "name": "Spyker",
  "niceName": "spyker",
  "years": [
    "2009"
  ],
  "edmundsId": NumberInt(200046567),
  "createdAt": ISODate("2015-03-19T19:50:56.715Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.715Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084082"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.716Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.716Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084083"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.717Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.717Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084084"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.718Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.718Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084085"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.719Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.719Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084086"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.720Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.720Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084087"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.721Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.721Z")
});
db.getCollection("makes").insert({
  "_id": ObjectId("550b28a0229533b024084088"),
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
  "createdAt": ISODate("2015-03-19T19:50:56.723Z"),
  "updatedAt": ISODate("2015-03-19T19:50:56.723Z")
});

/** models records **/
db.getCollection("models").insert({
  "_id": ObjectId("550b298a21fd96d81f85cfb1"),
  "name": "Hummer",
  "niceName": "hummer",
  "years": [
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "AM_General_Hummer",
  "make": ObjectId("550b28a0229533b02408404c"),
  "createdAt": ISODate("2015-03-19T19:54:50.195Z"),
  "updatedAt": ISODate("2015-03-19T19:54:50.195Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfbf"),
  "name": "CL",
  "niceName": "cl",
  "years": [
    "1997",
    "1998",
    "1999",
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Acura_CL",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.882Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.882Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfc0"),
  "name": "ILX",
  "niceName": "ilx",
  "years": [
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Acura_ILX",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.884Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.884Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfc1"),
  "name": "ILX Hybrid",
  "niceName": "ilx-hybrid",
  "years": [
    "2014"
  ],
  "edmundsId": "Acura_ILX_Hybrid",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.886Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.886Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfc2"),
  "name": "Integra",
  "niceName": "integra",
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
  "edmundsId": "Acura_Integra",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.887Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.887Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfc3"),
  "name": "Legend",
  "niceName": "legend",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Acura_Legend",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.888Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.888Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfc4"),
  "name": "MDX",
  "niceName": "mdx",
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
    "2015",
    "2016"
  ],
  "edmundsId": "Acura_MDX",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.889Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.889Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfc5"),
  "name": "NSX",
  "niceName": "nsx",
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
    "2016"
  ],
  "edmundsId": "Acura_NSX",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.890Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.890Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfc6"),
  "name": "RDX",
  "niceName": "rdx",
  "years": [
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
  "edmundsId": "Acura_RDX",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.891Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.891Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfc7"),
  "name": "RL",
  "niceName": "rl",
  "years": [
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
  "edmundsId": "Acura_RL",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.892Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.892Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfc8"),
  "name": "RLX",
  "niceName": "rlx",
  "years": [
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Acura_RLX",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.894Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.894Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfc9"),
  "name": "RSX",
  "niceName": "rsx",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Acura_RSX",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.895Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.895Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfca"),
  "name": "SLX",
  "niceName": "slx",
  "years": [
    "1996",
    "1997",
    "1998",
    "1999"
  ],
  "edmundsId": "Acura_SLX",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.897Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.897Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfcb"),
  "name": "TL",
  "niceName": "tl",
  "years": [
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
    "2014"
  ],
  "edmundsId": "Acura_TL",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.899Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.899Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfcc"),
  "name": "TLX",
  "niceName": "tlx",
  "years": [
    "2015"
  ],
  "edmundsId": "Acura_TLX",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.900Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.900Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfcd"),
  "name": "TSX",
  "niceName": "tsx",
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
    "2014"
  ],
  "edmundsId": "Acura_TSX",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.901Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.901Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfce"),
  "name": "TSX Sport Wagon",
  "niceName": "tsx-sport-wagon",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Acura_TSX_Sport_Wagon",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.902Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.902Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfcf"),
  "name": "Vigor",
  "niceName": "vigor",
  "years": [
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Acura_Vigor",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.904Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.904Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298c21fd96d81f85cfd0"),
  "name": "ZDX",
  "niceName": "zdx",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Acura_ZDX",
  "make": ObjectId("550b28a0229533b02408404d"),
  "createdAt": ISODate("2015-03-19T19:54:52.909Z"),
  "updatedAt": ISODate("2015-03-19T19:54:52.909Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b298e21fd96d81f85d221"),
  "name": "4C",
  "niceName": "4c",
  "years": [
    "2015"
  ],
  "edmundsId": "Alfa_Romeo_4C",
  "make": ObjectId("550b28a0229533b02408404e"),
  "createdAt": ISODate("2015-03-19T19:54:54.910Z"),
  "updatedAt": ISODate("2015-03-19T19:54:54.910Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299121fd96d81f85d224"),
  "name": "DB7",
  "niceName": "db7",
  "years": [
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Aston_Martin_DB7",
  "make": ObjectId("550b28a0229533b02408404f"),
  "createdAt": ISODate("2015-03-19T19:54:57.500Z"),
  "updatedAt": ISODate("2015-03-19T19:54:57.500Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299121fd96d81f85d225"),
  "name": "DB9",
  "niceName": "db9",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Aston_Martin_DB9",
  "make": ObjectId("550b28a0229533b02408404f"),
  "createdAt": ISODate("2015-03-19T19:54:57.510Z"),
  "updatedAt": ISODate("2015-03-19T19:54:57.510Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299121fd96d81f85d226"),
  "name": "DBS",
  "niceName": "dbs",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": "Aston_Martin_DBS",
  "make": ObjectId("550b28a0229533b02408404f"),
  "createdAt": ISODate("2015-03-19T19:54:57.520Z"),
  "updatedAt": ISODate("2015-03-19T19:54:57.520Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299121fd96d81f85d227"),
  "name": "Rapide",
  "niceName": "rapide",
  "years": [
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": "Aston_Martin_Rapide",
  "make": ObjectId("550b28a0229533b02408404f"),
  "createdAt": ISODate("2015-03-19T19:54:57.530Z"),
  "updatedAt": ISODate("2015-03-19T19:54:57.530Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299121fd96d81f85d228"),
  "name": "Rapide S",
  "niceName": "rapide-s",
  "years": [
    "2014"
  ],
  "edmundsId": "Aston_Martin_Rapide_S",
  "make": ObjectId("550b28a0229533b02408404f"),
  "createdAt": ISODate("2015-03-19T19:54:57.540Z"),
  "updatedAt": ISODate("2015-03-19T19:54:57.540Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299121fd96d81f85d229"),
  "name": "V12 Vanquish",
  "niceName": "v12-vanquish",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Aston_Martin_V12_Vanquish",
  "make": ObjectId("550b28a0229533b02408404f"),
  "createdAt": ISODate("2015-03-19T19:54:57.540Z"),
  "updatedAt": ISODate("2015-03-19T19:54:57.540Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299121fd96d81f85d22a"),
  "name": "V12 Vantage",
  "niceName": "v12-vantage",
  "years": [
    "2011",
    "2012"
  ],
  "edmundsId": "Aston_Martin_V12_Vantage",
  "make": ObjectId("550b28a0229533b02408404f"),
  "createdAt": ISODate("2015-03-19T19:54:57.550Z"),
  "updatedAt": ISODate("2015-03-19T19:54:57.550Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299121fd96d81f85d22b"),
  "name": "V12 Vantage S",
  "niceName": "v12-vantage-s",
  "years": [
    "2015"
  ],
  "edmundsId": "Aston_Martin_V12_Vantage_S",
  "make": ObjectId("550b28a0229533b02408404f"),
  "createdAt": ISODate("2015-03-19T19:54:57.550Z"),
  "updatedAt": ISODate("2015-03-19T19:54:57.550Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299121fd96d81f85d22c"),
  "name": "V8 Vantage",
  "niceName": "v8-vantage",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Aston_Martin_V8_Vantage",
  "make": ObjectId("550b28a0229533b02408404f"),
  "createdAt": ISODate("2015-03-19T19:54:57.560Z"),
  "updatedAt": ISODate("2015-03-19T19:54:57.560Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299121fd96d81f85d22d"),
  "name": "Vanquish",
  "niceName": "vanquish",
  "years": [
    "2014"
  ],
  "edmundsId": "Aston_Martin_Vanquish",
  "make": ObjectId("550b28a0229533b02408404f"),
  "createdAt": ISODate("2015-03-19T19:54:57.560Z"),
  "updatedAt": ISODate("2015-03-19T19:54:57.560Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299121fd96d81f85d22e"),
  "name": "Virage",
  "niceName": "virage",
  "years": [
    "2011",
    "2012"
  ],
  "edmundsId": "Aston_Martin_Virage",
  "make": ObjectId("550b28a0229533b02408404f"),
  "createdAt": ISODate("2015-03-19T19:54:57.560Z"),
  "updatedAt": ISODate("2015-03-19T19:54:57.560Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2c0"),
  "name": "100",
  "niceName": "100",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Audi_100",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.594Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.594Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2c1"),
  "name": "200",
  "niceName": "200",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Audi_200",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.594Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.594Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2c2"),
  "name": "80",
  "niceName": "80",
  "years": [
    "1990",
    "1991",
    "1992"
  ],
  "edmundsId": "Audi_80",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.595Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.595Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2c3"),
  "name": "90",
  "niceName": "90",
  "years": [
    "1990",
    "1991",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Audi_90",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.596Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.596Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2c4"),
  "name": "A3",
  "niceName": "a3",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2015",
    "2016"
  ],
  "edmundsId": "Audi_A3",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.597Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.597Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2c5"),
  "name": "A4",
  "niceName": "a4",
  "years": [
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
  "edmundsId": "Audi_A4",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.598Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.598Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2c6"),
  "name": "A5",
  "niceName": "a5",
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
  "edmundsId": "Audi_A5",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.598Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.598Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2c7"),
  "name": "A6",
  "niceName": "a6",
  "years": [
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
  "edmundsId": "Audi_A6",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.599Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.599Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2c8"),
  "name": "A7",
  "niceName": "a7",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Audi_A7",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.599Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.599Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2c9"),
  "name": "A8",
  "niceName": "a8",
  "years": [
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
  "edmundsId": "Audi_A8",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.600Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.600Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2ca"),
  "name": "Cabriolet",
  "niceName": "cabriolet",
  "years": [
    "1994",
    "1995",
    "1996",
    "1997",
    "1998"
  ],
  "edmundsId": "Audi_Cabriolet",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.600Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.600Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2cb"),
  "name": "Coupe",
  "niceName": "coupe",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Audi_Coupe",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.601Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.601Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2cc"),
  "name": "Q1",
  "niceName": "q1",
  "years": [
    "2016"
  ],
  "edmundsId": "Audi_Q1",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.601Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.601Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2cd"),
  "name": "Q3",
  "niceName": "q3",
  "years": [
    "2015"
  ],
  "edmundsId": "Audi_Q3",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.602Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.602Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2ce"),
  "name": "Q5",
  "niceName": "q5",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Audi_Q5",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.602Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.602Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2cf"),
  "name": "Q7",
  "niceName": "q7",
  "years": [
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
  "edmundsId": "Audi_Q7",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.603Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.603Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2d0"),
  "name": "Q7 e-tron",
  "niceName": "q7-e-tron",
  "years": [
    "2016"
  ],
  "edmundsId": "Audi_Q7_e_tron",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.603Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.603Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2d1"),
  "name": "R8",
  "niceName": "r8",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Audi_R8",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.604Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.604Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2d2"),
  "name": "RS 4",
  "niceName": "rs-4",
  "years": [
    "2007",
    "2008"
  ],
  "edmundsId": "Audi_RS_4",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.604Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.604Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2d3"),
  "name": "RS 5",
  "niceName": "rs-5",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Audi_RS_5",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.605Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.605Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2d4"),
  "name": "RS 6",
  "niceName": "rs-6",
  "years": [
    "2003"
  ],
  "edmundsId": "Audi_RS_6",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.605Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.605Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2d5"),
  "name": "RS 7",
  "niceName": "rs-7",
  "years": [
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Audi_RS_7",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.606Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.606Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2d6"),
  "name": "S3",
  "niceName": "s3",
  "years": [
    "2015"
  ],
  "edmundsId": "Audi_S3",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.606Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.606Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2d7"),
  "name": "S4",
  "niceName": "s4",
  "years": [
    "1992",
    "1993",
    "1994",
    "2000",
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
  "edmundsId": "Audi_S4",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.607Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.607Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2d8"),
  "name": "S5",
  "niceName": "s5",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Audi_S5",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.607Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.607Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2d9"),
  "name": "S6",
  "niceName": "s6",
  "years": [
    "1995",
    "2002",
    "2003",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Audi_S6",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.608Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.608Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2da"),
  "name": "S7",
  "niceName": "s7",
  "years": [
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Audi_S7",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.609Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.609Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2db"),
  "name": "S8",
  "niceName": "s8",
  "years": [
    "2001",
    "2002",
    "2003",
    "2007",
    "2008",
    "2009",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Audi_S8",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.609Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.609Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2dc"),
  "name": "SQ5",
  "niceName": "sq5",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Audi_SQ5",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.610Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.610Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2dd"),
  "name": "TT",
  "niceName": "tt",
  "years": [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
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
  "edmundsId": "Audi_TT",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.610Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.610Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2de"),
  "name": "TT RS",
  "niceName": "tt-rs",
  "years": [
    "2012",
    "2013"
  ],
  "edmundsId": "Audi_TT_RS",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.611Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.611Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2df"),
  "name": "TTS",
  "niceName": "tts",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Audi_TTS",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.612Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.612Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2e0"),
  "name": "V8",
  "niceName": "v8",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Audi_V8",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.613Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.613Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2e1"),
  "name": "allroad",
  "niceName": "allroad",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Audi_allroad",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.613Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.613Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299421fd96d81f85d2e2"),
  "name": "allroad quattro",
  "niceName": "allroad-quattro",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005"
  ],
  "edmundsId": "Audi_allroad_quattro",
  "make": ObjectId("550b28a0229533b024084050"),
  "createdAt": ISODate("2015-03-19T19:55:00.614Z"),
  "updatedAt": ISODate("2015-03-19T19:55:00.614Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d66b"),
  "name": "1 Series",
  "niceName": "1-series",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "BMW_1_Series",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.606Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.606Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d66c"),
  "name": "1 Series M",
  "niceName": "1-series-m",
  "years": [
    "2011"
  ],
  "edmundsId": "BMW_1_Series_M",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.608Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.608Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d66d"),
  "name": "2 Series",
  "niceName": "2-series",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_2_Series",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.609Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.609Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d66e"),
  "name": "3 Series",
  "niceName": "3-series",
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
  "edmundsId": "BMW_3_Series",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.609Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.609Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d66f"),
  "name": "3 Series Gran Turismo",
  "niceName": "3-series-gran-turismo",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_3_Series_Gran_Turismo",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.610Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.610Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d670"),
  "name": "4 Series",
  "niceName": "4-series",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_4_Series",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.611Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.611Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d671"),
  "name": "4 Series Gran Coupe",
  "niceName": "4-series-gran-coupe",
  "years": [
    "2015"
  ],
  "edmundsId": "BMW_4_Series_Gran_Coupe",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.612Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.612Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d672"),
  "name": "5 Series",
  "niceName": "5-series",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
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
  "edmundsId": "BMW_5_Series",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.613Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.613Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d673"),
  "name": "5 Series Gran Turismo",
  "niceName": "5-series-gran-turismo",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_5_Series_Gran_Turismo",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.614Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.614Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d674"),
  "name": "6 Series",
  "niceName": "6-series",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_6_Series",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.615Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.615Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d675"),
  "name": "6 Series Gran Coupe",
  "niceName": "6-series-gran-coupe",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_6_Series_Gran_Coupe",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.616Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.616Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d676"),
  "name": "7 Series",
  "niceName": "7-series",
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
  "edmundsId": "BMW_7_Series",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.616Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.617Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d677"),
  "name": "8 Series",
  "niceName": "8-series",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997"
  ],
  "edmundsId": "BMW_8_Series",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.617Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.617Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d678"),
  "name": "ALPINA B6 Gran Coupe",
  "niceName": "alpina-b6-gran-coupe",
  "years": [
    "2015"
  ],
  "edmundsId": "BMW_ALPINA_B6_Gran_Coupe",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.618Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.618Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d679"),
  "name": "ALPINA B7",
  "niceName": "alpina-b7",
  "years": [
    "2007",
    "2008",
    "2011",
    "2012",
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_ALPINA_B7",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.619Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.619Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d67a"),
  "name": "ActiveHybrid 5",
  "niceName": "activehybrid-5",
  "years": [
    "2012",
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_ActiveHybrid_5",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.620Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.620Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d67b"),
  "name": "ActiveHybrid 7",
  "niceName": "activehybrid-7",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_ActiveHybrid_7",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.621Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.621Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d67c"),
  "name": "ActiveHybrid X6",
  "niceName": "activehybrid-x6",
  "years": [
    "2010",
    "2011"
  ],
  "edmundsId": "BMW_ActiveHybrid_X6",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.622Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.622Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d67d"),
  "name": "Alpina",
  "niceName": "alpina",
  "years": [
    "2003"
  ],
  "edmundsId": "BMW_Alpina",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.623Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.623Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d67e"),
  "name": "M",
  "niceName": "m",
  "years": [
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2006"
  ],
  "edmundsId": "BMW_M",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.624Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.624Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d67f"),
  "name": "M3",
  "niceName": "m3",
  "years": [
    "1990",
    "1991",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2015"
  ],
  "edmundsId": "BMW_M3",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.625Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.625Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d680"),
  "name": "M4",
  "niceName": "m4",
  "years": [
    "2015"
  ],
  "edmundsId": "BMW_M4",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.626Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.626Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d681"),
  "name": "M5",
  "niceName": "m5",
  "years": [
    "1991",
    "1992",
    "1993",
    "2000",
    "2001",
    "2002",
    "2003",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_M5",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.628Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.628Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d682"),
  "name": "M6",
  "niceName": "m6",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_M6",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.629Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.629Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d683"),
  "name": "M6 Gran Coupe",
  "niceName": "m6-gran-coupe",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_M6_Gran_Coupe",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.630Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.630Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d684"),
  "name": "X1",
  "niceName": "x1",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_X1",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.637Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.637Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d685"),
  "name": "X3",
  "niceName": "x3",
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
    "2015"
  ],
  "edmundsId": "BMW_X3",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.640Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.640Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d686"),
  "name": "X4",
  "niceName": "x4",
  "years": [
    "2015"
  ],
  "edmundsId": "BMW_X4",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.646Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.646Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d687"),
  "name": "X5",
  "niceName": "x5",
  "years": [
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
  "edmundsId": "BMW_X5",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.653Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.653Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d688"),
  "name": "X5 M",
  "niceName": "x5-m",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2015"
  ],
  "edmundsId": "BMW_X5_M",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.654Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.654Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d689"),
  "name": "X6",
  "niceName": "x6",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_X6",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.655Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.655Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d68a"),
  "name": "X6 M",
  "niceName": "x6-m",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_X6_M",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.656Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.656Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d68b"),
  "name": "X7",
  "niceName": "x7",
  "years": [
    "2016"
  ],
  "edmundsId": "BMW_X7",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.657Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.657Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d68c"),
  "name": "Z3",
  "niceName": "z3",
  "years": [
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "BMW_Z3",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.658Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.658Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d68d"),
  "name": "Z4",
  "niceName": "z4",
  "years": [
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
  "edmundsId": "BMW_Z4",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.658Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.658Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d68e"),
  "name": "Z4 M",
  "niceName": "z4-m",
  "years": [
    "2007",
    "2008"
  ],
  "edmundsId": "BMW_Z4_M",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.659Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.659Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d68f"),
  "name": "Z8",
  "niceName": "z8",
  "years": [
    "2000",
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "BMW_Z8",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.660Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.660Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d690"),
  "name": "i3",
  "niceName": "i3",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_i3",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.661Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.661Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299721fd96d81f85d691"),
  "name": "i8",
  "niceName": "i8",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "BMW_i8",
  "make": ObjectId("550b28a0229533b024084051"),
  "createdAt": ISODate("2015-03-19T19:55:03.662Z"),
  "updatedAt": ISODate("2015-03-19T19:55:03.662Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da3e"),
  "name": "Azure",
  "niceName": "azure",
  "years": [
    "2001",
    "2002",
    "2003",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Bentley_Azure",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.849Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.849Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da3f"),
  "name": "Azure T",
  "niceName": "azure-t",
  "years": [
    "2010"
  ],
  "edmundsId": "Bentley_Azure_T",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.850Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.850Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da3d"),
  "name": "Arnage",
  "niceName": "arnage",
  "years": [
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
  "edmundsId": "Bentley_Arnage",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.848Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.848Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da40"),
  "name": "Brooklands",
  "niceName": "brooklands",
  "years": [
    "2009",
    "2010"
  ],
  "edmundsId": "Bentley_Brooklands",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.851Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.851Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da41"),
  "name": "Continental",
  "niceName": "continental",
  "years": [
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Bentley_Continental",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.851Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.851Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da42"),
  "name": "Continental Flying Spur",
  "niceName": "continental-flying-spur",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Bentley_Continental_Flying_Spur",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.852Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.852Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da43"),
  "name": "Continental Flying Spur Speed",
  "niceName": "continental-flying-spur-speed",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Bentley_Continental_Flying_Spur_Speed",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.852Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.852Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da44"),
  "name": "Continental GT",
  "niceName": "continental-gt",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Bentley_Continental_GT",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.853Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.853Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da45"),
  "name": "Continental GT Speed",
  "niceName": "continental-gt-speed",
  "years": [
    "2008",
    "2009",
    "2010",
    "2013",
    "2014"
  ],
  "edmundsId": "Bentley_Continental_GT_Speed",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.854Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.854Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da46"),
  "name": "Continental GT Speed Convertible",
  "niceName": "continental-gt-speed-convertible",
  "years": [
    "2014"
  ],
  "edmundsId": "Bentley_Continental_GT_Speed_Convertible",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.854Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.854Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da47"),
  "name": "Continental GTC",
  "niceName": "continental-gtc",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Bentley_Continental_GTC",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.854Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.854Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da48"),
  "name": "Continental GTC Speed",
  "niceName": "continental-gtc-speed",
  "years": [
    "2010",
    "2011"
  ],
  "edmundsId": "Bentley_Continental_GTC_Speed",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.855Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.855Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da49"),
  "name": "Continental Supersports",
  "niceName": "continental-supersports",
  "years": [
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": "Bentley_Continental_Supersports",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.855Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.855Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da4a"),
  "name": "Continental Supersports Convertible",
  "niceName": "continental-supersports-convertible",
  "years": [
    "2011",
    "2012"
  ],
  "edmundsId": "Bentley_Continental_Supersports_Convertible",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.856Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.856Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da4b"),
  "name": "Flying Spur",
  "niceName": "flying-spur",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Bentley_Flying_Spur",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.856Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.856Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da4c"),
  "name": "Mulsanne",
  "niceName": "mulsanne",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Bentley_Mulsanne",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.857Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.857Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299921fd96d81f85da4d"),
  "name": "Supersports Convertible ISR",
  "niceName": "supersports-convertible-isr",
  "years": [
    "2013"
  ],
  "edmundsId": "Bentley_Supersports_Convertible_ISR",
  "make": ObjectId("550b28a0229533b024084052"),
  "createdAt": ISODate("2015-03-19T19:55:05.857Z"),
  "updatedAt": ISODate("2015-03-19T19:55:05.857Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299b21fd96d81f85dac2"),
  "name": "Veyron 16.4",
  "niceName": "veyron-164",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Bugatti_Veyron_16.4",
  "make": ObjectId("550b28a0229533b024084053"),
  "createdAt": ISODate("2015-03-19T19:55:07.863Z"),
  "updatedAt": ISODate("2015-03-19T19:55:07.863Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dac9"),
  "name": "Cascada",
  "niceName": "cascada",
  "years": [
    "2016"
  ],
  "edmundsId": "Buick_Cascada",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.794Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.794Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85daca"),
  "name": "Century",
  "niceName": "century",
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
    "2005"
  ],
  "edmundsId": "Buick_Century",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.795Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.795Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dacb"),
  "name": "Electra",
  "niceName": "electra",
  "years": [
    "1990"
  ],
  "edmundsId": "Buick_Electra",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.796Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.796Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dacc"),
  "name": "Enclave",
  "niceName": "enclave",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Buick_Enclave",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.803Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.803Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dacd"),
  "name": "Encore",
  "niceName": "encore",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Buick_Encore",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.804Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.804Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dace"),
  "name": "Envision",
  "niceName": "envision",
  "years": [
    "2016"
  ],
  "edmundsId": "Buick_Envision",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.804Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.804Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dacf"),
  "name": "Estate Wagon",
  "niceName": "estate-wagon",
  "years": [
    "1990"
  ],
  "edmundsId": "Buick_Estate_Wagon",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.805Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.805Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dad0"),
  "name": "LaCrosse",
  "niceName": "lacrosse",
  "years": [
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
  "edmundsId": "Buick_LaCrosse",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.805Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.805Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dad1"),
  "name": "LeSabre",
  "niceName": "lesabre",
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
    "2005"
  ],
  "edmundsId": "Buick_LeSabre",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.806Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.806Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dad2"),
  "name": "Lucerne",
  "niceName": "lucerne",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Buick_Lucerne",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.806Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.806Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dad3"),
  "name": "Park Avenue",
  "niceName": "park-avenue",
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
    "2005"
  ],
  "edmundsId": "Buick_Park_Avenue",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.807Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.807Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dad4"),
  "name": "Rainier",
  "niceName": "rainier",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Buick_Rainier",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.808Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.808Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dad5"),
  "name": "Reatta",
  "niceName": "reatta",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Buick_Reatta",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.808Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.808Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dad6"),
  "name": "Regal",
  "niceName": "regal",
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
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Buick_Regal",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.809Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.809Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dad7"),
  "name": "Rendezvous",
  "niceName": "rendezvous",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Buick_Rendezvous",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.810Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.810Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dad8"),
  "name": "Riviera",
  "niceName": "riviera",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999"
  ],
  "edmundsId": "Buick_Riviera",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.810Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.810Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dad9"),
  "name": "Roadmaster",
  "niceName": "roadmaster",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Buick_Roadmaster",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.811Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.811Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dada"),
  "name": "Skylark",
  "niceName": "skylark",
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
  "edmundsId": "Buick_Skylark",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.811Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.811Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dadb"),
  "name": "Terraza",
  "niceName": "terraza",
  "years": [
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Buick_Terraza",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.812Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.812Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b299e21fd96d81f85dadc"),
  "name": "Verano",
  "niceName": "verano",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Buick_Verano",
  "make": ObjectId("550b28a0229533b024084054"),
  "createdAt": ISODate("2015-03-19T19:55:10.812Z"),
  "updatedAt": ISODate("2015-03-19T19:55:10.812Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcc0"),
  "name": "ATS",
  "niceName": "ats",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Cadillac_ATS",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.564Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.564Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcc1"),
  "name": "ATS Coupe",
  "niceName": "ats-coupe",
  "years": [
    "2015"
  ],
  "edmundsId": "Cadillac_ATS_Coupe",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.565Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.565Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcc2"),
  "name": "ATS-V",
  "niceName": "ats-v",
  "years": [
    "2016"
  ],
  "edmundsId": "Cadillac_ATS_V",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.566Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.566Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcc3"),
  "name": "Allante",
  "niceName": "allante",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Cadillac_Allante",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.567Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.567Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcc4"),
  "name": "Brougham",
  "niceName": "brougham",
  "years": [
    "1990",
    "1991",
    "1992"
  ],
  "edmundsId": "Cadillac_Brougham",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.568Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.568Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcc5"),
  "name": "CT6",
  "niceName": "ct6",
  "years": [
    "2016"
  ],
  "edmundsId": "Cadillac_CT6",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.568Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.568Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcc6"),
  "name": "CTS",
  "niceName": "cts",
  "years": [
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
  "edmundsId": "Cadillac_CTS",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.569Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.569Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcc7"),
  "name": "CTS Coupe",
  "niceName": "cts-coupe",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Cadillac_CTS_Coupe",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.570Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.570Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcc8"),
  "name": "CTS Wagon",
  "niceName": "cts-wagon",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Cadillac_CTS_Wagon",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.570Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.570Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcc9"),
  "name": "CTS-V",
  "niceName": "cts-v",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2016"
  ],
  "edmundsId": "Cadillac_CTS_V",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.571Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.571Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcca"),
  "name": "CTS-V Coupe",
  "niceName": "cts-v-coupe",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Cadillac_CTS_V_Coupe",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.572Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.572Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dccb"),
  "name": "CTS-V Wagon",
  "niceName": "cts-v-wagon",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Cadillac_CTS_V_Wagon",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.572Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.572Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dccc"),
  "name": "Catera",
  "niceName": "catera",
  "years": [
    "1997",
    "1998",
    "1999",
    "2000",
    "2001"
  ],
  "edmundsId": "Cadillac_Catera",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.573Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.573Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dccd"),
  "name": "DTS",
  "niceName": "dts",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Cadillac_DTS",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.574Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.574Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcce"),
  "name": "DeVille",
  "niceName": "deville",
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
    "2005"
  ],
  "edmundsId": "Cadillac_DeVille",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.574Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.574Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dccf"),
  "name": "ELR",
  "niceName": "elr",
  "years": [
    "2014",
    "2016"
  ],
  "edmundsId": "Cadillac_ELR",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.576Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.576Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcd0"),
  "name": "Eldorado",
  "niceName": "eldorado",
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
    "2002"
  ],
  "edmundsId": "Cadillac_Eldorado",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.577Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.577Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcd1"),
  "name": "Escalade",
  "niceName": "escalade",
  "years": [
    "1999",
    "2000",
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
  "edmundsId": "Cadillac_Escalade",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.578Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.578Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcd2"),
  "name": "Escalade ESV",
  "niceName": "escalade-esv",
  "years": [
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
  "edmundsId": "Cadillac_Escalade_ESV",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.579Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.579Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcd3"),
  "name": "Escalade EXT",
  "niceName": "escalade-ext",
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
    "2013"
  ],
  "edmundsId": "Cadillac_Escalade_EXT",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.579Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.579Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcd4"),
  "name": "Escalade Hybrid",
  "niceName": "escalade-hybrid",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Cadillac_Escalade_Hybrid",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.580Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.580Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcd5"),
  "name": "Fleetwood",
  "niceName": "fleetwood",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Cadillac_Fleetwood",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.581Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.581Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcd6"),
  "name": "SRX",
  "niceName": "srx",
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
    "2015"
  ],
  "edmundsId": "Cadillac_SRX",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.581Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.581Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcd7"),
  "name": "STS",
  "niceName": "sts",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Cadillac_STS",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.582Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.582Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcd8"),
  "name": "STS-V",
  "niceName": "sts-v",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Cadillac_STS_V",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.583Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.583Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcd9"),
  "name": "Seville",
  "niceName": "seville",
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
  "edmundsId": "Cadillac_Seville",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.583Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.583Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcda"),
  "name": "Sixty Special",
  "niceName": "sixty-special",
  "years": [
    "1993"
  ],
  "edmundsId": "Cadillac_Sixty_Special",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.584Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.584Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcdb"),
  "name": "XLR",
  "niceName": "xlr",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Cadillac_XLR",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.584Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.584Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcdc"),
  "name": "XLR-V",
  "niceName": "xlr-v",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Cadillac_XLR_V",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.585Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.585Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a121fd96d81f85dcdd"),
  "name": "XTS",
  "niceName": "xts",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Cadillac_XTS",
  "make": ObjectId("550b28a0229533b024084055"),
  "createdAt": ISODate("2015-03-19T19:55:13.586Z"),
  "updatedAt": ISODate("2015-03-19T19:55:13.586Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85df98"),
  "name": "Astro",
  "niceName": "astro",
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
    "2005"
  ],
  "edmundsId": "Chevrolet_Astro",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.719Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.719Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85df99"),
  "name": "Astro Cargo",
  "niceName": "astro-cargo",
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
    "2005"
  ],
  "edmundsId": "Chevrolet_Astro_Cargo",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.720Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.720Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85df9a"),
  "name": "Avalanche",
  "niceName": "avalanche",
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
    "2012"
  ],
  "edmundsId": "Chevrolet_Avalanche",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.721Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.721Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85df9b"),
  "name": "Aveo",
  "niceName": "aveo",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Chevrolet_Aveo",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.721Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.721Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85df9c"),
  "name": "Beretta",
  "niceName": "beretta",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Chevrolet_Beretta",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.722Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.722Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85df9d"),
  "name": "Black Diamond Avalanche",
  "niceName": "black-diamond-avalanche",
  "years": [
    "2013"
  ],
  "edmundsId": "Chevrolet_Black_Diamond_Avalanche",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.723Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.723Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85df9e"),
  "name": "Blazer",
  "niceName": "blazer",
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
    "2005"
  ],
  "edmundsId": "Chevrolet_Blazer",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.723Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.723Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85df9f"),
  "name": "C/K 1500 Series",
  "niceName": "ck-1500-series",
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
    "1999"
  ],
  "edmundsId": "Chevrolet_C/K_1500_Series",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.724Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.724Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfa0"),
  "name": "C/K 2500 Series",
  "niceName": "ck-2500-series",
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
    "2000"
  ],
  "edmundsId": "Chevrolet_C/K_2500_Series",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.724Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.724Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfa1"),
  "name": "C/K 3500 Series",
  "niceName": "ck-3500-series",
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
    "2000"
  ],
  "edmundsId": "Chevrolet_C/K_3500_Series",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.725Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.725Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfa2"),
  "name": "Camaro",
  "niceName": "camaro",
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
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Chevrolet_Camaro",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.725Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.725Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfa3"),
  "name": "Caprice",
  "niceName": "caprice",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Chevrolet_Caprice",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.726Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.726Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfa4"),
  "name": "Captiva Sport",
  "niceName": "captiva-sport",
  "years": [
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Chevrolet_Captiva_Sport",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.726Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.726Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfa5"),
  "name": "Cavalier",
  "niceName": "cavalier",
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
    "2005"
  ],
  "edmundsId": "Chevrolet_Cavalier",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.727Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.727Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfa6"),
  "name": "Celebrity",
  "niceName": "celebrity",
  "years": [
    "1990"
  ],
  "edmundsId": "Chevrolet_Celebrity",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.727Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.727Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfa7"),
  "name": "Chevy Van",
  "niceName": "chevy-van",
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
  "edmundsId": "Chevrolet_Chevy_Van",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.728Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.728Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfa8"),
  "name": "Chevy Van Classic",
  "niceName": "chevy-van-classic",
  "years": [
    "1996"
  ],
  "edmundsId": "Chevrolet_Chevy_Van_Classic",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.728Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.728Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfa9"),
  "name": "City Express",
  "niceName": "city-express",
  "years": [
    "2015"
  ],
  "edmundsId": "Chevrolet_City_Express",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.729Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.729Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfaa"),
  "name": "Classic",
  "niceName": "classic",
  "years": [
    "2004",
    "2005"
  ],
  "edmundsId": "Chevrolet_Classic",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.731Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.731Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfab"),
  "name": "Cobalt",
  "niceName": "cobalt",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": "Chevrolet_Cobalt",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.732Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.732Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfac"),
  "name": "Colorado",
  "niceName": "colorado",
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
    "2015"
  ],
  "edmundsId": "Chevrolet_Colorado",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.733Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.733Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfad"),
  "name": "Corsica",
  "niceName": "corsica",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Chevrolet_Corsica",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.748Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.748Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfae"),
  "name": "Corvette",
  "niceName": "corvette",
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
    "2015"
  ],
  "edmundsId": "Chevrolet_Corvette",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.749Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.749Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfaf"),
  "name": "Corvette Stingray",
  "niceName": "corvette-stingray",
  "years": [
    "2014"
  ],
  "edmundsId": "Chevrolet_Corvette_Stingray",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.750Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.750Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfb0"),
  "name": "Cruze",
  "niceName": "cruze",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Chevrolet_Cruze",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.750Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.750Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfb1"),
  "name": "Equinox",
  "niceName": "equinox",
  "years": [
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
  "edmundsId": "Chevrolet_Equinox",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.751Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.751Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfb2"),
  "name": "Express",
  "niceName": "express",
  "years": [
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
  "edmundsId": "Chevrolet_Express",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.751Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.751Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfb3"),
  "name": "Express Cargo",
  "niceName": "express-cargo",
  "years": [
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
  "edmundsId": "Chevrolet_Express_Cargo",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.752Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.752Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfb4"),
  "name": "HHR",
  "niceName": "hhr",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Chevrolet_HHR",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.752Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.752Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfb5"),
  "name": "Impala",
  "niceName": "impala",
  "years": [
    "1994",
    "1995",
    "1996",
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
  "edmundsId": "Chevrolet_Impala",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.753Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.753Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfb6"),
  "name": "Impala Limited",
  "niceName": "impala-limited",
  "years": [
    "2014"
  ],
  "edmundsId": "Chevrolet_Impala_Limited",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.753Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.753Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfb7"),
  "name": "Lumina",
  "niceName": "lumina",
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
  "edmundsId": "Chevrolet_Lumina",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.754Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.754Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfb8"),
  "name": "Lumina Minivan",
  "niceName": "lumina-minivan",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Chevrolet_Lumina_Minivan",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.754Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.754Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfb9"),
  "name": "Malibu",
  "niceName": "malibu",
  "years": [
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
  "edmundsId": "Chevrolet_Malibu",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.755Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.755Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfba"),
  "name": "Malibu Classic",
  "niceName": "malibu-classic",
  "years": [
    "2008"
  ],
  "edmundsId": "Chevrolet_Malibu_Classic",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.755Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.755Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfbb"),
  "name": "Malibu Hybrid",
  "niceName": "malibu-hybrid",
  "years": [
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": "Chevrolet_Malibu_Hybrid",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.756Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.756Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfbc"),
  "name": "Malibu Maxx",
  "niceName": "malibu-maxx",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Chevrolet_Malibu_Maxx",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.757Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.757Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfbd"),
  "name": "Metro",
  "niceName": "metro",
  "years": [
    "1998",
    "1999",
    "2000",
    "2001"
  ],
  "edmundsId": "Chevrolet_Metro",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.757Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.757Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfbe"),
  "name": "Monte Carlo",
  "niceName": "monte-carlo",
  "years": [
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
    "2007"
  ],
  "edmundsId": "Chevrolet_Monte_Carlo",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.758Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.758Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfbf"),
  "name": "Prizm",
  "niceName": "prizm",
  "years": [
    "1998",
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "Chevrolet_Prizm",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.758Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.758Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfc0"),
  "name": "R/V 3500 Series",
  "niceName": "rv-3500-series",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Chevrolet_R/V_3500_Series",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.759Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.759Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfc1"),
  "name": "S-10",
  "niceName": "s-10",
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
  "edmundsId": "Chevrolet_S_10",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.759Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.759Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfc2"),
  "name": "S-10 Blazer",
  "niceName": "s-10-blazer",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Chevrolet_S_10_Blazer",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.760Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.760Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfc3"),
  "name": "SS",
  "niceName": "ss",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Chevrolet_SS",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.760Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.760Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfc4"),
  "name": "SSR",
  "niceName": "ssr",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Chevrolet_SSR",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.761Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.761Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfc5"),
  "name": "Silverado 1500",
  "niceName": "silverado-1500",
  "years": [
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
  "edmundsId": "Chevrolet_Silverado_1500",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.762Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.762Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfc6"),
  "name": "Silverado 1500 Classic",
  "niceName": "silverado-1500-classic",
  "years": [
    "2007"
  ],
  "edmundsId": "Chevrolet_Silverado_1500_Classic",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.762Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.762Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfc7"),
  "name": "Silverado 1500 Hybrid",
  "niceName": "silverado-1500-hybrid",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Chevrolet_Silverado_1500_Hybrid",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.763Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.763Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfc8"),
  "name": "Silverado 1500HD",
  "niceName": "silverado-1500hd",
  "years": [
    "2001",
    "2002",
    "2003",
    "2005",
    "2006"
  ],
  "edmundsId": "Chevrolet_Silverado_1500HD",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.763Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.763Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfc9"),
  "name": "Silverado 1500HD Classic",
  "niceName": "silverado-1500hd-classic",
  "years": [
    "2007"
  ],
  "edmundsId": "Chevrolet_Silverado_1500HD_Classic",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.764Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.764Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfca"),
  "name": "Silverado 2500",
  "niceName": "silverado-2500",
  "years": [
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": "Chevrolet_Silverado_2500",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.764Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.764Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfcb"),
  "name": "Silverado 2500HD",
  "niceName": "silverado-2500hd",
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
  "edmundsId": "Chevrolet_Silverado_2500HD",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.765Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.765Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfcc"),
  "name": "Silverado 2500HD Classic",
  "niceName": "silverado-2500hd-classic",
  "years": [
    "2007"
  ],
  "edmundsId": "Chevrolet_Silverado_2500HD_Classic",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.765Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.765Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfcd"),
  "name": "Silverado 3500",
  "niceName": "silverado-3500",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Chevrolet_Silverado_3500",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.766Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.766Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfce"),
  "name": "Silverado 3500 Classic",
  "niceName": "silverado-3500-classic",
  "years": [
    "2007"
  ],
  "edmundsId": "Chevrolet_Silverado_3500_Classic",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.767Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.767Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfcf"),
  "name": "Silverado 3500HD",
  "niceName": "silverado-3500hd",
  "years": [
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
  "edmundsId": "Chevrolet_Silverado_3500HD",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.767Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.767Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfd0"),
  "name": "Sonic",
  "niceName": "sonic",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Chevrolet_Sonic",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.768Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.768Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfd1"),
  "name": "Spark",
  "niceName": "spark",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Chevrolet_Spark",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.768Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.768Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfd2"),
  "name": "Spark EV",
  "niceName": "spark-ev",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Chevrolet_Spark_EV",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.769Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.769Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfd3"),
  "name": "Sportvan",
  "niceName": "sportvan",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Chevrolet_Sportvan",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.769Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.769Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfd4"),
  "name": "Suburban",
  "niceName": "suburban",
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
  "edmundsId": "Chevrolet_Suburban",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.770Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.770Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfd5"),
  "name": "Tahoe",
  "niceName": "tahoe",
  "years": [
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
  "edmundsId": "Chevrolet_Tahoe",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.770Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.770Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfd6"),
  "name": "Tahoe Hybrid",
  "niceName": "tahoe-hybrid",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Chevrolet_Tahoe_Hybrid",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.771Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.771Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfd7"),
  "name": "Tahoe Limited/Z71",
  "niceName": "tahoe-limitedz71",
  "years": [
    "2000"
  ],
  "edmundsId": "Chevrolet_Tahoe_Limited/Z71",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.771Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.771Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfd8"),
  "name": "Tracker",
  "niceName": "tracker",
  "years": [
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": "Chevrolet_Tracker",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.773Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.773Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfd9"),
  "name": "TrailBlazer",
  "niceName": "trailblazer",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Chevrolet_TrailBlazer",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.774Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.774Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfda"),
  "name": "TrailBlazer EXT",
  "niceName": "trailblazer-ext",
  "years": [
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Chevrolet_TrailBlazer_EXT",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.775Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.775Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfdb"),
  "name": "Traverse",
  "niceName": "traverse",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Chevrolet_Traverse",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.776Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.776Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfdc"),
  "name": "Trax",
  "niceName": "trax",
  "years": [
    "2015"
  ],
  "edmundsId": "Chevrolet_Trax",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.776Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.776Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfdd"),
  "name": "Uplander",
  "niceName": "uplander",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Chevrolet_Uplander",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.777Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.777Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfde"),
  "name": "Venture",
  "niceName": "venture",
  "years": [
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005"
  ],
  "edmundsId": "Chevrolet_Venture",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.777Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.777Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29a821fd96d81f85dfdf"),
  "name": "Volt",
  "niceName": "volt",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Chevrolet_Volt",
  "make": ObjectId("550b28a0229533b024084056"),
  "createdAt": ISODate("2015-03-19T19:55:20.778Z"),
  "updatedAt": ISODate("2015-03-19T19:55:20.778Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3c9"),
  "name": "200",
  "niceName": "200",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Chrysler_200",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.972Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.972Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3ca"),
  "name": "300",
  "niceName": "300",
  "years": [
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
  "edmundsId": "Chrysler_300",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.973Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.973Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3cb"),
  "name": "300M",
  "niceName": "300m",
  "years": [
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": "Chrysler_300M",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.974Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.974Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3cc"),
  "name": "Aspen",
  "niceName": "aspen",
  "years": [
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Chrysler_Aspen",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.974Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.974Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3cd"),
  "name": "Cirrus",
  "niceName": "cirrus",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "Chrysler_Cirrus",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.975Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.975Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3ce"),
  "name": "Concorde",
  "niceName": "concorde",
  "years": [
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
  "edmundsId": "Chrysler_Concorde",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.975Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.975Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3cf"),
  "name": "Crossfire",
  "niceName": "crossfire",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Chrysler_Crossfire",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.976Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.976Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3d0"),
  "name": "Grand Voyager",
  "niceName": "grand-voyager",
  "years": [
    "2000"
  ],
  "edmundsId": "Chrysler_Grand_Voyager",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.976Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.976Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3d1"),
  "name": "Imperial",
  "niceName": "imperial",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Chrysler_Imperial",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.977Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.977Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3d2"),
  "name": "LHS",
  "niceName": "lhs",
  "years": [
    "1994",
    "1995",
    "1996",
    "1997",
    "1999",
    "2000",
    "2001"
  ],
  "edmundsId": "Chrysler_LHS",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.977Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.977Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3d3"),
  "name": "Le Baron",
  "niceName": "le-baron",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Chrysler_Le_Baron",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.978Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.978Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3d4"),
  "name": "New Yorker",
  "niceName": "new-yorker",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Chrysler_New_Yorker",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.978Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.978Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3d5"),
  "name": "PT Cruiser",
  "niceName": "pt-cruiser",
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
  "edmundsId": "Chrysler_PT_Cruiser",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.979Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.979Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3d6"),
  "name": "Pacifica",
  "niceName": "pacifica",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Chrysler_Pacifica",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.979Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.979Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3d7"),
  "name": "Prowler",
  "niceName": "prowler",
  "years": [
    "2001",
    "2002"
  ],
  "edmundsId": "Chrysler_Prowler",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.980Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.980Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3d8"),
  "name": "Sebring",
  "niceName": "sebring",
  "years": [
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
  "edmundsId": "Chrysler_Sebring",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.980Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.980Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3d9"),
  "name": "TC",
  "niceName": "tc",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Chrysler_TC",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.981Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.981Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3da"),
  "name": "Town and Country",
  "niceName": "town-and-country",
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
  "edmundsId": "Chrysler_Town_and_Country",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.981Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.981Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29af21fd96d81f85f3db"),
  "name": "Voyager",
  "niceName": "voyager",
  "years": [
    "2000",
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Chrysler_Voyager",
  "make": ObjectId("550b28a0229533b024084057"),
  "createdAt": ISODate("2015-03-19T19:55:27.982Z"),
  "updatedAt": ISODate("2015-03-19T19:55:27.982Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b121fd96d81f85f61d"),
  "name": "Lanos",
  "niceName": "lanos",
  "years": [
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "Daewoo_Lanos",
  "make": ObjectId("550b28a0229533b024084058"),
  "createdAt": ISODate("2015-03-19T19:55:29.990Z"),
  "updatedAt": ISODate("2015-03-19T19:55:29.990Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b121fd96d81f85f61e"),
  "name": "Leganza",
  "niceName": "leganza",
  "years": [
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "Daewoo_Leganza",
  "make": ObjectId("550b28a0229533b024084058"),
  "createdAt": ISODate("2015-03-19T19:55:29.991Z"),
  "updatedAt": ISODate("2015-03-19T19:55:29.991Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b121fd96d81f85f61f"),
  "name": "Nubira",
  "niceName": "nubira",
  "years": [
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "Daewoo_Nubira",
  "make": ObjectId("550b28a0229533b024084058"),
  "createdAt": ISODate("2015-03-19T19:55:29.992Z"),
  "updatedAt": ISODate("2015-03-19T19:55:29.992Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f64c"),
  "name": "Avenger",
  "niceName": "avenger",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Dodge_Avenger",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.928Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.928Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f64d"),
  "name": "Caliber",
  "niceName": "caliber",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": "Dodge_Caliber",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.930Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.930Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f64e"),
  "name": "Caravan",
  "niceName": "caravan",
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
    "2007"
  ],
  "edmundsId": "Dodge_Caravan",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.931Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.931Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f64f"),
  "name": "Challenger",
  "niceName": "challenger",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Dodge_Challenger",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.933Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.933Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f650"),
  "name": "Charger",
  "niceName": "charger",
  "years": [
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
  "edmundsId": "Dodge_Charger",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.934Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.934Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f651"),
  "name": "Colt",
  "niceName": "colt",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Dodge_Colt",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.936Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.936Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f652"),
  "name": "Dakota",
  "niceName": "dakota",
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
  "edmundsId": "Dodge_Dakota",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.937Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.937Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f653"),
  "name": "Dart",
  "niceName": "dart",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Dodge_Dart",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.939Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.939Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f654"),
  "name": "Daytona",
  "niceName": "daytona",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Dodge_Daytona",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.940Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.940Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f655"),
  "name": "Durango",
  "niceName": "durango",
  "years": [
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
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Dodge_Durango",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.952Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.952Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f656"),
  "name": "Dynasty",
  "niceName": "dynasty",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Dodge_Dynasty",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.953Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.953Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f657"),
  "name": "Grand Caravan",
  "niceName": "grand-caravan",
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
  "edmundsId": "Dodge_Grand_Caravan",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.954Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.954Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f658"),
  "name": "Intrepid",
  "niceName": "intrepid",
  "years": [
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
  "edmundsId": "Dodge_Intrepid",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.955Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.955Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f659"),
  "name": "Journey",
  "niceName": "journey",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Dodge_Journey",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.956Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.956Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f65a"),
  "name": "Magnum",
  "niceName": "magnum",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Dodge_Magnum",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.956Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.956Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f65b"),
  "name": "Monaco",
  "niceName": "monaco",
  "years": [
    "1990",
    "1991",
    "1992"
  ],
  "edmundsId": "Dodge_Monaco",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.957Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.957Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f65c"),
  "name": "Neon",
  "niceName": "neon",
  "years": [
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
    "2005"
  ],
  "edmundsId": "Dodge_Neon",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.959Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.959Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f65d"),
  "name": "Nitro",
  "niceName": "nitro",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Dodge_Nitro",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.960Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.960Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f65e"),
  "name": "Omni",
  "niceName": "omni",
  "years": [
    "1990"
  ],
  "edmundsId": "Dodge_Omni",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.961Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.961Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f65f"),
  "name": "RAM 150",
  "niceName": "ram-150",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Dodge_RAM_150",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.962Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.962Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f660"),
  "name": "RAM 250",
  "niceName": "ram-250",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Dodge_RAM_250",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.963Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.963Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f661"),
  "name": "RAM 350",
  "niceName": "ram-350",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Dodge_RAM_350",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.963Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.963Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f662"),
  "name": "Ram 50 Pickup",
  "niceName": "ram-50-pickup",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Dodge_Ram_50_Pickup",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.964Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.964Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f663"),
  "name": "Ram Cargo",
  "niceName": "ram-cargo",
  "years": [
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Dodge_Ram_Cargo",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.964Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.964Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f664"),
  "name": "Ram Pickup 1500",
  "niceName": "ram-pickup-1500",
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
    "2010"
  ],
  "edmundsId": "Dodge_Ram_Pickup_1500",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.965Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.965Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f665"),
  "name": "Ram Pickup 2500",
  "niceName": "ram-pickup-2500",
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
    "2010"
  ],
  "edmundsId": "Dodge_Ram_Pickup_2500",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.966Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.966Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f666"),
  "name": "Ram Pickup 3500",
  "niceName": "ram-pickup-3500",
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
    "2010"
  ],
  "edmundsId": "Dodge_Ram_Pickup_3500",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.966Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.966Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f667"),
  "name": "Ram Van",
  "niceName": "ram-van",
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
    "2000"
  ],
  "edmundsId": "Dodge_Ram_Van",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.967Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.967Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f668"),
  "name": "Ram Wagon",
  "niceName": "ram-wagon",
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
    "2002"
  ],
  "edmundsId": "Dodge_Ram_Wagon",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.968Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.968Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f669"),
  "name": "Ramcharger",
  "niceName": "ramcharger",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Dodge_Ramcharger",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.969Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.969Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f66a"),
  "name": "SRT Viper",
  "niceName": "srt-viper",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Dodge_SRT_Viper",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.970Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.970Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f66b"),
  "name": "Shadow",
  "niceName": "shadow",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Dodge_Shadow",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.971Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.971Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f66c"),
  "name": "Spirit",
  "niceName": "spirit",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Dodge_Spirit",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.972Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.972Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f66d"),
  "name": "Sprinter",
  "niceName": "sprinter",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Dodge_Sprinter",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.973Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.973Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f66e"),
  "name": "Sprinter Cargo",
  "niceName": "sprinter-cargo",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Dodge_Sprinter_Cargo",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.974Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.974Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f66f"),
  "name": "Stealth",
  "niceName": "stealth",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Dodge_Stealth",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.975Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.975Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f670"),
  "name": "Stratus",
  "niceName": "stratus",
  "years": [
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
    "2006"
  ],
  "edmundsId": "Dodge_Stratus",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.976Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.976Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29b621fd96d81f85f671"),
  "name": "Viper",
  "niceName": "viper",
  "years": [
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
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": "Dodge_Viper",
  "make": ObjectId("550b28a0229533b024084059"),
  "createdAt": ISODate("2015-03-19T19:55:34.976Z"),
  "updatedAt": ISODate("2015-03-19T19:55:34.976Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ba21fd96d81f860099"),
  "name": "Premier",
  "niceName": "premier",
  "years": [
    "1990",
    "1991",
    "1992"
  ],
  "edmundsId": "Eagle_Premier",
  "make": ObjectId("550b28a0229533b02408405a"),
  "createdAt": ISODate("2015-03-19T19:55:38.848Z"),
  "updatedAt": ISODate("2015-03-19T19:55:38.848Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ba21fd96d81f86009a"),
  "name": "Summit",
  "niceName": "summit",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Eagle_Summit",
  "make": ObjectId("550b28a0229533b02408405a"),
  "createdAt": ISODate("2015-03-19T19:55:38.849Z"),
  "updatedAt": ISODate("2015-03-19T19:55:38.849Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ba21fd96d81f86009b"),
  "name": "Talon",
  "niceName": "talon",
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
  "edmundsId": "Eagle_Talon",
  "make": ObjectId("550b28a0229533b02408405a"),
  "createdAt": ISODate("2015-03-19T19:55:38.850Z"),
  "updatedAt": ISODate("2015-03-19T19:55:38.850Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ba21fd96d81f86009c"),
  "name": "Vision",
  "niceName": "vision",
  "years": [
    "1993",
    "1994",
    "1995",
    "1996",
    "1997"
  ],
  "edmundsId": "Eagle_Vision",
  "make": ObjectId("550b28a0229533b02408405a"),
  "createdAt": ISODate("2015-03-19T19:55:38.851Z"),
  "updatedAt": ISODate("2015-03-19T19:55:38.851Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29bc21fd96d81f8600fe"),
  "name": "500",
  "niceName": "500",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "FIAT_500",
  "make": ObjectId("550b28a0229533b02408405b"),
  "createdAt": ISODate("2015-03-19T19:55:40.861Z"),
  "updatedAt": ISODate("2015-03-19T19:55:40.861Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29bc21fd96d81f8600ff"),
  "name": "500L",
  "niceName": "500l",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "FIAT_500L",
  "make": ObjectId("550b28a0229533b02408405b"),
  "createdAt": ISODate("2015-03-19T19:55:40.862Z"),
  "updatedAt": ISODate("2015-03-19T19:55:40.862Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29bc21fd96d81f860100"),
  "name": "500X",
  "niceName": "500x",
  "years": [
    "2016"
  ],
  "edmundsId": "FIAT_500X",
  "make": ObjectId("550b28a0229533b02408405b"),
  "createdAt": ISODate("2015-03-19T19:55:40.863Z"),
  "updatedAt": ISODate("2015-03-19T19:55:40.863Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29bc21fd96d81f860101"),
  "name": "500e",
  "niceName": "500e",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "FIAT_500e",
  "make": ObjectId("550b28a0229533b02408405b"),
  "createdAt": ISODate("2015-03-19T19:55:40.864Z"),
  "updatedAt": ISODate("2015-03-19T19:55:40.864Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29be21fd96d81f860130"),
  "name": "360",
  "niceName": "360",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": "Ferrari_360",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:42.994Z"),
  "updatedAt": ISODate("2015-03-19T19:55:42.994Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29be21fd96d81f860131"),
  "name": "430 Scuderia",
  "niceName": "430-scuderia",
  "years": [
    "2008",
    "2009"
  ],
  "edmundsId": "Ferrari_430_Scuderia",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:42.995Z"),
  "updatedAt": ISODate("2015-03-19T19:55:42.995Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29be21fd96d81f860132"),
  "name": "456M",
  "niceName": "456m",
  "years": [
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Ferrari_456M",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:42.996Z"),
  "updatedAt": ISODate("2015-03-19T19:55:42.996Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29be21fd96d81f860133"),
  "name": "458 Italia",
  "niceName": "458-italia",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Ferrari_458_Italia",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:42.997Z"),
  "updatedAt": ISODate("2015-03-19T19:55:42.997Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29be21fd96d81f860134"),
  "name": "550",
  "niceName": "550",
  "years": [
    "2001"
  ],
  "edmundsId": "Ferrari_550",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:42.998Z"),
  "updatedAt": ISODate("2015-03-19T19:55:42.998Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29be21fd96d81f860135"),
  "name": "575M",
  "niceName": "575m",
  "years": [
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": "Ferrari_575M",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:42.999Z"),
  "updatedAt": ISODate("2015-03-19T19:55:42.999Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29bf21fd96d81f860136"),
  "name": "599",
  "niceName": "599",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Ferrari_599",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:43.0Z"),
  "updatedAt": ISODate("2015-03-19T19:55:43.0Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29bf21fd96d81f860137"),
  "name": "612 Scaglietti",
  "niceName": "612-scaglietti",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Ferrari_612_Scaglietti",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:43.0Z"),
  "updatedAt": ISODate("2015-03-19T19:55:43.0Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29bf21fd96d81f860138"),
  "name": "California",
  "niceName": "california",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Ferrari_California",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:43.100Z"),
  "updatedAt": ISODate("2015-03-19T19:55:43.100Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29bf21fd96d81f860139"),
  "name": "California T",
  "niceName": "california-t",
  "years": [
    "2015"
  ],
  "edmundsId": "Ferrari_California_T",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:43.200Z"),
  "updatedAt": ISODate("2015-03-19T19:55:43.200Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29bf21fd96d81f86013a"),
  "name": "Enzo",
  "niceName": "enzo",
  "years": [
    "2003"
  ],
  "edmundsId": "Ferrari_Enzo",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:43.400Z"),
  "updatedAt": ISODate("2015-03-19T19:55:43.400Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29bf21fd96d81f86013b"),
  "name": "F12 Berlinetta",
  "niceName": "f12-berlinetta",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Ferrari_F12_Berlinetta",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:43.500Z"),
  "updatedAt": ISODate("2015-03-19T19:55:43.500Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29bf21fd96d81f86013c"),
  "name": "F430",
  "niceName": "f430",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Ferrari_F430",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:43.700Z"),
  "updatedAt": ISODate("2015-03-19T19:55:43.700Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29bf21fd96d81f86013d"),
  "name": "FF",
  "niceName": "ff",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Ferrari_FF",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:43.700Z"),
  "updatedAt": ISODate("2015-03-19T19:55:43.700Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29bf21fd96d81f86013e"),
  "name": "Superamerica",
  "niceName": "superamerica",
  "years": [
    "2005"
  ],
  "edmundsId": "Ferrari_Superamerica",
  "make": ObjectId("550b28a0229533b02408405c"),
  "createdAt": ISODate("2015-03-19T19:55:43.800Z"),
  "updatedAt": ISODate("2015-03-19T19:55:43.800Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c121fd96d81f8601a6"),
  "name": "Karma",
  "niceName": "karma",
  "years": [
    "2012"
  ],
  "edmundsId": "Fisker_Karma",
  "make": ObjectId("550b28a0229533b02408405d"),
  "createdAt": ISODate("2015-03-19T19:55:45.400Z"),
  "updatedAt": ISODate("2015-03-19T19:55:45.400Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601aa"),
  "name": "Aerostar",
  "niceName": "aerostar",
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
  "edmundsId": "Ford_Aerostar",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.880Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.880Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601ab"),
  "name": "Aspire",
  "niceName": "aspire",
  "years": [
    "1994",
    "1995",
    "1996",
    "1997"
  ],
  "edmundsId": "Ford_Aspire",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.890Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.890Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601ac"),
  "name": "Bronco",
  "niceName": "bronco",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Ford_Bronco",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.900Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.900Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601ad"),
  "name": "Bronco II",
  "niceName": "bronco-ii",
  "years": [
    "1990"
  ],
  "edmundsId": "Ford_Bronco_II",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.910Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.910Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601ae"),
  "name": "C-Max Energi",
  "niceName": "c-max-energi",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Ford_C_Max_Energi",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.920Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.920Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601af"),
  "name": "C-Max Hybrid",
  "niceName": "c-max-hybrid",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Ford_C_Max_Hybrid",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.930Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.930Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601b0"),
  "name": "Contour",
  "niceName": "contour",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "Ford_Contour",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.940Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.940Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601b1"),
  "name": "Contour SVT",
  "niceName": "contour-svt",
  "years": [
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "Ford_Contour_SVT",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.950Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.950Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601b2"),
  "name": "Crown Victoria",
  "niceName": "crown-victoria",
  "years": [
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
  "edmundsId": "Ford_Crown_Victoria",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.960Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.960Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601b3"),
  "name": "E-150",
  "niceName": "e-150",
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
  "edmundsId": "Ford_E_150",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.960Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.960Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601b4"),
  "name": "E-250",
  "niceName": "e-250",
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
  "edmundsId": "Ford_E_250",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.970Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.970Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601b5"),
  "name": "E-350",
  "niceName": "e-350",
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
  "edmundsId": "Ford_E_350",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.980Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.980Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601b6"),
  "name": "E-Series Van",
  "niceName": "e-series-van",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Ford_E_Series_Van",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.990Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.990Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601b7"),
  "name": "E-Series Wagon",
  "niceName": "e-series-wagon",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Ford_E_Series_Wagon",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.100Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.100Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601b8"),
  "name": "Econoline Cargo",
  "niceName": "econoline-cargo",
  "years": [
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
  "edmundsId": "Ford_Econoline_Cargo",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.100Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.100Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601b9"),
  "name": "Econoline Wagon",
  "niceName": "econoline-wagon",
  "years": [
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
  "edmundsId": "Ford_Econoline_Wagon",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.101Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.101Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601ba"),
  "name": "Edge",
  "niceName": "edge",
  "years": [
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
  "edmundsId": "Ford_Edge",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.102Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.102Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601bb"),
  "name": "Escape",
  "niceName": "escape",
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
  "edmundsId": "Ford_Escape",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.103Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.103Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601bc"),
  "name": "Escape Hybrid",
  "niceName": "escape-hybrid",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Ford_Escape_Hybrid",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.104Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.104Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601bd"),
  "name": "Escort",
  "niceName": "escort",
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
    "2003"
  ],
  "edmundsId": "Ford_Escort",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.104Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.104Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601be"),
  "name": "Excursion",
  "niceName": "excursion",
  "years": [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005"
  ],
  "edmundsId": "Ford_Excursion",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.105Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.105Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601bf"),
  "name": "Expedition",
  "niceName": "expedition",
  "years": [
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
  "edmundsId": "Ford_Expedition",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.106Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.106Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601c0"),
  "name": "Expedition EL",
  "niceName": "expedition-el",
  "years": [
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Ford_Expedition_EL",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.107Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.107Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601c1"),
  "name": "Explorer",
  "niceName": "explorer",
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
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Ford_Explorer",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.107Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.107Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601c2"),
  "name": "Explorer Sport",
  "niceName": "explorer-sport",
  "years": [
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Ford_Explorer_Sport",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.108Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.108Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601c3"),
  "name": "Explorer Sport Trac",
  "niceName": "explorer-sport-trac",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2007",
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": "Ford_Explorer_Sport_Trac",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.109Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.109Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601c4"),
  "name": "F-150",
  "niceName": "f-150",
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
  "edmundsId": "Ford_F_150",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.110Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.110Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601c5"),
  "name": "F-150 Heritage",
  "niceName": "f-150-heritage",
  "years": [
    "2004"
  ],
  "edmundsId": "Ford_F_150_Heritage",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.110Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.110Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601c6"),
  "name": "F-150 SVT Lightning",
  "niceName": "f-150-svt-lightning",
  "years": [
    "1993",
    "1994",
    "1995",
    "1999",
    "2000"
  ],
  "edmundsId": "Ford_F_150_SVT_Lightning",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.111Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.111Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601c7"),
  "name": "F-250",
  "niceName": "f-250",
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
    "1999"
  ],
  "edmundsId": "Ford_F_250",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.111Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.111Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601c8"),
  "name": "F-250 Super Duty",
  "niceName": "f-250-super-duty",
  "years": [
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
  "edmundsId": "Ford_F_250_Super_Duty",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.112Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.112Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601c9"),
  "name": "F-350",
  "niceName": "f-350",
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
  "edmundsId": "Ford_F_350",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.112Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.112Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601ca"),
  "name": "F-350 Super Duty",
  "niceName": "f-350-super-duty",
  "years": [
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
  "edmundsId": "Ford_F_350_Super_Duty",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.113Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.113Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601cb"),
  "name": "F-450 Super Duty",
  "niceName": "f-450-super-duty",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Ford_F_450_Super_Duty",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.113Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.113Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601cc"),
  "name": "Festiva",
  "niceName": "festiva",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Ford_Festiva",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.114Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.114Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601cd"),
  "name": "Fiesta",
  "niceName": "fiesta",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Ford_Fiesta",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.122Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.122Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601ce"),
  "name": "Five Hundred",
  "niceName": "five-hundred",
  "years": [
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Ford_Five_Hundred",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.122Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.122Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601cf"),
  "name": "Flex",
  "niceName": "flex",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Ford_Flex",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.123Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.123Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601d0"),
  "name": "Focus",
  "niceName": "focus",
  "years": [
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
  "edmundsId": "Ford_Focus",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.123Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.123Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601d1"),
  "name": "Focus ST",
  "niceName": "focus-st",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Ford_Focus_ST",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.124Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.124Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601d2"),
  "name": "Freestar",
  "niceName": "freestar",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Ford_Freestar",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.124Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.124Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601d3"),
  "name": "Freestyle",
  "niceName": "freestyle",
  "years": [
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Ford_Freestyle",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.125Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.125Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601d4"),
  "name": "Fusion",
  "niceName": "fusion",
  "years": [
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
  "edmundsId": "Ford_Fusion",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.125Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.125Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601d5"),
  "name": "Fusion Energi",
  "niceName": "fusion-energi",
  "years": [
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Ford_Fusion_Energi",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.126Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.126Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601d6"),
  "name": "Fusion Hybrid",
  "niceName": "fusion-hybrid",
  "years": [
    "2010",
    "2011",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Ford_Fusion_Hybrid",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.126Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.126Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601d7"),
  "name": "GT",
  "niceName": "gt",
  "years": [
    "2005",
    "2006",
    "2017"
  ],
  "edmundsId": "Ford_GT",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.127Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.127Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601d8"),
  "name": "LTD Crown Victoria",
  "niceName": "ltd-crown-victoria",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Ford_LTD_Crown_Victoria",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.127Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.127Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601d9"),
  "name": "Mustang",
  "niceName": "mustang",
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
  "edmundsId": "Ford_Mustang",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.128Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.128Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601da"),
  "name": "Mustang SVT Cobra",
  "niceName": "mustang-svt-cobra",
  "years": [
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999"
  ],
  "edmundsId": "Ford_Mustang_SVT_Cobra",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.128Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.128Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601db"),
  "name": "Probe",
  "niceName": "probe",
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
  "edmundsId": "Ford_Probe",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.137Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.137Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601dc"),
  "name": "Ranger",
  "niceName": "ranger",
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
  "edmundsId": "Ford_Ranger",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.141Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.141Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601dd"),
  "name": "Shelby GT500",
  "niceName": "shelby-gt500",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Ford_Shelby_GT500",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.147Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.147Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601de"),
  "name": "Taurus",
  "niceName": "taurus",
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
  "edmundsId": "Ford_Taurus",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.147Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.147Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601df"),
  "name": "Taurus X",
  "niceName": "taurus-x",
  "years": [
    "2008",
    "2009"
  ],
  "edmundsId": "Ford_Taurus_X",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.148Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.148Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601e0"),
  "name": "Tempo",
  "niceName": "tempo",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Ford_Tempo",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.148Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.148Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601e1"),
  "name": "Thunderbird",
  "niceName": "thunderbird",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "2002",
    "2003",
    "2004",
    "2005"
  ],
  "edmundsId": "Ford_Thunderbird",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.149Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.149Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601e2"),
  "name": "Transit Connect",
  "niceName": "transit-connect",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Ford_Transit_Connect",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.150Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.150Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601e3"),
  "name": "Transit Van",
  "niceName": "transit-van",
  "years": [
    "2015"
  ],
  "edmundsId": "Ford_Transit_Van",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.150Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.150Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601e4"),
  "name": "Transit Wagon",
  "niceName": "transit-wagon",
  "years": [
    "2015"
  ],
  "edmundsId": "Ford_Transit_Wagon",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.150Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.150Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601e5"),
  "name": "Windstar",
  "niceName": "windstar",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Ford_Windstar",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.151Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.151Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29c921fd96d81f8601e6"),
  "name": "Windstar Cargo",
  "niceName": "windstar-cargo",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Ford_Windstar_Cargo",
  "make": ObjectId("550b28a0229533b02408405e"),
  "createdAt": ISODate("2015-03-19T19:55:53.151Z"),
  "updatedAt": ISODate("2015-03-19T19:55:53.151Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861974"),
  "name": "Acadia",
  "niceName": "acadia",
  "years": [
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
  "edmundsId": "GMC_Acadia",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.194Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.194Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861975"),
  "name": "Canyon",
  "niceName": "canyon",
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
    "2015"
  ],
  "edmundsId": "GMC_Canyon",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.194Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.194Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861976"),
  "name": "Envoy",
  "niceName": "envoy",
  "years": [
    "1998",
    "1999",
    "2000",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "GMC_Envoy",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.196Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.196Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861977"),
  "name": "Envoy XL",
  "niceName": "envoy-xl",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "GMC_Envoy_XL",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.196Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.196Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861978"),
  "name": "Envoy XUV",
  "niceName": "envoy-xuv",
  "years": [
    "2004",
    "2005"
  ],
  "edmundsId": "GMC_Envoy_XUV",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.197Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.197Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861979"),
  "name": "Jimmy",
  "niceName": "jimmy",
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
  "edmundsId": "GMC_Jimmy",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.198Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.198Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f86197a"),
  "name": "R/V 3500 Series",
  "niceName": "rv-3500-series",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "GMC_R/V_3500_Series",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.198Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.198Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f86197b"),
  "name": "Rally Wagon",
  "niceName": "rally-wagon",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "GMC_Rally_Wagon",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.199Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.199Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f86197c"),
  "name": "S-15",
  "niceName": "s-15",
  "years": [
    "1990"
  ],
  "edmundsId": "GMC_S_15",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.199Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.199Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f86197d"),
  "name": "S-15 Jimmy",
  "niceName": "s-15-jimmy",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "GMC_S_15_Jimmy",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.200Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.200Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f86197e"),
  "name": "Safari",
  "niceName": "safari",
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
    "2005"
  ],
  "edmundsId": "GMC_Safari",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.200Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.200Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f86197f"),
  "name": "Safari Cargo",
  "niceName": "safari-cargo",
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
    "2005"
  ],
  "edmundsId": "GMC_Safari_Cargo",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.201Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.201Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861980"),
  "name": "Savana",
  "niceName": "savana",
  "years": [
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
  "edmundsId": "GMC_Savana",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.202Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.202Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861981"),
  "name": "Savana Cargo",
  "niceName": "savana-cargo",
  "years": [
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
    "2014"
  ],
  "edmundsId": "GMC_Savana_Cargo",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.202Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.202Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861982"),
  "name": "Sierra 1500",
  "niceName": "sierra-1500",
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
  "edmundsId": "GMC_Sierra_1500",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.203Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.203Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861983"),
  "name": "Sierra 1500 Classic",
  "niceName": "sierra-1500-classic",
  "years": [
    "2007"
  ],
  "edmundsId": "GMC_Sierra_1500_Classic",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.204Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.204Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861984"),
  "name": "Sierra 1500 Hybrid",
  "niceName": "sierra-1500-hybrid",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "GMC_Sierra_1500_Hybrid",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.205Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.205Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861985"),
  "name": "Sierra 1500HD",
  "niceName": "sierra-1500hd",
  "years": [
    "2001",
    "2002",
    "2003",
    "2005",
    "2006"
  ],
  "edmundsId": "GMC_Sierra_1500HD",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.206Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.206Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861986"),
  "name": "Sierra 1500HD Classic",
  "niceName": "sierra-1500hd-classic",
  "years": [
    "2007"
  ],
  "edmundsId": "GMC_Sierra_1500HD_Classic",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.207Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.207Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861987"),
  "name": "Sierra 2500",
  "niceName": "sierra-2500",
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
  "edmundsId": "GMC_Sierra_2500",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.207Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.207Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861988"),
  "name": "Sierra 2500HD",
  "niceName": "sierra-2500hd",
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
  "edmundsId": "GMC_Sierra_2500HD",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.208Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.208Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861989"),
  "name": "Sierra 2500HD Classic",
  "niceName": "sierra-2500hd-classic",
  "years": [
    "2007"
  ],
  "edmundsId": "GMC_Sierra_2500HD_Classic",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.209Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.209Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f86198a"),
  "name": "Sierra 3500",
  "niceName": "sierra-3500",
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
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "GMC_Sierra_3500",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.210Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.210Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f86198b"),
  "name": "Sierra 3500 Classic",
  "niceName": "sierra-3500-classic",
  "years": [
    "2007"
  ],
  "edmundsId": "GMC_Sierra_3500_Classic",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.211Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.211Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f86198c"),
  "name": "Sierra 3500HD",
  "niceName": "sierra-3500hd",
  "years": [
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
  "edmundsId": "GMC_Sierra_3500HD",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.211Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.211Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f86198d"),
  "name": "Sierra C3",
  "niceName": "sierra-c3",
  "years": [
    "2001"
  ],
  "edmundsId": "GMC_Sierra_C3",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.212Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.212Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f86198e"),
  "name": "Sierra Classic 1500",
  "niceName": "sierra-classic-1500",
  "years": [
    "1999"
  ],
  "edmundsId": "GMC_Sierra_Classic_1500",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.213Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.213Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f86198f"),
  "name": "Sierra Classic 2500",
  "niceName": "sierra-classic-2500",
  "years": [
    "1999",
    "2000"
  ],
  "edmundsId": "GMC_Sierra_Classic_2500",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.214Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.214Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861990"),
  "name": "Sierra Classic 3500",
  "niceName": "sierra-classic-3500",
  "years": [
    "1999",
    "2000"
  ],
  "edmundsId": "GMC_Sierra_Classic_3500",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.214Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.214Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861991"),
  "name": "Sonoma",
  "niceName": "sonoma",
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
    "2004"
  ],
  "edmundsId": "GMC_Sonoma",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.215Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.215Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861992"),
  "name": "Suburban",
  "niceName": "suburban",
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
    "1999"
  ],
  "edmundsId": "GMC_Suburban",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.216Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.216Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861993"),
  "name": "Syclone",
  "niceName": "syclone",
  "years": [
    "1991"
  ],
  "edmundsId": "GMC_Syclone",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.217Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.217Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861994"),
  "name": "Terrain",
  "niceName": "terrain",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "GMC_Terrain",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.217Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.217Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861995"),
  "name": "Typhoon",
  "niceName": "typhoon",
  "years": [
    "1992",
    "1993"
  ],
  "edmundsId": "GMC_Typhoon",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.218Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.218Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861996"),
  "name": "Vandura",
  "niceName": "vandura",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "GMC_Vandura",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.219Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.219Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861997"),
  "name": "Yukon",
  "niceName": "yukon",
  "years": [
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
  "edmundsId": "GMC_Yukon",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.220Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.220Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861998"),
  "name": "Yukon Denali",
  "niceName": "yukon-denali",
  "years": [
    "2000"
  ],
  "edmundsId": "GMC_Yukon_Denali",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.221Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.221Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f861999"),
  "name": "Yukon Hybrid",
  "niceName": "yukon-hybrid",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "GMC_Yukon_Hybrid",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.221Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.221Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d421fd96d81f86199a"),
  "name": "Yukon XL",
  "niceName": "yukon-xl",
  "years": [
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
  "edmundsId": "GMC_Yukon_XL",
  "make": ObjectId("550b28a0229533b02408405f"),
  "createdAt": ISODate("2015-03-19T19:56:04.222Z"),
  "updatedAt": ISODate("2015-03-19T19:56:04.222Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d921fd96d81f862981"),
  "name": "Metro",
  "niceName": "metro",
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
  "edmundsId": "Geo_Metro",
  "make": ObjectId("550b28a0229533b024084060"),
  "createdAt": ISODate("2015-03-19T19:56:09.951Z"),
  "updatedAt": ISODate("2015-03-19T19:56:09.951Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d921fd96d81f862982"),
  "name": "Prizm",
  "niceName": "prizm",
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
  "edmundsId": "Geo_Prizm",
  "make": ObjectId("550b28a0229533b024084060"),
  "createdAt": ISODate("2015-03-19T19:56:09.952Z"),
  "updatedAt": ISODate("2015-03-19T19:56:09.952Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d921fd96d81f862983"),
  "name": "Storm",
  "niceName": "storm",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Geo_Storm",
  "make": ObjectId("550b28a0229533b024084060"),
  "createdAt": ISODate("2015-03-19T19:56:09.953Z"),
  "updatedAt": ISODate("2015-03-19T19:56:09.953Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29d921fd96d81f862984"),
  "name": "Tracker",
  "niceName": "tracker",
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
  "edmundsId": "Geo_Tracker",
  "make": ObjectId("550b28a0229533b024084060"),
  "createdAt": ISODate("2015-03-19T19:56:09.954Z"),
  "updatedAt": ISODate("2015-03-19T19:56:09.954Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f8629f5"),
  "name": "Accord",
  "niceName": "accord",
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
  "edmundsId": "Honda_Accord",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.935Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.935Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f8629f7"),
  "name": "Accord Hybrid",
  "niceName": "accord-hybrid",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Honda_Accord_Hybrid",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.937Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.937Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f8629f6"),
  "name": "Accord Crosstour",
  "niceName": "accord-crosstour",
  "years": [
    "2010",
    "2011"
  ],
  "edmundsId": "Honda_Accord_Crosstour",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.936Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.936Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f8629f8"),
  "name": "Accord Plug-In Hybrid",
  "niceName": "accord-plug-in-hybrid",
  "years": [
    "2014"
  ],
  "edmundsId": "Honda_Accord_Plug_In_Hybrid",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.938Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.938Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f8629f9"),
  "name": "CR-V",
  "niceName": "cr-v",
  "years": [
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
  "edmundsId": "Honda_CR_V",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.939Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.939Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f8629fa"),
  "name": "CR-Z",
  "niceName": "cr-z",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Honda_CR_Z",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.940Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.940Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f8629fb"),
  "name": "Civic",
  "niceName": "civic",
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
  "edmundsId": "Honda_Civic",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.941Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.941Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f8629fc"),
  "name": "Civic CRX",
  "niceName": "civic-crx",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Honda_Civic_CRX",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.942Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.942Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f8629fd"),
  "name": "Civic del Sol",
  "niceName": "civic-del-sol",
  "years": [
    "1993",
    "1994",
    "1995",
    "1996",
    "1997"
  ],
  "edmundsId": "Honda_Civic_del_Sol",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.943Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.943Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f8629fe"),
  "name": "Crosstour",
  "niceName": "crosstour",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Honda_Crosstour",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.944Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.944Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f8629ff"),
  "name": "Element",
  "niceName": "element",
  "years": [
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
  "edmundsId": "Honda_Element",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.945Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.945Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f862a00"),
  "name": "Fit",
  "niceName": "fit",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2015"
  ],
  "edmundsId": "Honda_Fit",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.946Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.946Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f862a01"),
  "name": "Fit EV",
  "niceName": "fit-ev",
  "years": [
    "2013",
    "2014"
  ],
  "edmundsId": "Honda_Fit_EV",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.947Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.947Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f862a02"),
  "name": "HR-V",
  "niceName": "hr-v",
  "years": [
    "2016"
  ],
  "edmundsId": "Honda_HR_V",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.949Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.949Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f862a03"),
  "name": "Insight",
  "niceName": "insight",
  "years": [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Honda_Insight",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.950Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.950Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f862a05"),
  "name": "Passport",
  "niceName": "passport",
  "years": [
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "Honda_Passport",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.954Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.954Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f862a04"),
  "name": "Odyssey",
  "niceName": "odyssey",
  "years": [
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
  "edmundsId": "Honda_Odyssey",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.952Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.952Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f862a06"),
  "name": "Pilot",
  "niceName": "pilot",
  "years": [
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
  "edmundsId": "Honda_Pilot",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.956Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.956Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f862a07"),
  "name": "Prelude",
  "niceName": "prelude",
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
  "edmundsId": "Honda_Prelude",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.956Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.956Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f862a08"),
  "name": "Ridgeline",
  "niceName": "ridgeline",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2016"
  ],
  "edmundsId": "Honda_Ridgeline",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.957Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.957Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29dd21fd96d81f862a09"),
  "name": "S2000",
  "niceName": "s2000",
  "years": [
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
  "edmundsId": "Honda_S2000",
  "make": ObjectId("550b28a0229533b024084062"),
  "createdAt": ISODate("2015-03-19T19:56:13.958Z"),
  "updatedAt": ISODate("2015-03-19T19:56:13.958Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e021fd96d81f86316d"),
  "name": "H1",
  "niceName": "h1",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": "HUMMER_H1",
  "make": ObjectId("550b28a0229533b024084061"),
  "createdAt": ISODate("2015-03-19T19:56:16.812Z"),
  "updatedAt": ISODate("2015-03-19T19:56:16.812Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e021fd96d81f86316e"),
  "name": "H1 Alpha",
  "niceName": "h1-alpha",
  "years": [
    "2006"
  ],
  "edmundsId": "HUMMER_H1_Alpha",
  "make": ObjectId("550b28a0229533b024084061"),
  "createdAt": ISODate("2015-03-19T19:56:16.813Z"),
  "updatedAt": ISODate("2015-03-19T19:56:16.813Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e021fd96d81f86316f"),
  "name": "H2",
  "niceName": "h2",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "HUMMER_H2",
  "make": ObjectId("550b28a0229533b024084061"),
  "createdAt": ISODate("2015-03-19T19:56:16.814Z"),
  "updatedAt": ISODate("2015-03-19T19:56:16.814Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e021fd96d81f863170"),
  "name": "H2 SUT",
  "niceName": "h2-sut",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "HUMMER_H2_SUT",
  "make": ObjectId("550b28a0229533b024084061"),
  "createdAt": ISODate("2015-03-19T19:56:16.814Z"),
  "updatedAt": ISODate("2015-03-19T19:56:16.814Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e021fd96d81f863171"),
  "name": "H3",
  "niceName": "h3",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": "HUMMER_H3",
  "make": ObjectId("550b28a0229533b024084061"),
  "createdAt": ISODate("2015-03-19T19:56:16.815Z"),
  "updatedAt": ISODate("2015-03-19T19:56:16.815Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e021fd96d81f863172"),
  "name": "H3T",
  "niceName": "h3t",
  "years": [
    "2009",
    "2010"
  ],
  "edmundsId": "HUMMER_H3T",
  "make": ObjectId("550b28a0229533b024084061"),
  "createdAt": ISODate("2015-03-19T19:56:16.816Z"),
  "updatedAt": ISODate("2015-03-19T19:56:16.816Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631a0"),
  "name": "Accent",
  "niceName": "accent",
  "years": [
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
  "edmundsId": "Hyundai_Accent",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.579Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.579Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631a1"),
  "name": "Azera",
  "niceName": "azera",
  "years": [
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
  "edmundsId": "Hyundai_Azera",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.580Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.580Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631a2"),
  "name": "Elantra",
  "niceName": "elantra",
  "years": [
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
  "edmundsId": "Hyundai_Elantra",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.580Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.580Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631a3"),
  "name": "Elantra Coupe",
  "niceName": "elantra-coupe",
  "years": [
    "2013",
    "2014"
  ],
  "edmundsId": "Hyundai_Elantra_Coupe",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.581Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.581Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631a4"),
  "name": "Elantra GT",
  "niceName": "elantra-gt",
  "years": [
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Hyundai_Elantra_GT",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.582Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.582Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631a5"),
  "name": "Elantra Touring",
  "niceName": "elantra-touring",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": "Hyundai_Elantra_Touring",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.582Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.582Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631a6"),
  "name": "Entourage",
  "niceName": "entourage",
  "years": [
    "2007",
    "2008"
  ],
  "edmundsId": "Hyundai_Entourage",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.583Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.583Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631a7"),
  "name": "Equus",
  "niceName": "equus",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Hyundai_Equus",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.583Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.583Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631a8"),
  "name": "Excel",
  "niceName": "excel",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Hyundai_Excel",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.584Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.584Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631a9"),
  "name": "Genesis",
  "niceName": "genesis",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Hyundai_Genesis",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.584Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.584Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631aa"),
  "name": "Genesis Coupe",
  "niceName": "genesis-coupe",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Hyundai_Genesis_Coupe",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.585Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.585Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631ab"),
  "name": "Santa Fe",
  "niceName": "santa-fe",
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
  "edmundsId": "Hyundai_Santa_Fe",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.585Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.585Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631ac"),
  "name": "Santa Fe Sport",
  "niceName": "santa-fe-sport",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Hyundai_Santa_Fe_Sport",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.586Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.586Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631ad"),
  "name": "Scoupe",
  "niceName": "scoupe",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Hyundai_Scoupe",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.586Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.586Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631ae"),
  "name": "Sonata",
  "niceName": "sonata",
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
  "edmundsId": "Hyundai_Sonata",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.587Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.587Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631af"),
  "name": "Sonata Hybrid",
  "niceName": "sonata-hybrid",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Hyundai_Sonata_Hybrid",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.587Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.587Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631b0"),
  "name": "Tiburon",
  "niceName": "tiburon",
  "years": [
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Hyundai_Tiburon",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.588Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.588Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631b1"),
  "name": "Tucson",
  "niceName": "tucson",
  "years": [
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
  "edmundsId": "Hyundai_Tucson",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.588Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.588Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631b2"),
  "name": "Veloster",
  "niceName": "veloster",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Hyundai_Veloster",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.589Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.589Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631b3"),
  "name": "Veracruz",
  "niceName": "veracruz",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": "Hyundai_Veracruz",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.589Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.589Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631b4"),
  "name": "XG300",
  "niceName": "xg300",
  "years": [
    "2001"
  ],
  "edmundsId": "Hyundai_XG300",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.590Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.590Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e321fd96d81f8631b5"),
  "name": "XG350",
  "niceName": "xg350",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005"
  ],
  "edmundsId": "Hyundai_XG350",
  "make": ObjectId("550b28a0229533b024084063"),
  "createdAt": ISODate("2015-03-19T19:56:19.590Z"),
  "updatedAt": ISODate("2015-03-19T19:56:19.590Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863578"),
  "name": "EX",
  "niceName": "ex",
  "years": [
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Infiniti_EX",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.959Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.959Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863579"),
  "name": "EX35",
  "niceName": "ex35",
  "years": [
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": "Infiniti_EX35",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.959Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.959Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86357a"),
  "name": "FX",
  "niceName": "fx",
  "years": [
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Infiniti_FX",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.960Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.960Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86357b"),
  "name": "FX35",
  "niceName": "fx35",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": "Infiniti_FX35",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.961Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.961Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86357c"),
  "name": "FX45",
  "niceName": "fx45",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Infiniti_FX45",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.961Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.961Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86357d"),
  "name": "FX50",
  "niceName": "fx50",
  "years": [
    "2009",
    "2010"
  ],
  "edmundsId": "Infiniti_FX50",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.962Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.962Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86357e"),
  "name": "G Convertible",
  "niceName": "g-convertible",
  "years": [
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Infiniti_G_Convertible",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.962Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.962Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86357f"),
  "name": "G Coupe",
  "niceName": "g-coupe",
  "years": [
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Infiniti_G_Coupe",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.963Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.963Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863580"),
  "name": "G Sedan",
  "niceName": "g-sedan",
  "years": [
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Infiniti_G_Sedan",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.963Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.963Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863581"),
  "name": "G20",
  "niceName": "g20",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "Infiniti_G20",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.964Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.964Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863582"),
  "name": "G35",
  "niceName": "g35",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Infiniti_G35",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.964Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.964Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863583"),
  "name": "G37",
  "niceName": "g37",
  "years": [
    "2008",
    "2009"
  ],
  "edmundsId": "Infiniti_G37",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.965Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.965Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863584"),
  "name": "G37 Convertible",
  "niceName": "g37-convertible",
  "years": [
    "2010"
  ],
  "edmundsId": "Infiniti_G37_Convertible",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.965Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.965Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863585"),
  "name": "G37 Coupe",
  "niceName": "g37-coupe",
  "years": [
    "2010"
  ],
  "edmundsId": "Infiniti_G37_Coupe",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.966Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.966Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863586"),
  "name": "G37 Sedan",
  "niceName": "g37-sedan",
  "years": [
    "2010"
  ],
  "edmundsId": "Infiniti_G37_Sedan",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.966Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.966Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863587"),
  "name": "I30",
  "niceName": "i30",
  "years": [
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001"
  ],
  "edmundsId": "Infiniti_I30",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.967Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.967Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863588"),
  "name": "I35",
  "niceName": "i35",
  "years": [
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": "Infiniti_I35",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.967Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.967Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863589"),
  "name": "J30",
  "niceName": "j30",
  "years": [
    "1993",
    "1994",
    "1995",
    "1996",
    "1997"
  ],
  "edmundsId": "Infiniti_J30",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.968Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.968Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86358a"),
  "name": "JX",
  "niceName": "jx",
  "years": [
    "2013"
  ],
  "edmundsId": "Infiniti_JX",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.968Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.968Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86358b"),
  "name": "M",
  "niceName": "m",
  "years": [
    "2012",
    "2013"
  ],
  "edmundsId": "Infiniti_M",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.969Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.969Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86358c"),
  "name": "M30",
  "niceName": "m30",
  "years": [
    "1990",
    "1991",
    "1992"
  ],
  "edmundsId": "Infiniti_M30",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.970Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.970Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86358d"),
  "name": "M35",
  "niceName": "m35",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": "Infiniti_M35",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.970Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.970Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86358e"),
  "name": "M37",
  "niceName": "m37",
  "years": [
    "2011"
  ],
  "edmundsId": "Infiniti_M37",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.971Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.971Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86358f"),
  "name": "M45",
  "niceName": "m45",
  "years": [
    "2003",
    "2004",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": "Infiniti_M45",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.971Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.971Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863590"),
  "name": "M56",
  "niceName": "m56",
  "years": [
    "2011"
  ],
  "edmundsId": "Infiniti_M56",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.972Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.972Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863591"),
  "name": "Q30",
  "niceName": "q30",
  "years": [
    "2016"
  ],
  "edmundsId": "Infiniti_Q30",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.972Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.972Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863592"),
  "name": "Q40",
  "niceName": "q40",
  "years": [
    "2015"
  ],
  "edmundsId": "Infiniti_Q40",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.973Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.973Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863593"),
  "name": "Q45",
  "niceName": "q45",
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
    "2006"
  ],
  "edmundsId": "Infiniti_Q45",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.973Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.973Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863594"),
  "name": "Q50",
  "niceName": "q50",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Infiniti_Q50",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.974Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.974Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863595"),
  "name": "Q60 Convertible",
  "niceName": "q60-convertible",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Infiniti_Q60_Convertible",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.974Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.974Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863596"),
  "name": "Q60 Coupe",
  "niceName": "q60-coupe",
  "years": [
    "2014",
    "2015",
    "2017"
  ],
  "edmundsId": "Infiniti_Q60_Coupe",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.975Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.975Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863597"),
  "name": "Q70",
  "niceName": "q70",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Infiniti_Q70",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.975Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.975Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863598"),
  "name": "QX",
  "niceName": "qx",
  "years": [
    "2012",
    "2013"
  ],
  "edmundsId": "Infiniti_QX",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.976Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.976Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f863599"),
  "name": "QX30",
  "niceName": "qx30",
  "years": [
    "2016"
  ],
  "edmundsId": "Infiniti_QX30",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.976Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.976Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86359a"),
  "name": "QX4",
  "niceName": "qx4",
  "years": [
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Infiniti_QX4",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.977Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.977Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86359b"),
  "name": "QX50",
  "niceName": "qx50",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Infiniti_QX50",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.977Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.977Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86359c"),
  "name": "QX56",
  "niceName": "qx56",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Infiniti_QX56",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.978Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.978Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86359d"),
  "name": "QX60",
  "niceName": "qx60",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Infiniti_QX60",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.978Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.978Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86359e"),
  "name": "QX70",
  "niceName": "qx70",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Infiniti_QX70",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.979Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.979Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e521fd96d81f86359f"),
  "name": "QX80",
  "niceName": "qx80",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Infiniti_QX80",
  "make": ObjectId("550b28a0229533b024084064"),
  "createdAt": ISODate("2015-03-19T19:56:21.979Z"),
  "updatedAt": ISODate("2015-03-19T19:56:21.979Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e821fd96d81f86372f"),
  "name": "Amigo",
  "niceName": "amigo",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "Isuzu_Amigo",
  "make": ObjectId("550b28a0229533b024084065"),
  "createdAt": ISODate("2015-03-19T19:56:24.228Z"),
  "updatedAt": ISODate("2015-03-19T19:56:24.228Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e821fd96d81f863730"),
  "name": "Ascender",
  "niceName": "ascender",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Isuzu_Ascender",
  "make": ObjectId("550b28a0229533b024084065"),
  "createdAt": ISODate("2015-03-19T19:56:24.228Z"),
  "updatedAt": ISODate("2015-03-19T19:56:24.228Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e821fd96d81f863731"),
  "name": "Axiom",
  "niceName": "axiom",
  "years": [
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": "Isuzu_Axiom",
  "make": ObjectId("550b28a0229533b024084065"),
  "createdAt": ISODate("2015-03-19T19:56:24.229Z"),
  "updatedAt": ISODate("2015-03-19T19:56:24.229Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e821fd96d81f863733"),
  "name": "Impulse",
  "niceName": "impulse",
  "years": [
    "1990",
    "1991",
    "1992"
  ],
  "edmundsId": "Isuzu_Impulse",
  "make": ObjectId("550b28a0229533b024084065"),
  "createdAt": ISODate("2015-03-19T19:56:24.230Z"),
  "updatedAt": ISODate("2015-03-19T19:56:24.230Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e821fd96d81f863732"),
  "name": "Hombre",
  "niceName": "hombre",
  "years": [
    "1996",
    "1997",
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "Isuzu_Hombre",
  "make": ObjectId("550b28a0229533b024084065"),
  "createdAt": ISODate("2015-03-19T19:56:24.230Z"),
  "updatedAt": ISODate("2015-03-19T19:56:24.230Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e821fd96d81f863734"),
  "name": "Oasis",
  "niceName": "oasis",
  "years": [
    "1996",
    "1997",
    "1998",
    "1999"
  ],
  "edmundsId": "Isuzu_Oasis",
  "make": ObjectId("550b28a0229533b024084065"),
  "createdAt": ISODate("2015-03-19T19:56:24.231Z"),
  "updatedAt": ISODate("2015-03-19T19:56:24.231Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e821fd96d81f863735"),
  "name": "Pickup",
  "niceName": "pickup",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Isuzu_Pickup",
  "make": ObjectId("550b28a0229533b024084065"),
  "createdAt": ISODate("2015-03-19T19:56:24.232Z"),
  "updatedAt": ISODate("2015-03-19T19:56:24.232Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e821fd96d81f863736"),
  "name": "Rodeo",
  "niceName": "rodeo",
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
    "2004"
  ],
  "edmundsId": "Isuzu_Rodeo",
  "make": ObjectId("550b28a0229533b024084065"),
  "createdAt": ISODate("2015-03-19T19:56:24.233Z"),
  "updatedAt": ISODate("2015-03-19T19:56:24.233Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e821fd96d81f863737"),
  "name": "Rodeo Sport",
  "niceName": "rodeo-sport",
  "years": [
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Isuzu_Rodeo_Sport",
  "make": ObjectId("550b28a0229533b024084065"),
  "createdAt": ISODate("2015-03-19T19:56:24.234Z"),
  "updatedAt": ISODate("2015-03-19T19:56:24.234Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e821fd96d81f863738"),
  "name": "Stylus",
  "niceName": "stylus",
  "years": [
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Isuzu_Stylus",
  "make": ObjectId("550b28a0229533b024084065"),
  "createdAt": ISODate("2015-03-19T19:56:24.235Z"),
  "updatedAt": ISODate("2015-03-19T19:56:24.235Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e821fd96d81f863739"),
  "name": "Trooper",
  "niceName": "trooper",
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
    "2002"
  ],
  "edmundsId": "Isuzu_Trooper",
  "make": ObjectId("550b28a0229533b024084065"),
  "createdAt": ISODate("2015-03-19T19:56:24.236Z"),
  "updatedAt": ISODate("2015-03-19T19:56:24.236Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e821fd96d81f86373a"),
  "name": "VehiCROSS",
  "niceName": "vehicross",
  "years": [
    "1999",
    "2000",
    "2001"
  ],
  "edmundsId": "Isuzu_VehiCROSS",
  "make": ObjectId("550b28a0229533b024084065"),
  "createdAt": ISODate("2015-03-19T19:56:24.237Z"),
  "updatedAt": ISODate("2015-03-19T19:56:24.237Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29e821fd96d81f86373b"),
  "name": "i-Series",
  "niceName": "i-series",
  "years": [
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Isuzu_i_Series",
  "make": ObjectId("550b28a0229533b024084065"),
  "createdAt": ISODate("2015-03-19T19:56:24.238Z"),
  "updatedAt": ISODate("2015-03-19T19:56:24.238Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ea21fd96d81f863899"),
  "name": "F-PACE",
  "niceName": "f-pace",
  "years": [
    "2016"
  ],
  "edmundsId": "Jaguar_F_PACE",
  "make": ObjectId("550b28a0229533b024084066"),
  "createdAt": ISODate("2015-03-19T19:56:26.493Z"),
  "updatedAt": ISODate("2015-03-19T19:56:26.493Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ea21fd96d81f86389a"),
  "name": "F-TYPE",
  "niceName": "f-type",
  "years": [
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Jaguar_F_TYPE",
  "make": ObjectId("550b28a0229533b024084066"),
  "createdAt": ISODate("2015-03-19T19:56:26.494Z"),
  "updatedAt": ISODate("2015-03-19T19:56:26.494Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ea21fd96d81f86389b"),
  "name": "S-Type",
  "niceName": "s-type",
  "years": [
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
  "edmundsId": "Jaguar_S_Type",
  "make": ObjectId("550b28a0229533b024084066"),
  "createdAt": ISODate("2015-03-19T19:56:26.494Z"),
  "updatedAt": ISODate("2015-03-19T19:56:26.494Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ea21fd96d81f86389c"),
  "name": "X-Type",
  "niceName": "x-type",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Jaguar_X_Type",
  "make": ObjectId("550b28a0229533b024084066"),
  "createdAt": ISODate("2015-03-19T19:56:26.495Z"),
  "updatedAt": ISODate("2015-03-19T19:56:26.495Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ea21fd96d81f86389d"),
  "name": "XE",
  "niceName": "xe",
  "years": [
    "2017"
  ],
  "edmundsId": "Jaguar_XE",
  "make": ObjectId("550b28a0229533b024084066"),
  "createdAt": ISODate("2015-03-19T19:56:26.496Z"),
  "updatedAt": ISODate("2015-03-19T19:56:26.496Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ea21fd96d81f86389e"),
  "name": "XF",
  "niceName": "xf",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Jaguar_XF",
  "make": ObjectId("550b28a0229533b024084066"),
  "createdAt": ISODate("2015-03-19T19:56:26.496Z"),
  "updatedAt": ISODate("2015-03-19T19:56:26.496Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ea21fd96d81f86389f"),
  "name": "XJ",
  "niceName": "xj",
  "years": [
    "2009",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Jaguar_XJ",
  "make": ObjectId("550b28a0229533b024084066"),
  "createdAt": ISODate("2015-03-19T19:56:26.497Z"),
  "updatedAt": ISODate("2015-03-19T19:56:26.497Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ea21fd96d81f8638a0"),
  "name": "XJ-Series",
  "niceName": "xj-series",
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
  "edmundsId": "Jaguar_XJ_Series",
  "make": ObjectId("550b28a0229533b024084066"),
  "createdAt": ISODate("2015-03-19T19:56:26.497Z"),
  "updatedAt": ISODate("2015-03-19T19:56:26.497Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ea21fd96d81f8638a1"),
  "name": "XJR",
  "niceName": "xjr",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "Jaguar_XJR",
  "make": ObjectId("550b28a0229533b024084066"),
  "createdAt": ISODate("2015-03-19T19:56:26.498Z"),
  "updatedAt": ISODate("2015-03-19T19:56:26.498Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ea21fd96d81f8638a2"),
  "name": "XK",
  "niceName": "xk",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Jaguar_XK",
  "make": ObjectId("550b28a0229533b024084066"),
  "createdAt": ISODate("2015-03-19T19:56:26.498Z"),
  "updatedAt": ISODate("2015-03-19T19:56:26.498Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ea21fd96d81f8638a3"),
  "name": "XK-Series",
  "niceName": "xk-series",
  "years": [
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
  "edmundsId": "Jaguar_XK_Series",
  "make": ObjectId("550b28a0229533b024084066"),
  "createdAt": ISODate("2015-03-19T19:56:26.499Z"),
  "updatedAt": ISODate("2015-03-19T19:56:26.499Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ea21fd96d81f8638a4"),
  "name": "XKR",
  "niceName": "xkr",
  "years": [
    "2000"
  ],
  "edmundsId": "Jaguar_XKR",
  "make": ObjectId("550b28a0229533b024084066"),
  "createdAt": ISODate("2015-03-19T19:56:26.500Z"),
  "updatedAt": ISODate("2015-03-19T19:56:26.500Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ed21fd96d81f8639e4"),
  "name": "Comanche",
  "niceName": "comanche",
  "years": [
    "1990",
    "1991",
    "1992"
  ],
  "edmundsId": "Jeep_Comanche",
  "make": ObjectId("550b28a0229533b024084067"),
  "createdAt": ISODate("2015-03-19T19:56:29.543Z"),
  "updatedAt": ISODate("2015-03-19T19:56:29.543Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ed21fd96d81f8639e5"),
  "name": "Commander",
  "niceName": "commander",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": "Jeep_Commander",
  "make": ObjectId("550b28a0229533b024084067"),
  "createdAt": ISODate("2015-03-19T19:56:29.544Z"),
  "updatedAt": ISODate("2015-03-19T19:56:29.544Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ed21fd96d81f8639e3"),
  "name": "Cherokee",
  "niceName": "cherokee",
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
    "2014",
    "2015"
  ],
  "edmundsId": "Jeep_Cherokee",
  "make": ObjectId("550b28a0229533b024084067"),
  "createdAt": ISODate("2015-03-19T19:56:29.542Z"),
  "updatedAt": ISODate("2015-03-19T19:56:29.542Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ed21fd96d81f8639e6"),
  "name": "Compass",
  "niceName": "compass",
  "years": [
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
  "edmundsId": "Jeep_Compass",
  "make": ObjectId("550b28a0229533b024084067"),
  "createdAt": ISODate("2015-03-19T19:56:29.545Z"),
  "updatedAt": ISODate("2015-03-19T19:56:29.545Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ed21fd96d81f8639e7"),
  "name": "Grand Cherokee",
  "niceName": "grand-cherokee",
  "years": [
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
  "edmundsId": "Jeep_Grand_Cherokee",
  "make": ObjectId("550b28a0229533b024084067"),
  "createdAt": ISODate("2015-03-19T19:56:29.546Z"),
  "updatedAt": ISODate("2015-03-19T19:56:29.546Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ed21fd96d81f8639e8"),
  "name": "Grand Cherokee SRT",
  "niceName": "grand-cherokee-srt",
  "years": [
    "2015"
  ],
  "edmundsId": "Jeep_Grand_Cherokee_SRT",
  "make": ObjectId("550b28a0229533b024084067"),
  "createdAt": ISODate("2015-03-19T19:56:29.547Z"),
  "updatedAt": ISODate("2015-03-19T19:56:29.547Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ed21fd96d81f8639ea"),
  "name": "Liberty",
  "niceName": "liberty",
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
    "2012"
  ],
  "edmundsId": "Jeep_Liberty",
  "make": ObjectId("550b28a0229533b024084067"),
  "createdAt": ISODate("2015-03-19T19:56:29.549Z"),
  "updatedAt": ISODate("2015-03-19T19:56:29.549Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ed21fd96d81f8639e9"),
  "name": "Grand Wagoneer",
  "niceName": "grand-wagoneer",
  "years": [
    "1990",
    "1991",
    "1993"
  ],
  "edmundsId": "Jeep_Grand_Wagoneer",
  "make": ObjectId("550b28a0229533b024084067"),
  "createdAt": ISODate("2015-03-19T19:56:29.548Z"),
  "updatedAt": ISODate("2015-03-19T19:56:29.548Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ed21fd96d81f8639eb"),
  "name": "Patriot",
  "niceName": "patriot",
  "years": [
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
  "edmundsId": "Jeep_Patriot",
  "make": ObjectId("550b28a0229533b024084067"),
  "createdAt": ISODate("2015-03-19T19:56:29.550Z"),
  "updatedAt": ISODate("2015-03-19T19:56:29.550Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ed21fd96d81f8639ec"),
  "name": "Renegade",
  "niceName": "renegade",
  "years": [
    "2015"
  ],
  "edmundsId": "Jeep_Renegade",
  "make": ObjectId("550b28a0229533b024084067"),
  "createdAt": ISODate("2015-03-19T19:56:29.551Z"),
  "updatedAt": ISODate("2015-03-19T19:56:29.551Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ed21fd96d81f8639ed"),
  "name": "Wagoneer",
  "niceName": "wagoneer",
  "years": [
    "1990"
  ],
  "edmundsId": "Jeep_Wagoneer",
  "make": ObjectId("550b28a0229533b024084067"),
  "createdAt": ISODate("2015-03-19T19:56:29.552Z"),
  "updatedAt": ISODate("2015-03-19T19:56:29.552Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29ed21fd96d81f8639ee"),
  "name": "Wrangler",
  "niceName": "wrangler",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
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
  "edmundsId": "Jeep_Wrangler",
  "make": ObjectId("550b28a0229533b024084067"),
  "createdAt": ISODate("2015-03-19T19:56:29.553Z"),
  "updatedAt": ISODate("2015-03-19T19:56:29.553Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cb1"),
  "name": "Amanti",
  "niceName": "amanti",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Kia_Amanti",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.218Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.218Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cb2"),
  "name": "Borrego",
  "niceName": "borrego",
  "years": [
    "2009"
  ],
  "edmundsId": "Kia_Borrego",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.218Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.218Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cb3"),
  "name": "Cadenza",
  "niceName": "cadenza",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Kia_Cadenza",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.219Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.219Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cb4"),
  "name": "Forte",
  "niceName": "forte",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Kia_Forte",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.220Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.220Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cb5"),
  "name": "K900",
  "niceName": "k900",
  "years": [
    "2015"
  ],
  "edmundsId": "Kia_K900",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.220Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.220Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cb6"),
  "name": "Optima",
  "niceName": "optima",
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
    "2015",
    "2016"
  ],
  "edmundsId": "Kia_Optima",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.221Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.221Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cb7"),
  "name": "Optima Hybrid",
  "niceName": "optima-hybrid",
  "years": [
    "2015"
  ],
  "edmundsId": "Kia_Optima_Hybrid",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.222Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.222Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cb8"),
  "name": "Rio",
  "niceName": "rio",
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
  "edmundsId": "Kia_Rio",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.222Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.222Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cb9"),
  "name": "Rondo",
  "niceName": "rondo",
  "years": [
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Kia_Rondo",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.223Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.223Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cba"),
  "name": "Sedona",
  "niceName": "sedona",
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
    "2014",
    "2015"
  ],
  "edmundsId": "Kia_Sedona",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.223Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.223Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cbb"),
  "name": "Sephia",
  "niceName": "sephia",
  "years": [
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001"
  ],
  "edmundsId": "Kia_Sephia",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.224Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.224Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cbc"),
  "name": "Sorento",
  "niceName": "sorento",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Kia_Sorento",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.224Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.224Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cbd"),
  "name": "Soul",
  "niceName": "soul",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Kia_Soul",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.225Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.225Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cbe"),
  "name": "Soul EV",
  "niceName": "soul-ev",
  "years": [
    "2015"
  ],
  "edmundsId": "Kia_Soul_EV",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.225Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.225Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cbf"),
  "name": "Spectra",
  "niceName": "spectra",
  "years": [
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
  "edmundsId": "Kia_Spectra",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.226Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.226Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f021fd96d81f863cc0"),
  "name": "Sportage",
  "niceName": "sportage",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
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
  "edmundsId": "Kia_Sportage",
  "make": ObjectId("550b28a0229533b024084068"),
  "createdAt": ISODate("2015-03-19T19:56:32.226Z"),
  "updatedAt": ISODate("2015-03-19T19:56:32.226Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f221fd96d81f863f5e"),
  "name": "Aventador",
  "niceName": "aventador",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Lamborghini_Aventador",
  "make": ObjectId("550b28a0229533b024084069"),
  "createdAt": ISODate("2015-03-19T19:56:34.391Z"),
  "updatedAt": ISODate("2015-03-19T19:56:34.391Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f221fd96d81f863f5f"),
  "name": "Diablo",
  "niceName": "diablo",
  "years": [
    "2001"
  ],
  "edmundsId": "Lamborghini_Diablo",
  "make": ObjectId("550b28a0229533b024084069"),
  "createdAt": ISODate("2015-03-19T19:56:34.392Z"),
  "updatedAt": ISODate("2015-03-19T19:56:34.392Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f221fd96d81f863f60"),
  "name": "Gallardo",
  "niceName": "gallardo",
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
    "2014"
  ],
  "edmundsId": "Lamborghini_Gallardo",
  "make": ObjectId("550b28a0229533b024084069"),
  "createdAt": ISODate("2015-03-19T19:56:34.392Z"),
  "updatedAt": ISODate("2015-03-19T19:56:34.392Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f221fd96d81f863f61"),
  "name": "Huracan",
  "niceName": "huracan",
  "years": [
    "2015"
  ],
  "edmundsId": "Lamborghini_Huracan",
  "make": ObjectId("550b28a0229533b024084069"),
  "createdAt": ISODate("2015-03-19T19:56:34.393Z"),
  "updatedAt": ISODate("2015-03-19T19:56:34.393Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f221fd96d81f863f62"),
  "name": "Murcielago",
  "niceName": "murcielago",
  "years": [
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
  "edmundsId": "Lamborghini_Murcielago",
  "make": ObjectId("550b28a0229533b024084069"),
  "createdAt": ISODate("2015-03-19T19:56:34.394Z"),
  "updatedAt": ISODate("2015-03-19T19:56:34.394Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f221fd96d81f863f63"),
  "name": "Reventon",
  "niceName": "reventon",
  "years": [
    "2008"
  ],
  "edmundsId": "Lamborghini_Reventon",
  "make": ObjectId("550b28a0229533b024084069"),
  "createdAt": ISODate("2015-03-19T19:56:34.394Z"),
  "updatedAt": ISODate("2015-03-19T19:56:34.394Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f421fd96d81f863fb1"),
  "name": "Defender",
  "niceName": "defender",
  "years": [
    "1993",
    "1994",
    "1995",
    "1997"
  ],
  "edmundsId": "Land_Rover_Defender",
  "make": ObjectId("550b28a0229533b02408406a"),
  "createdAt": ISODate("2015-03-19T19:56:36.793Z"),
  "updatedAt": ISODate("2015-03-19T19:56:36.793Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f421fd96d81f863fb2"),
  "name": "Discovery",
  "niceName": "discovery",
  "years": [
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2003",
    "2004"
  ],
  "edmundsId": "Land_Rover_Discovery",
  "make": ObjectId("550b28a0229533b02408406a"),
  "createdAt": ISODate("2015-03-19T19:56:36.793Z"),
  "updatedAt": ISODate("2015-03-19T19:56:36.793Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f421fd96d81f863fb3"),
  "name": "Discovery Series II",
  "niceName": "discovery-series-ii",
  "years": [
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "Land_Rover_Discovery_Series_II",
  "make": ObjectId("550b28a0229533b02408406a"),
  "createdAt": ISODate("2015-03-19T19:56:36.794Z"),
  "updatedAt": ISODate("2015-03-19T19:56:36.794Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f421fd96d81f863fb4"),
  "name": "Discovery Sport",
  "niceName": "discovery-sport",
  "years": [
    "2015"
  ],
  "edmundsId": "Land_Rover_Discovery_Sport",
  "make": ObjectId("550b28a0229533b02408406a"),
  "createdAt": ISODate("2015-03-19T19:56:36.795Z"),
  "updatedAt": ISODate("2015-03-19T19:56:36.795Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f421fd96d81f863fb5"),
  "name": "Freelander",
  "niceName": "freelander",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005"
  ],
  "edmundsId": "Land_Rover_Freelander",
  "make": ObjectId("550b28a0229533b02408406a"),
  "createdAt": ISODate("2015-03-19T19:56:36.801Z"),
  "updatedAt": ISODate("2015-03-19T19:56:36.801Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f421fd96d81f863fb6"),
  "name": "LR2",
  "niceName": "lr2",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Land_Rover_LR2",
  "make": ObjectId("550b28a0229533b02408406a"),
  "createdAt": ISODate("2015-03-19T19:56:36.802Z"),
  "updatedAt": ISODate("2015-03-19T19:56:36.802Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f421fd96d81f863fb7"),
  "name": "LR3",
  "niceName": "lr3",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Land_Rover_LR3",
  "make": ObjectId("550b28a0229533b02408406a"),
  "createdAt": ISODate("2015-03-19T19:56:36.803Z"),
  "updatedAt": ISODate("2015-03-19T19:56:36.803Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f421fd96d81f863fb8"),
  "name": "LR4",
  "niceName": "lr4",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Land_Rover_LR4",
  "make": ObjectId("550b28a0229533b02408406a"),
  "createdAt": ISODate("2015-03-19T19:56:36.803Z"),
  "updatedAt": ISODate("2015-03-19T19:56:36.803Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f421fd96d81f863fb9"),
  "name": "Range Rover",
  "niceName": "range-rover",
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
  "edmundsId": "Land_Rover_Range_Rover",
  "make": ObjectId("550b28a0229533b02408406a"),
  "createdAt": ISODate("2015-03-19T19:56:36.804Z"),
  "updatedAt": ISODate("2015-03-19T19:56:36.804Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f421fd96d81f863fba"),
  "name": "Range Rover Evoque",
  "niceName": "range-rover-evoque",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Land_Rover_Range_Rover_Evoque",
  "make": ObjectId("550b28a0229533b02408406a"),
  "createdAt": ISODate("2015-03-19T19:56:36.805Z"),
  "updatedAt": ISODate("2015-03-19T19:56:36.805Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f421fd96d81f863fbb"),
  "name": "Range Rover Sport",
  "niceName": "range-rover-sport",
  "years": [
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
  "edmundsId": "Land_Rover_Range_Rover_Sport",
  "make": ObjectId("550b28a0229533b02408406a"),
  "createdAt": ISODate("2015-03-19T19:56:36.805Z"),
  "updatedAt": ISODate("2015-03-19T19:56:36.805Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640a3"),
  "name": "CT 200h",
  "niceName": "ct-200h",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Lexus_CT_200h",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.198Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.198Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640a4"),
  "name": "ES 250",
  "niceName": "es-250",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Lexus_ES_250",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.199Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.199Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640a5"),
  "name": "ES 300",
  "niceName": "es-300",
  "years": [
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
    "2003"
  ],
  "edmundsId": "Lexus_ES_300",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.199Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.199Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640a6"),
  "name": "ES 300h",
  "niceName": "es-300h",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Lexus_ES_300h",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.200Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.200Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640a7"),
  "name": "ES 330",
  "niceName": "es-330",
  "years": [
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Lexus_ES_330",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.200Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.200Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640a8"),
  "name": "ES 350",
  "niceName": "es-350",
  "years": [
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
  "edmundsId": "Lexus_ES_350",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.201Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.201Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640a9"),
  "name": "GS 300",
  "niceName": "gs-300",
  "years": [
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
    "2006"
  ],
  "edmundsId": "Lexus_GS_300",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.202Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.202Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640aa"),
  "name": "GS 350",
  "niceName": "gs-350",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Lexus_GS_350",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.202Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.202Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640ab"),
  "name": "GS 400",
  "niceName": "gs-400",
  "years": [
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "Lexus_GS_400",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.203Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.203Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640ac"),
  "name": "GS 430",
  "niceName": "gs-430",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Lexus_GS_430",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.203Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.203Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640ad"),
  "name": "GS 450h",
  "niceName": "gs-450h",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Lexus_GS_450h",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.204Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.204Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640ae"),
  "name": "GS 460",
  "niceName": "gs-460",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Lexus_GS_460",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.204Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.204Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640af"),
  "name": "GS F",
  "niceName": "gs-f",
  "years": [
    "2016"
  ],
  "edmundsId": "Lexus_GS_F",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.205Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.205Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640b0"),
  "name": "GX 460",
  "niceName": "gx-460",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Lexus_GX_460",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.205Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.205Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640b1"),
  "name": "GX 470",
  "niceName": "gx-470",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Lexus_GX_470",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.206Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.206Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640b2"),
  "name": "HS 250h",
  "niceName": "hs-250h",
  "years": [
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": "Lexus_HS_250h",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.206Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.206Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640b3"),
  "name": "IS 250",
  "niceName": "is-250",
  "years": [
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
  "edmundsId": "Lexus_IS_250",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.207Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.207Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640b4"),
  "name": "IS 250 C",
  "niceName": "is-250-c",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Lexus_IS_250_C",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.207Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.207Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640b5"),
  "name": "IS 300",
  "niceName": "is-300",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005"
  ],
  "edmundsId": "Lexus_IS_300",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.207Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.207Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640b6"),
  "name": "IS 350",
  "niceName": "is-350",
  "years": [
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
  "edmundsId": "Lexus_IS_350",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.208Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.208Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640b7"),
  "name": "IS 350 C",
  "niceName": "is-350-c",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Lexus_IS_350_C",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.208Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.208Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640b8"),
  "name": "IS F",
  "niceName": "is-f",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Lexus_IS_F",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.209Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.209Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640b9"),
  "name": "LFA",
  "niceName": "lfa",
  "years": [
    "2012"
  ],
  "edmundsId": "Lexus_LFA",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.209Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.209Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640ba"),
  "name": "LS 400",
  "niceName": "ls-400",
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
    "2000"
  ],
  "edmundsId": "Lexus_LS_400",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.210Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.210Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640bb"),
  "name": "LS 430",
  "niceName": "ls-430",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Lexus_LS_430",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.210Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.210Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640bc"),
  "name": "LS 460",
  "niceName": "ls-460",
  "years": [
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
  "edmundsId": "Lexus_LS_460",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.211Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.211Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640bd"),
  "name": "LS 600h L",
  "niceName": "ls-600h-l",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Lexus_LS_600h_L",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.211Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.211Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640be"),
  "name": "LX 450",
  "niceName": "lx-450",
  "years": [
    "1996",
    "1997"
  ],
  "edmundsId": "Lexus_LX_450",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.212Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.212Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640bf"),
  "name": "LX 470",
  "niceName": "lx-470",
  "years": [
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Lexus_LX_470",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.212Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.212Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640c0"),
  "name": "LX 570",
  "niceName": "lx-570",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Lexus_LX_570",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.213Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.213Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640c1"),
  "name": "NX 200t",
  "niceName": "nx-200t",
  "years": [
    "2015"
  ],
  "edmundsId": "Lexus_NX_200t",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.214Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.214Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640c2"),
  "name": "NX 300h",
  "niceName": "nx-300h",
  "years": [
    "2015"
  ],
  "edmundsId": "Lexus_NX_300h",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.215Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.215Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640c3"),
  "name": "RC 350",
  "niceName": "rc-350",
  "years": [
    "2015"
  ],
  "edmundsId": "Lexus_RC_350",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.216Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.216Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640c4"),
  "name": "RC F",
  "niceName": "rc-f",
  "years": [
    "2015"
  ],
  "edmundsId": "Lexus_RC_F",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.217Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.217Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640c5"),
  "name": "RX",
  "niceName": "rx",
  "years": [
    "2017"
  ],
  "edmundsId": "Lexus_RX",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.218Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.218Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640c6"),
  "name": "RX 300",
  "niceName": "rx-300",
  "years": [
    "1999",
    "2000",
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Lexus_RX_300",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.219Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.219Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640c7"),
  "name": "RX 330",
  "niceName": "rx-330",
  "years": [
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Lexus_RX_330",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.220Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.220Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640c8"),
  "name": "RX 350",
  "niceName": "rx-350",
  "years": [
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
  "edmundsId": "Lexus_RX_350",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.221Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.221Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640c9"),
  "name": "RX 400h",
  "niceName": "rx-400h",
  "years": [
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Lexus_RX_400h",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.222Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.222Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640ca"),
  "name": "RX 450h",
  "niceName": "rx-450h",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Lexus_RX_450h",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.222Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.222Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640cb"),
  "name": "SC 300",
  "niceName": "sc-300",
  "years": [
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "Lexus_SC_300",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.223Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.223Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640cc"),
  "name": "SC 400",
  "niceName": "sc-400",
  "years": [
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "Lexus_SC_400",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.224Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.224Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f721fd96d81f8640cd"),
  "name": "SC 430",
  "niceName": "sc-430",
  "years": [
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
  "edmundsId": "Lexus_SC_430",
  "make": ObjectId("550b28a0229533b02408406b"),
  "createdAt": ISODate("2015-03-19T19:56:39.224Z"),
  "updatedAt": ISODate("2015-03-19T19:56:39.224Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f864240"),
  "name": "Aviator",
  "niceName": "aviator",
  "years": [
    "2003",
    "2004",
    "2005"
  ],
  "edmundsId": "Lincoln_Aviator",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.481Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.481Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f864241"),
  "name": "Blackwood",
  "niceName": "blackwood",
  "years": [
    "2002"
  ],
  "edmundsId": "Lincoln_Blackwood",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.482Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.482Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f864242"),
  "name": "Continental",
  "niceName": "continental",
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
    "2002"
  ],
  "edmundsId": "Lincoln_Continental",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.483Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.483Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f864243"),
  "name": "LS",
  "niceName": "ls",
  "years": [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Lincoln_LS",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.483Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.483Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f864244"),
  "name": "MKC",
  "niceName": "mkc",
  "years": [
    "2015"
  ],
  "edmundsId": "Lincoln_MKC",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.484Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.484Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f864245"),
  "name": "MKS",
  "niceName": "mks",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Lincoln_MKS",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.484Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.484Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f864246"),
  "name": "MKT",
  "niceName": "mkt",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Lincoln_MKT",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.485Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.485Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f864247"),
  "name": "MKX",
  "niceName": "mkx",
  "years": [
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
  "edmundsId": "Lincoln_MKX",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.485Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.485Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f864248"),
  "name": "MKZ",
  "niceName": "mkz",
  "years": [
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
  "edmundsId": "Lincoln_MKZ",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.486Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.486Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f864249"),
  "name": "MKZ Hybrid",
  "niceName": "mkz-hybrid",
  "years": [
    "2011"
  ],
  "edmundsId": "Lincoln_MKZ_Hybrid",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.487Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.487Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f86424a"),
  "name": "Mark LT",
  "niceName": "mark-lt",
  "years": [
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Lincoln_Mark_LT",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.487Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.487Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f86424b"),
  "name": "Mark VII",
  "niceName": "mark-vii",
  "years": [
    "1990",
    "1991",
    "1992"
  ],
  "edmundsId": "Lincoln_Mark_VII",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.488Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.488Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f86424c"),
  "name": "Mark VIII",
  "niceName": "mark-viii",
  "years": [
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998"
  ],
  "edmundsId": "Lincoln_Mark_VIII",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.488Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.488Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f86424d"),
  "name": "Navigator",
  "niceName": "navigator",
  "years": [
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
  "edmundsId": "Lincoln_Navigator",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.489Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.489Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f86424e"),
  "name": "Navigator L",
  "niceName": "navigator-l",
  "years": [
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Lincoln_Navigator_L",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.490Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.490Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f86424f"),
  "name": "Town Car",
  "niceName": "town-car",
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
  "edmundsId": "Lincoln_Town_Car",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.490Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.490Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29f921fd96d81f864250"),
  "name": "Zephyr",
  "niceName": "zephyr",
  "years": [
    "2006"
  ],
  "edmundsId": "Lincoln_Zephyr",
  "make": ObjectId("550b28a0229533b02408406c"),
  "createdAt": ISODate("2015-03-19T19:56:41.491Z"),
  "updatedAt": ISODate("2015-03-19T19:56:41.491Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29fb21fd96d81f86439d"),
  "name": "Elise",
  "niceName": "elise",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Lotus_Elise",
  "make": ObjectId("550b28a0229533b02408406d"),
  "createdAt": ISODate("2015-03-19T19:56:43.591Z"),
  "updatedAt": ISODate("2015-03-19T19:56:43.591Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29fb21fd96d81f86439e"),
  "name": "Esprit",
  "niceName": "esprit",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": "Lotus_Esprit",
  "make": ObjectId("550b28a0229533b02408406d"),
  "createdAt": ISODate("2015-03-19T19:56:43.592Z"),
  "updatedAt": ISODate("2015-03-19T19:56:43.592Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29fb21fd96d81f86439f"),
  "name": "Evora",
  "niceName": "evora",
  "years": [
    "2010",
    "2011",
    "2013"
  ],
  "edmundsId": "Lotus_Evora",
  "make": ObjectId("550b28a0229533b02408406d"),
  "createdAt": ISODate("2015-03-19T19:56:43.592Z"),
  "updatedAt": ISODate("2015-03-19T19:56:43.592Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29fb21fd96d81f8643a0"),
  "name": "Exige",
  "niceName": "exige",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Lotus_Exige",
  "make": ObjectId("550b28a0229533b02408406d"),
  "createdAt": ISODate("2015-03-19T19:56:43.593Z"),
  "updatedAt": ISODate("2015-03-19T19:56:43.593Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29fe21fd96d81f8643c5"),
  "name": "Cooper",
  "niceName": "cooper",
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
  "edmundsId": "MINI_Cooper",
  "make": ObjectId("550b28a0229533b02408406e"),
  "createdAt": ISODate("2015-03-19T19:56:46.216Z"),
  "updatedAt": ISODate("2015-03-19T19:56:46.216Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29fe21fd96d81f8643c6"),
  "name": "Cooper Clubman",
  "niceName": "cooper-clubman",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "MINI_Cooper_Clubman",
  "make": ObjectId("550b28a0229533b02408406e"),
  "createdAt": ISODate("2015-03-19T19:56:46.217Z"),
  "updatedAt": ISODate("2015-03-19T19:56:46.217Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29fe21fd96d81f8643c7"),
  "name": "Cooper Countryman",
  "niceName": "cooper-countryman",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "MINI_Cooper_Countryman",
  "make": ObjectId("550b28a0229533b02408406e"),
  "createdAt": ISODate("2015-03-19T19:56:46.218Z"),
  "updatedAt": ISODate("2015-03-19T19:56:46.218Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29fe21fd96d81f8643c8"),
  "name": "Cooper Coupe",
  "niceName": "cooper-coupe",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "MINI_Cooper_Coupe",
  "make": ObjectId("550b28a0229533b02408406e"),
  "createdAt": ISODate("2015-03-19T19:56:46.218Z"),
  "updatedAt": ISODate("2015-03-19T19:56:46.218Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29fe21fd96d81f8643c9"),
  "name": "Cooper Paceman",
  "niceName": "cooper-paceman",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "MINI_Cooper_Paceman",
  "make": ObjectId("550b28a0229533b02408406e"),
  "createdAt": ISODate("2015-03-19T19:56:46.219Z"),
  "updatedAt": ISODate("2015-03-19T19:56:46.219Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b29fe21fd96d81f8643ca"),
  "name": "Cooper Roadster",
  "niceName": "cooper-roadster",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "MINI_Cooper_Roadster",
  "make": ObjectId("550b28a0229533b02408406e"),
  "createdAt": ISODate("2015-03-19T19:56:46.220Z"),
  "updatedAt": ISODate("2015-03-19T19:56:46.220Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0021fd96d81f864457"),
  "name": "Coupe",
  "niceName": "coupe",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Maserati_Coupe",
  "make": ObjectId("550b28a0229533b02408406f"),
  "createdAt": ISODate("2015-03-19T19:56:48.360Z"),
  "updatedAt": ISODate("2015-03-19T19:56:48.360Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0021fd96d81f864458"),
  "name": "Ghibli",
  "niceName": "ghibli",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Maserati_Ghibli",
  "make": ObjectId("550b28a0229533b02408406f"),
  "createdAt": ISODate("2015-03-19T19:56:48.360Z"),
  "updatedAt": ISODate("2015-03-19T19:56:48.360Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0021fd96d81f864459"),
  "name": "GranSport",
  "niceName": "gransport",
  "years": [
    "2005",
    "2006"
  ],
  "edmundsId": "Maserati_GranSport",
  "make": ObjectId("550b28a0229533b02408406f"),
  "createdAt": ISODate("2015-03-19T19:56:48.361Z"),
  "updatedAt": ISODate("2015-03-19T19:56:48.361Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0021fd96d81f86445a"),
  "name": "GranTurismo",
  "niceName": "granturismo",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Maserati_GranTurismo",
  "make": ObjectId("550b28a0229533b02408406f"),
  "createdAt": ISODate("2015-03-19T19:56:48.361Z"),
  "updatedAt": ISODate("2015-03-19T19:56:48.361Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0021fd96d81f86445b"),
  "name": "GranTurismo Convertible",
  "niceName": "granturismo-convertible",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Maserati_GranTurismo_Convertible",
  "make": ObjectId("550b28a0229533b02408406f"),
  "createdAt": ISODate("2015-03-19T19:56:48.362Z"),
  "updatedAt": ISODate("2015-03-19T19:56:48.362Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0021fd96d81f86445c"),
  "name": "Levante",
  "niceName": "levante",
  "years": [
    "2016"
  ],
  "edmundsId": "Maserati_Levante",
  "make": ObjectId("550b28a0229533b02408406f"),
  "createdAt": ISODate("2015-03-19T19:56:48.363Z"),
  "updatedAt": ISODate("2015-03-19T19:56:48.363Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0021fd96d81f86445d"),
  "name": "Quattroporte",
  "niceName": "quattroporte",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2014",
    "2015"
  ],
  "edmundsId": "Maserati_Quattroporte",
  "make": ObjectId("550b28a0229533b02408406f"),
  "createdAt": ISODate("2015-03-19T19:56:48.363Z"),
  "updatedAt": ISODate("2015-03-19T19:56:48.363Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0021fd96d81f86445e"),
  "name": "Spyder",
  "niceName": "spyder",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005"
  ],
  "edmundsId": "Maserati_Spyder",
  "make": ObjectId("550b28a0229533b02408406f"),
  "createdAt": ISODate("2015-03-19T19:56:48.364Z"),
  "updatedAt": ISODate("2015-03-19T19:56:48.364Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0421fd96d81f8644b5"),
  "name": "57",
  "niceName": "57",
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
  "edmundsId": "Maybach_57",
  "make": ObjectId("550b28a0229533b024084070"),
  "createdAt": ISODate("2015-03-19T19:56:52.540Z"),
  "updatedAt": ISODate("2015-03-19T19:56:52.541Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0421fd96d81f8644b7"),
  "name": "Landaulet",
  "niceName": "landaulet",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": "Maybach_Landaulet",
  "make": ObjectId("550b28a0229533b024084070"),
  "createdAt": ISODate("2015-03-19T19:56:52.543Z"),
  "updatedAt": ISODate("2015-03-19T19:56:52.543Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0421fd96d81f8644b6"),
  "name": "62",
  "niceName": "62",
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
  "edmundsId": "Maybach_62",
  "make": ObjectId("550b28a0229533b024084070"),
  "createdAt": ISODate("2015-03-19T19:56:52.542Z"),
  "updatedAt": ISODate("2015-03-19T19:56:52.542Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644dd"),
  "name": "323",
  "niceName": "323",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Mazda_323",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.552Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.552Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644de"),
  "name": "626",
  "niceName": "626",
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
    "2002"
  ],
  "edmundsId": "Mazda_626",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.553Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.553Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644df"),
  "name": "929",
  "niceName": "929",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Mazda_929",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.554Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.554Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644e0"),
  "name": "B-Series",
  "niceName": "b-series",
  "years": [
    "2001"
  ],
  "edmundsId": "Mazda_B_Series",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.554Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.554Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644e1"),
  "name": "B-Series Pickup",
  "niceName": "b-series-pickup",
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
    "2000"
  ],
  "edmundsId": "Mazda_B_Series_Pickup",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.555Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.555Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644e2"),
  "name": "B-Series Truck",
  "niceName": "b-series-truck",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Mazda_B_Series_Truck",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.555Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.555Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644e3"),
  "name": "CX-3",
  "niceName": "cx-3",
  "years": [
    "2016"
  ],
  "edmundsId": "Mazda_CX_3",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.556Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.556Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644e4"),
  "name": "CX-5",
  "niceName": "cx-5",
  "years": [
    "2013",
    "2014",
    "2015",
    "2016"
  ],
  "edmundsId": "Mazda_CX_5",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.556Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.556Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644e5"),
  "name": "CX-7",
  "niceName": "cx-7",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": "Mazda_CX_7",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.557Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.557Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644e6"),
  "name": "CX-9",
  "niceName": "cx-9",
  "years": [
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
  "edmundsId": "Mazda_CX_9",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.557Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.557Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644e7"),
  "name": "MPV",
  "niceName": "mpv",
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
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Mazda_MPV",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.558Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.558Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644e8"),
  "name": "MX-3",
  "niceName": "mx-3",
  "years": [
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Mazda_MX_3",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.559Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.559Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644e9"),
  "name": "MX-5 Miata",
  "niceName": "mx-5-miata",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
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
  "edmundsId": "Mazda_MX_5_Miata",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.559Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.559Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644ea"),
  "name": "MX-6",
  "niceName": "mx-6",
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
  "edmundsId": "Mazda_MX_6",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.560Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.560Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644eb"),
  "name": "Mazda2",
  "niceName": "mazda2",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2016"
  ],
  "edmundsId": "Mazda_Mazda2",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.560Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.560Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644ec"),
  "name": "Mazda3",
  "niceName": "mazda3",
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
    "2015"
  ],
  "edmundsId": "Mazda_Mazda3",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.561Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.561Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644ed"),
  "name": "Mazda5",
  "niceName": "mazda5",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Mazda_Mazda5",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.561Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.561Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644ee"),
  "name": "Mazda6",
  "niceName": "mazda6",
  "years": [
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
  "edmundsId": "Mazda_Mazda6",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.562Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.562Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644ef"),
  "name": "Mazdaspeed MX-5 Miata",
  "niceName": "mazdaspeed-mx-5-miata",
  "years": [
    "2004",
    "2005"
  ],
  "edmundsId": "Mazda_Mazdaspeed_MX_5_Miata",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.562Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.562Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644f0"),
  "name": "Mazdaspeed Mazda3",
  "niceName": "mazdaspeed-mazda3",
  "years": [
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Mazda_Mazdaspeed_Mazda3",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.563Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.563Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644f1"),
  "name": "Mazdaspeed Mazda6",
  "niceName": "mazdaspeed-mazda6",
  "years": [
    "2006",
    "2007"
  ],
  "edmundsId": "Mazda_Mazdaspeed_Mazda6",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.563Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.563Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644f2"),
  "name": "Mazdaspeed Protege",
  "niceName": "mazdaspeed-protege",
  "years": [
    "2003"
  ],
  "edmundsId": "Mazda_Mazdaspeed_Protege",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.564Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.564Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644f3"),
  "name": "Mazdaspeed3",
  "niceName": "mazdaspeed3",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Mazda_Mazdaspeed3",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.564Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.564Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644f4"),
  "name": "Millenia",
  "niceName": "millenia",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "Mazda_Millenia",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.565Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.565Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644f5"),
  "name": "Navajo",
  "niceName": "navajo",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Mazda_Navajo",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.565Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.565Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644f6"),
  "name": "Protege",
  "niceName": "protege",
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
    "2003"
  ],
  "edmundsId": "Mazda_Protege",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.566Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.566Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644f7"),
  "name": "Protege5",
  "niceName": "protege5",
  "years": [
    "2002",
    "2003"
  ],
  "edmundsId": "Mazda_Protege5",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.566Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.566Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644f8"),
  "name": "RX-7",
  "niceName": "rx-7",
  "years": [
    "1990",
    "1991",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Mazda_RX_7",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.567Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.567Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644f9"),
  "name": "RX-8",
  "niceName": "rx-8",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Mazda_RX_8",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.567Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.567Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644fa"),
  "name": "Tribute",
  "niceName": "tribute",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Mazda_Tribute",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.568Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.568Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644fb"),
  "name": "Tribute Hybrid",
  "niceName": "tribute-hybrid",
  "years": [
    "2008",
    "2009"
  ],
  "edmundsId": "Mazda_Tribute_Hybrid",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.568Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.568Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0721fd96d81f8644fc"),
  "name": "Truck",
  "niceName": "truck",
  "years": [
    "2002",
    "2003"
  ],
  "edmundsId": "Mazda_Truck",
  "make": ObjectId("550b28a0229533b024084071"),
  "createdAt": ISODate("2015-03-19T19:56:55.569Z"),
  "updatedAt": ISODate("2015-03-19T19:56:55.569Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0921fd96d81f8649a6"),
  "name": "650S Coupe",
  "niceName": "650s-coupe",
  "years": [
    "2015"
  ],
  "edmundsId": "McLaren_650S_Coupe",
  "make": ObjectId("550b28a0229533b024084072"),
  "createdAt": ISODate("2015-03-19T19:56:57.671Z"),
  "updatedAt": ISODate("2015-03-19T19:56:57.671Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0921fd96d81f8649a7"),
  "name": "650S Spider",
  "niceName": "650s-spider",
  "years": [
    "2015"
  ],
  "edmundsId": "McLaren_650S_Spider",
  "make": ObjectId("550b28a0229533b024084072"),
  "createdAt": ISODate("2015-03-19T19:56:57.672Z"),
  "updatedAt": ISODate("2015-03-19T19:56:57.672Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0921fd96d81f8649a8"),
  "name": "MP4-12C",
  "niceName": "mp4-12c",
  "years": [
    "2012",
    "2013"
  ],
  "edmundsId": "McLaren_MP4_12C",
  "make": ObjectId("550b28a0229533b024084072"),
  "createdAt": ISODate("2015-03-19T19:56:57.672Z"),
  "updatedAt": ISODate("2015-03-19T19:56:57.672Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0921fd96d81f8649a9"),
  "name": "MP4-12C Spider",
  "niceName": "mp4-12c-spider",
  "years": [
    "2013"
  ],
  "edmundsId": "McLaren_MP4_12C_Spider",
  "make": ObjectId("550b28a0229533b024084072"),
  "createdAt": ISODate("2015-03-19T19:56:57.673Z"),
  "updatedAt": ISODate("2015-03-19T19:56:57.673Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649af"),
  "name": "190-Class",
  "niceName": "190-class",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Mercedes_Benz_190_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.757Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.757Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649b0"),
  "name": "300-Class",
  "niceName": "300-class",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Mercedes_Benz_300_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.758Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.758Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649b1"),
  "name": "350-Class",
  "niceName": "350-class",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Mercedes_Benz_350_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.759Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.759Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649b2"),
  "name": "400-Class",
  "niceName": "400-class",
  "years": [
    "1992",
    "1993"
  ],
  "edmundsId": "Mercedes_Benz_400_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.766Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.766Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649b3"),
  "name": "420-Class",
  "niceName": "420-class",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Mercedes_Benz_420_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.767Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.767Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649b4"),
  "name": "500-Class",
  "niceName": "500-class",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Mercedes_Benz_500_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.767Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.767Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649b5"),
  "name": "560-Class",
  "niceName": "560-class",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Mercedes_Benz_560_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.768Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.768Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649b6"),
  "name": "600-Class",
  "niceName": "600-class",
  "years": [
    "1992",
    "1993"
  ],
  "edmundsId": "Mercedes_Benz_600_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.768Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.768Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649b7"),
  "name": "AMG GT",
  "niceName": "amg-gt",
  "years": [
    "2016"
  ],
  "edmundsId": "Mercedes_Benz_AMG_GT",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.769Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.769Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649b8"),
  "name": "B-Class Electric Drive",
  "niceName": "b-class-electric-drive",
  "years": [
    "2014"
  ],
  "edmundsId": "Mercedes_Benz_B_Class_Electric_Drive",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.770Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.770Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649b9"),
  "name": "C-Class",
  "niceName": "c-class",
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
    "2015"
  ],
  "edmundsId": "Mercedes_Benz_C_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.770Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.770Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649ba"),
  "name": "C36 AMG",
  "niceName": "c36-amg",
  "years": [
    "1995",
    "1996",
    "1997"
  ],
  "edmundsId": "Mercedes_Benz_C36_AMG",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.771Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.771Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649bb"),
  "name": "C43 AMG",
  "niceName": "c43-amg",
  "years": [
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "Mercedes_Benz_C43_AMG",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.771Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.771Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649bc"),
  "name": "CL-Class",
  "niceName": "cl-class",
  "years": [
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
    "2014"
  ],
  "edmundsId": "Mercedes_Benz_CL_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.772Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.772Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649bd"),
  "name": "CLA-Class",
  "niceName": "cla-class",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Mercedes_Benz_CLA_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.772Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.772Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649be"),
  "name": "CLK-Class",
  "niceName": "clk-class",
  "years": [
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
  "edmundsId": "Mercedes_Benz_CLK_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.773Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.773Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649bf"),
  "name": "CLS-Class",
  "niceName": "cls-class",
  "years": [
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
  "edmundsId": "Mercedes_Benz_CLS_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.773Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.773Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649c0"),
  "name": "E-Class",
  "niceName": "e-class",
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
    "2015"
  ],
  "edmundsId": "Mercedes_Benz_E_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.774Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.774Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649c1"),
  "name": "E55 AMG",
  "niceName": "e55-amg",
  "years": [
    "1999",
    "2000"
  ],
  "edmundsId": "Mercedes_Benz_E55_AMG",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.774Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.774Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649c2"),
  "name": "G-Class",
  "niceName": "g-class",
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
  "edmundsId": "Mercedes_Benz_G_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.775Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.775Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649c3"),
  "name": "GL-Class",
  "niceName": "gl-class",
  "years": [
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
  "edmundsId": "Mercedes_Benz_GL_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.775Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.775Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649c4"),
  "name": "GLA-Class",
  "niceName": "gla-class",
  "years": [
    "2015"
  ],
  "edmundsId": "Mercedes_Benz_GLA_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.776Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.776Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649c5"),
  "name": "GLE-Class",
  "niceName": "gle-class",
  "years": [
    "2016"
  ],
  "edmundsId": "Mercedes_Benz_GLE_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.777Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.777Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649c6"),
  "name": "GLK-Class",
  "niceName": "glk-class",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Mercedes_Benz_GLK_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.777Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.777Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649c7"),
  "name": "M-Class",
  "niceName": "m-class",
  "years": [
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
  "edmundsId": "Mercedes_Benz_M_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.777Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.778Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649c8"),
  "name": "ML55 AMG",
  "niceName": "ml55-amg",
  "years": [
    "2000"
  ],
  "edmundsId": "Mercedes_Benz_ML55_AMG",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.778Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.778Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649c9"),
  "name": "Maybach",
  "niceName": "maybach",
  "years": [
    "2016"
  ],
  "edmundsId": "Mercedes_Benz_Maybach",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.779Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.779Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649ca"),
  "name": "Metris",
  "niceName": "metris",
  "years": [
    "2016"
  ],
  "edmundsId": "Mercedes_Benz_Metris",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.779Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.779Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649cb"),
  "name": "R-Class",
  "niceName": "r-class",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": "Mercedes_Benz_R_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.779Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.779Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649cc"),
  "name": "S-Class",
  "niceName": "s-class",
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
  "edmundsId": "Mercedes_Benz_S_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.780Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.780Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649cd"),
  "name": "SL-Class",
  "niceName": "sl-class",
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
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Mercedes_Benz_SL_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.781Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.781Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649ce"),
  "name": "SLK-Class",
  "niceName": "slk-class",
  "years": [
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
  "edmundsId": "Mercedes_Benz_SLK_Class",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.781Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.781Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649cf"),
  "name": "SLR McLaren",
  "niceName": "slr-mclaren",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Mercedes_Benz_SLR_McLaren",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.782Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.782Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649d0"),
  "name": "SLS AMG",
  "niceName": "sls-amg",
  "years": [
    "2011",
    "2012"
  ],
  "edmundsId": "Mercedes_Benz_SLS_AMG",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.782Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.782Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649d1"),
  "name": "SLS AMG GT",
  "niceName": "sls-amg-gt",
  "years": [
    "2013",
    "2014"
  ],
  "edmundsId": "Mercedes_Benz_SLS_AMG_GT",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.783Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.783Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649d2"),
  "name": "SLS AMG GT Final Edition",
  "niceName": "sls-amg-gt-final-edition",
  "years": [
    "2015"
  ],
  "edmundsId": "Mercedes_Benz_SLS_AMG_GT_Final_Edition",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.783Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.783Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a0c21fd96d81f8649d3"),
  "name": "Sprinter",
  "niceName": "sprinter",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Mercedes_Benz_Sprinter",
  "make": ObjectId("550b28a0229533b024084073"),
  "createdAt": ISODate("2015-03-19T19:57:00.784Z"),
  "updatedAt": ISODate("2015-03-19T19:57:00.784Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864ddd"),
  "name": "Capri",
  "niceName": "capri",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Mercury_Capri",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.397Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.397Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864dde"),
  "name": "Cougar",
  "niceName": "cougar",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "Mercury_Cougar",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.398Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.398Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864ddf"),
  "name": "Grand Marquis",
  "niceName": "grand-marquis",
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
  "edmundsId": "Mercury_Grand_Marquis",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.399Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.399Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864de0"),
  "name": "Marauder",
  "niceName": "marauder",
  "years": [
    "2003",
    "2004"
  ],
  "edmundsId": "Mercury_Marauder",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.399Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.399Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864de1"),
  "name": "Mariner",
  "niceName": "mariner",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Mercury_Mariner",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.400Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.400Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864de2"),
  "name": "Mariner Hybrid",
  "niceName": "mariner-hybrid",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Mercury_Mariner_Hybrid",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.400Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.400Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864de3"),
  "name": "Milan",
  "niceName": "milan",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Mercury_Milan",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.401Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.401Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864de4"),
  "name": "Milan Hybrid",
  "niceName": "milan-hybrid",
  "years": [
    "2010",
    "2011"
  ],
  "edmundsId": "Mercury_Milan_Hybrid",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.401Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.401Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864de5"),
  "name": "Montego",
  "niceName": "montego",
  "years": [
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Mercury_Montego",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.402Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.402Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864de6"),
  "name": "Monterey",
  "niceName": "monterey",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Mercury_Monterey",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.403Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.403Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864de7"),
  "name": "Mountaineer",
  "niceName": "mountaineer",
  "years": [
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
  "edmundsId": "Mercury_Mountaineer",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.403Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.403Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864de8"),
  "name": "Mystique",
  "niceName": "mystique",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "Mercury_Mystique",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.403Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.404Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864de9"),
  "name": "Sable",
  "niceName": "sable",
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
    "2008",
    "2009"
  ],
  "edmundsId": "Mercury_Sable",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.404Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.404Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864dea"),
  "name": "Topaz",
  "niceName": "topaz",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Mercury_Topaz",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.405Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.405Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864deb"),
  "name": "Tracer",
  "niceName": "tracer",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999"
  ],
  "edmundsId": "Mercury_Tracer",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.405Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.405Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1021fd96d81f864dec"),
  "name": "Villager",
  "niceName": "villager",
  "years": [
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "Mercury_Villager",
  "make": ObjectId("550b28a0229533b024084074"),
  "createdAt": ISODate("2015-03-19T19:57:04.406Z"),
  "updatedAt": ISODate("2015-03-19T19:57:04.406Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fb4"),
  "name": "3000GT",
  "niceName": "3000gt",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999"
  ],
  "edmundsId": "Mitsubishi_3000GT",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.220Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.220Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fb5"),
  "name": "Diamante",
  "niceName": "diamante",
  "years": [
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
  "edmundsId": "Mitsubishi_Diamante",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.220Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.220Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fb6"),
  "name": "Eclipse",
  "niceName": "eclipse",
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
  "edmundsId": "Mitsubishi_Eclipse",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.221Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.221Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fb7"),
  "name": "Eclipse Spyder",
  "niceName": "eclipse-spyder",
  "years": [
    "1996",
    "1997",
    "1998",
    "1999",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": "Mitsubishi_Eclipse_Spyder",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.222Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.222Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fb8"),
  "name": "Endeavor",
  "niceName": "endeavor",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2010",
    "2011"
  ],
  "edmundsId": "Mitsubishi_Endeavor",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.222Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.222Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fb9"),
  "name": "Expo",
  "niceName": "expo",
  "years": [
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Mitsubishi_Expo",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.223Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.223Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fba"),
  "name": "Galant",
  "niceName": "galant",
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
  "edmundsId": "Mitsubishi_Galant",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.223Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.223Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fbb"),
  "name": "Lancer",
  "niceName": "lancer",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Mitsubishi_Lancer",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.224Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.224Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fbc"),
  "name": "Lancer Evolution",
  "niceName": "lancer-evolution",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2008",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Mitsubishi_Lancer_Evolution",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.225Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.225Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fbd"),
  "name": "Lancer Sportback",
  "niceName": "lancer-sportback",
  "years": [
    "2004",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Mitsubishi_Lancer_Sportback",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.225Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.225Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fbe"),
  "name": "Mighty Max Pickup",
  "niceName": "mighty-max-pickup",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Mitsubishi_Mighty_Max_Pickup",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.226Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.226Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fbf"),
  "name": "Mirage",
  "niceName": "mirage",
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
    "2014",
    "2015"
  ],
  "edmundsId": "Mitsubishi_Mirage",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.226Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.226Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fc0"),
  "name": "Montero",
  "niceName": "montero",
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
    "2006"
  ],
  "edmundsId": "Mitsubishi_Montero",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.227Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.227Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fc1"),
  "name": "Montero Sport",
  "niceName": "montero-sport",
  "years": [
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": "Mitsubishi_Montero_Sport",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.227Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.227Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fc2"),
  "name": "Outlander",
  "niceName": "outlander",
  "years": [
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
  "edmundsId": "Mitsubishi_Outlander",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.228Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.228Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fc3"),
  "name": "Outlander Sport",
  "niceName": "outlander-sport",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Mitsubishi_Outlander_Sport",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.228Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.228Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fc4"),
  "name": "Precis",
  "niceName": "precis",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Mitsubishi_Precis",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.229Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.229Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fc5"),
  "name": "Raider",
  "niceName": "raider",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Mitsubishi_Raider",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.229Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.229Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fc6"),
  "name": "Sigma",
  "niceName": "sigma",
  "years": [
    "1990"
  ],
  "edmundsId": "Mitsubishi_Sigma",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.230Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.230Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fc7"),
  "name": "Vanwagon",
  "niceName": "vanwagon",
  "years": [
    "1990"
  ],
  "edmundsId": "Mitsubishi_Vanwagon",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.231Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.231Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1321fd96d81f864fc8"),
  "name": "i-MiEV",
  "niceName": "i-miev",
  "years": [
    "2012",
    "2014",
    "2016"
  ],
  "edmundsId": "Mitsubishi_i_MiEV",
  "make": ObjectId("550b28a0229533b024084075"),
  "createdAt": ISODate("2015-03-19T19:57:07.232Z"),
  "updatedAt": ISODate("2015-03-19T19:57:07.232Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865313"),
  "name": "200SX",
  "niceName": "200sx",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998"
  ],
  "edmundsId": "Nissan_200SX",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.185Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.185Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865314"),
  "name": "240SX",
  "niceName": "240sx",
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
  "edmundsId": "Nissan_240SX",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.186Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.186Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865315"),
  "name": "300ZX",
  "niceName": "300zx",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Nissan_300ZX",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.187Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.187Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865316"),
  "name": "350Z",
  "niceName": "350z",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Nissan_350Z",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.188Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.188Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865317"),
  "name": "370Z",
  "niceName": "370z",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Nissan_370Z",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.188Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.188Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865318"),
  "name": "Altima",
  "niceName": "altima",
  "years": [
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
  "edmundsId": "Nissan_Altima",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.189Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.189Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865319"),
  "name": "Altima Hybrid",
  "niceName": "altima-hybrid",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Nissan_Altima_Hybrid",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.190Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.190Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f86531a"),
  "name": "Armada",
  "niceName": "armada",
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
    "2015"
  ],
  "edmundsId": "Nissan_Armada",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.190Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.190Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f86531b"),
  "name": "Axxess",
  "niceName": "axxess",
  "years": [
    "1990"
  ],
  "edmundsId": "Nissan_Axxess",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.191Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.191Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f86531c"),
  "name": "Cube",
  "niceName": "cube",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Nissan_Cube",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.199Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.199Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f86531d"),
  "name": "Frontier",
  "niceName": "frontier",
  "years": [
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
  "edmundsId": "Nissan_Frontier",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.200Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.200Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f86531e"),
  "name": "GT-R",
  "niceName": "gt-r",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Nissan_GT_R",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.201Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.201Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f86531f"),
  "name": "Juke",
  "niceName": "juke",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Nissan_Juke",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.201Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.201Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865320"),
  "name": "Leaf",
  "niceName": "leaf",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Nissan_Leaf",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.202Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.202Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865321"),
  "name": "Maxima",
  "niceName": "maxima",
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
    "2016"
  ],
  "edmundsId": "Nissan_Maxima",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.202Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.202Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865322"),
  "name": "Murano",
  "niceName": "murano",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Nissan_Murano",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.203Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.203Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865323"),
  "name": "Murano CrossCabriolet",
  "niceName": "murano-crosscabriolet",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Nissan_Murano_CrossCabriolet",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.204Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.204Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865324"),
  "name": "NV",
  "niceName": "nv",
  "years": [
    "2012",
    "2013"
  ],
  "edmundsId": "Nissan_NV",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.204Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.204Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865325"),
  "name": "NV Cargo",
  "niceName": "nv-cargo",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Nissan_NV_Cargo",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.205Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.205Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865326"),
  "name": "NV Passenger",
  "niceName": "nv-passenger",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Nissan_NV_Passenger",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.205Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.205Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865327"),
  "name": "NV200",
  "niceName": "nv200",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Nissan_NV200",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.206Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.206Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865328"),
  "name": "NX",
  "niceName": "nx",
  "years": [
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Nissan_NX",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.206Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.206Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865329"),
  "name": "Pathfinder",
  "niceName": "pathfinder",
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
  "edmundsId": "Nissan_Pathfinder",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.207Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.207Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f86532a"),
  "name": "Pulsar",
  "niceName": "pulsar",
  "years": [
    "1990"
  ],
  "edmundsId": "Nissan_Pulsar",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.208Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.208Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f86532b"),
  "name": "Quest",
  "niceName": "quest",
  "years": [
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
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Nissan_Quest",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.208Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.208Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f86532c"),
  "name": "Rogue",
  "niceName": "rogue",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Nissan_Rogue",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.209Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.209Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f86532d"),
  "name": "Rogue Select",
  "niceName": "rogue-select",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Nissan_Rogue_Select",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.209Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.209Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f86532e"),
  "name": "Sentra",
  "niceName": "sentra",
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
  "edmundsId": "Nissan_Sentra",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.210Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.210Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f86532f"),
  "name": "Stanza",
  "niceName": "stanza",
  "years": [
    "1990",
    "1991",
    "1992"
  ],
  "edmundsId": "Nissan_Stanza",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.210Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.210Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865330"),
  "name": "Titan",
  "niceName": "titan",
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
  "edmundsId": "Nissan_Titan",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.211Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.211Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865331"),
  "name": "Truck",
  "niceName": "truck",
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
  "edmundsId": "Nissan_Truck",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.212Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.212Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865332"),
  "name": "Van",
  "niceName": "van",
  "years": [
    "1990"
  ],
  "edmundsId": "Nissan_Van",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.212Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.212Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865333"),
  "name": "Versa",
  "niceName": "versa",
  "years": [
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
  "edmundsId": "Nissan_Versa",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.213Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.213Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865334"),
  "name": "Versa Note",
  "niceName": "versa-note",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Nissan_Versa_Note",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.213Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.213Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1721fd96d81f865335"),
  "name": "Xterra",
  "niceName": "xterra",
  "years": [
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
  "edmundsId": "Nissan_Xterra",
  "make": ObjectId("550b28a0229533b024084076"),
  "createdAt": ISODate("2015-03-19T19:57:11.214Z"),
  "updatedAt": ISODate("2015-03-19T19:57:11.214Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c47"),
  "name": "Achieva",
  "niceName": "achieva",
  "years": [
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998"
  ],
  "edmundsId": "Oldsmobile_Achieva",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.760Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.760Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c48"),
  "name": "Alero",
  "niceName": "alero",
  "years": [
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": "Oldsmobile_Alero",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.761Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.761Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c49"),
  "name": "Aurora",
  "niceName": "aurora",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Oldsmobile_Aurora",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.761Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.761Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c4a"),
  "name": "Bravada",
  "niceName": "bravada",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994",
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
  "edmundsId": "Oldsmobile_Bravada",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.762Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.762Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c4b"),
  "name": "Ciera",
  "niceName": "ciera",
  "years": [
    "1995",
    "1996"
  ],
  "edmundsId": "Oldsmobile_Ciera",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.763Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.763Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c4c"),
  "name": "Custom Cruiser",
  "niceName": "custom-cruiser",
  "years": [
    "1990",
    "1991",
    "1992"
  ],
  "edmundsId": "Oldsmobile_Custom_Cruiser",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.763Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.763Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c4d"),
  "name": "Cutlass",
  "niceName": "cutlass",
  "years": [
    "1997",
    "1998",
    "1999"
  ],
  "edmundsId": "Oldsmobile_Cutlass",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.764Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.764Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c4e"),
  "name": "Cutlass Calais",
  "niceName": "cutlass-calais",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Oldsmobile_Cutlass_Calais",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.764Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.764Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c4f"),
  "name": "Cutlass Ciera",
  "niceName": "cutlass-ciera",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Oldsmobile_Cutlass_Ciera",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.765Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.765Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c50"),
  "name": "Cutlass Supreme",
  "niceName": "cutlass-supreme",
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
  "edmundsId": "Oldsmobile_Cutlass_Supreme",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.765Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.765Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c51"),
  "name": "Eighty-Eight",
  "niceName": "eighty-eight",
  "years": [
    "1996",
    "1997",
    "1998",
    "1999"
  ],
  "edmundsId": "Oldsmobile_Eighty_Eight",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.766Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.766Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c52"),
  "name": "Eighty-Eight Royale",
  "niceName": "eighty-eight-royale",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Oldsmobile_Eighty_Eight_Royale",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.766Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.766Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c53"),
  "name": "Intrigue",
  "niceName": "intrigue",
  "years": [
    "1998",
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "Oldsmobile_Intrigue",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.767Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.767Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c54"),
  "name": "LSS",
  "niceName": "lss",
  "years": [
    "1997",
    "1998",
    "1999"
  ],
  "edmundsId": "Oldsmobile_LSS",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.767Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.767Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c55"),
  "name": "Ninety-Eight",
  "niceName": "ninety-eight",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996"
  ],
  "edmundsId": "Oldsmobile_Ninety_Eight",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.768Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.768Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c56"),
  "name": "Regency",
  "niceName": "regency",
  "years": [
    "1997",
    "1998"
  ],
  "edmundsId": "Oldsmobile_Regency",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.768Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.768Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c57"),
  "name": "Silhouette",
  "niceName": "silhouette",
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
  "edmundsId": "Oldsmobile_Silhouette",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.769Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.769Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1a21fd96d81f865c58"),
  "name": "Toronado",
  "niceName": "toronado",
  "years": [
    "1990",
    "1991",
    "1992"
  ],
  "edmundsId": "Oldsmobile_Toronado",
  "make": ObjectId("550b28a0229533b024084077"),
  "createdAt": ISODate("2015-03-19T19:57:14.769Z"),
  "updatedAt": ISODate("2015-03-19T19:57:14.769Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1c21fd96d81f865d8e"),
  "name": "Esperante",
  "niceName": "esperante",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Panoz_Esperante",
  "make": ObjectId("550b28a0229533b024084078"),
  "createdAt": ISODate("2015-03-19T19:57:16.789Z"),
  "updatedAt": ISODate("2015-03-19T19:57:16.789Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1e21fd96d81f865da3"),
  "name": "Acclaim",
  "niceName": "acclaim",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Plymouth_Acclaim",
  "make": ObjectId("550b28a0229533b024084079"),
  "createdAt": ISODate("2015-03-19T19:57:18.924Z"),
  "updatedAt": ISODate("2015-03-19T19:57:18.924Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1e21fd96d81f865da4"),
  "name": "Breeze",
  "niceName": "breeze",
  "years": [
    "1996",
    "1997",
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "Plymouth_Breeze",
  "make": ObjectId("550b28a0229533b024084079"),
  "createdAt": ISODate("2015-03-19T19:57:18.925Z"),
  "updatedAt": ISODate("2015-03-19T19:57:18.925Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1e21fd96d81f865da5"),
  "name": "Colt",
  "niceName": "colt",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Plymouth_Colt",
  "make": ObjectId("550b28a0229533b024084079"),
  "createdAt": ISODate("2015-03-19T19:57:18.926Z"),
  "updatedAt": ISODate("2015-03-19T19:57:18.926Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1e21fd96d81f865da6"),
  "name": "Grand Voyager",
  "niceName": "grand-voyager",
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
    "2000"
  ],
  "edmundsId": "Plymouth_Grand_Voyager",
  "make": ObjectId("550b28a0229533b024084079"),
  "createdAt": ISODate("2015-03-19T19:57:18.926Z"),
  "updatedAt": ISODate("2015-03-19T19:57:18.926Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1e21fd96d81f865da7"),
  "name": "Horizon",
  "niceName": "horizon",
  "years": [
    "1990"
  ],
  "edmundsId": "Plymouth_Horizon",
  "make": ObjectId("550b28a0229533b024084079"),
  "createdAt": ISODate("2015-03-19T19:57:18.927Z"),
  "updatedAt": ISODate("2015-03-19T19:57:18.927Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1e21fd96d81f865da8"),
  "name": "Laser",
  "niceName": "laser",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Plymouth_Laser",
  "make": ObjectId("550b28a0229533b024084079"),
  "createdAt": ISODate("2015-03-19T19:57:18.928Z"),
  "updatedAt": ISODate("2015-03-19T19:57:18.928Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1e21fd96d81f865da9"),
  "name": "Neon",
  "niceName": "neon",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001"
  ],
  "edmundsId": "Plymouth_Neon",
  "make": ObjectId("550b28a0229533b024084079"),
  "createdAt": ISODate("2015-03-19T19:57:18.928Z"),
  "updatedAt": ISODate("2015-03-19T19:57:18.929Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1e21fd96d81f865daa"),
  "name": "Prowler",
  "niceName": "prowler",
  "years": [
    "1997",
    "1999",
    "2000",
    "2001"
  ],
  "edmundsId": "Plymouth_Prowler",
  "make": ObjectId("550b28a0229533b024084079"),
  "createdAt": ISODate("2015-03-19T19:57:18.929Z"),
  "updatedAt": ISODate("2015-03-19T19:57:18.929Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1e21fd96d81f865dab"),
  "name": "Sundance",
  "niceName": "sundance",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Plymouth_Sundance",
  "make": ObjectId("550b28a0229533b024084079"),
  "createdAt": ISODate("2015-03-19T19:57:18.930Z"),
  "updatedAt": ISODate("2015-03-19T19:57:18.930Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a1e21fd96d81f865dac"),
  "name": "Voyager",
  "niceName": "voyager",
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
    "2000"
  ],
  "edmundsId": "Plymouth_Voyager",
  "make": ObjectId("550b28a0229533b024084079"),
  "createdAt": ISODate("2015-03-19T19:57:18.931Z"),
  "updatedAt": ISODate("2015-03-19T19:57:18.931Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e88"),
  "name": "6000",
  "niceName": "6000",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Pontiac_6000",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.454Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.454Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e89"),
  "name": "Aztek",
  "niceName": "aztek",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005"
  ],
  "edmundsId": "Pontiac_Aztek",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.455Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.455Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e8a"),
  "name": "Bonneville",
  "niceName": "bonneville",
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
    "2005"
  ],
  "edmundsId": "Pontiac_Bonneville",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.456Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.456Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e8b"),
  "name": "Firebird",
  "niceName": "firebird",
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
    "2002"
  ],
  "edmundsId": "Pontiac_Firebird",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.457Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.457Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e8c"),
  "name": "G3",
  "niceName": "g3",
  "years": [
    "2009"
  ],
  "edmundsId": "Pontiac_G3",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.457Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.457Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e8d"),
  "name": "G5",
  "niceName": "g5",
  "years": [
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Pontiac_G5",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.458Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.458Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e8e"),
  "name": "G6",
  "niceName": "g6",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": "Pontiac_G6",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.458Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.458Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e8f"),
  "name": "G8",
  "niceName": "g8",
  "years": [
    "2008",
    "2009"
  ],
  "edmundsId": "Pontiac_G8",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.459Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.459Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e90"),
  "name": "GTO",
  "niceName": "gto",
  "years": [
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Pontiac_GTO",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.460Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.460Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e91"),
  "name": "Grand Am",
  "niceName": "grand-am",
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
    "2005"
  ],
  "edmundsId": "Pontiac_Grand_Am",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.460Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.460Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e92"),
  "name": "Grand Prix",
  "niceName": "grand-prix",
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
  "edmundsId": "Pontiac_Grand_Prix",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.461Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.461Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e93"),
  "name": "Le Mans",
  "niceName": "le-mans",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Pontiac_Le_Mans",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.462Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.462Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e94"),
  "name": "Montana",
  "niceName": "montana",
  "years": [
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005"
  ],
  "edmundsId": "Pontiac_Montana",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.462Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.462Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e95"),
  "name": "Montana SV6",
  "niceName": "montana-sv6",
  "years": [
    "2006"
  ],
  "edmundsId": "Pontiac_Montana_SV6",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.463Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.463Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e96"),
  "name": "Solstice",
  "niceName": "solstice",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Pontiac_Solstice",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.463Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.463Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e97"),
  "name": "Sunbird",
  "niceName": "sunbird",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Pontiac_Sunbird",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.464Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.464Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e98"),
  "name": "Sunfire",
  "niceName": "sunfire",
  "years": [
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
    "2005"
  ],
  "edmundsId": "Pontiac_Sunfire",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.464Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.464Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e99"),
  "name": "Torrent",
  "niceName": "torrent",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Pontiac_Torrent",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.465Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.465Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e9a"),
  "name": "Trans Sport",
  "niceName": "trans-sport",
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
  "edmundsId": "Pontiac_Trans_Sport",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.465Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.465Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2121fd96d81f865e9b"),
  "name": "Vibe",
  "niceName": "vibe",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010"
  ],
  "edmundsId": "Pontiac_Vibe",
  "make": ObjectId("550b28a0229533b02408407a"),
  "createdAt": ISODate("2015-03-19T19:57:21.466Z"),
  "updatedAt": ISODate("2015-03-19T19:57:21.466Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2321fd96d81f8660c4"),
  "name": "911",
  "niceName": "911",
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
  "edmundsId": "Porsche_911",
  "make": ObjectId("550b28a0229533b02408407b"),
  "createdAt": ISODate("2015-03-19T19:57:23.965Z"),
  "updatedAt": ISODate("2015-03-19T19:57:23.965Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2321fd96d81f8660c5"),
  "name": "918 Spyder",
  "niceName": "918-spyder",
  "years": [
    "2015"
  ],
  "edmundsId": "Porsche_918_Spyder",
  "make": ObjectId("550b28a0229533b02408407b"),
  "createdAt": ISODate("2015-03-19T19:57:23.967Z"),
  "updatedAt": ISODate("2015-03-19T19:57:23.967Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2321fd96d81f8660c6"),
  "name": "928",
  "niceName": "928",
  "years": [
    "1990",
    "1991",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Porsche_928",
  "make": ObjectId("550b28a0229533b02408407b"),
  "createdAt": ISODate("2015-03-19T19:57:23.968Z"),
  "updatedAt": ISODate("2015-03-19T19:57:23.968Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2321fd96d81f8660c7"),
  "name": "944",
  "niceName": "944",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Porsche_944",
  "make": ObjectId("550b28a0229533b02408407b"),
  "createdAt": ISODate("2015-03-19T19:57:23.968Z"),
  "updatedAt": ISODate("2015-03-19T19:57:23.968Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2321fd96d81f8660c8"),
  "name": "968",
  "niceName": "968",
  "years": [
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Porsche_968",
  "make": ObjectId("550b28a0229533b02408407b"),
  "createdAt": ISODate("2015-03-19T19:57:23.969Z"),
  "updatedAt": ISODate("2015-03-19T19:57:23.969Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2321fd96d81f8660c9"),
  "name": "Boxster",
  "niceName": "boxster",
  "years": [
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
  "edmundsId": "Porsche_Boxster",
  "make": ObjectId("550b28a0229533b02408407b"),
  "createdAt": ISODate("2015-03-19T19:57:23.971Z"),
  "updatedAt": ISODate("2015-03-19T19:57:23.971Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2321fd96d81f8660ca"),
  "name": "Carrera GT",
  "niceName": "carrera-gt",
  "years": [
    "2004",
    "2005"
  ],
  "edmundsId": "Porsche_Carrera_GT",
  "make": ObjectId("550b28a0229533b02408407b"),
  "createdAt": ISODate("2015-03-19T19:57:23.971Z"),
  "updatedAt": ISODate("2015-03-19T19:57:23.971Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2321fd96d81f8660cb"),
  "name": "Cayenne",
  "niceName": "cayenne",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Porsche_Cayenne",
  "make": ObjectId("550b28a0229533b02408407b"),
  "createdAt": ISODate("2015-03-19T19:57:23.972Z"),
  "updatedAt": ISODate("2015-03-19T19:57:23.972Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2321fd96d81f8660cc"),
  "name": "Cayman",
  "niceName": "cayman",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2014",
    "2015"
  ],
  "edmundsId": "Porsche_Cayman",
  "make": ObjectId("550b28a0229533b02408407b"),
  "createdAt": ISODate("2015-03-19T19:57:23.973Z"),
  "updatedAt": ISODate("2015-03-19T19:57:23.973Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2321fd96d81f8660cd"),
  "name": "Cayman S",
  "niceName": "cayman-s",
  "years": [
    "2006"
  ],
  "edmundsId": "Porsche_Cayman_S",
  "make": ObjectId("550b28a0229533b02408407b"),
  "createdAt": ISODate("2015-03-19T19:57:23.974Z"),
  "updatedAt": ISODate("2015-03-19T19:57:23.974Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2321fd96d81f8660ce"),
  "name": "Macan",
  "niceName": "macan",
  "years": [
    "2015"
  ],
  "edmundsId": "Porsche_Macan",
  "make": ObjectId("550b28a0229533b02408407b"),
  "createdAt": ISODate("2015-03-19T19:57:23.974Z"),
  "updatedAt": ISODate("2015-03-19T19:57:23.974Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2321fd96d81f8660cf"),
  "name": "Panamera",
  "niceName": "panamera",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Porsche_Panamera",
  "make": ObjectId("550b28a0229533b02408407b"),
  "createdAt": ISODate("2015-03-19T19:57:23.975Z"),
  "updatedAt": ISODate("2015-03-19T19:57:23.975Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2621fd96d81f8662b5"),
  "name": "1500",
  "niceName": "1500",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Ram_1500",
  "make": ObjectId("550b28a0229533b02408407c"),
  "createdAt": ISODate("2015-03-19T19:57:26.476Z"),
  "updatedAt": ISODate("2015-03-19T19:57:26.476Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2621fd96d81f8662b6"),
  "name": "2500",
  "niceName": "2500",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Ram_2500",
  "make": ObjectId("550b28a0229533b02408407c"),
  "createdAt": ISODate("2015-03-19T19:57:26.477Z"),
  "updatedAt": ISODate("2015-03-19T19:57:26.477Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2621fd96d81f8662b7"),
  "name": "3500",
  "niceName": "3500",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Ram_3500",
  "make": ObjectId("550b28a0229533b02408407c"),
  "createdAt": ISODate("2015-03-19T19:57:26.477Z"),
  "updatedAt": ISODate("2015-03-19T19:57:26.477Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2621fd96d81f8662b8"),
  "name": "C/V Cargo Van",
  "niceName": "cv-cargo-van",
  "years": [
    "2012"
  ],
  "edmundsId": "Ram_C/V_Cargo_Van",
  "make": ObjectId("550b28a0229533b02408407c"),
  "createdAt": ISODate("2015-03-19T19:57:26.478Z"),
  "updatedAt": ISODate("2015-03-19T19:57:26.478Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2621fd96d81f8662b9"),
  "name": "C/V Tradesman",
  "niceName": "cv-tradesman",
  "years": [
    "2013"
  ],
  "edmundsId": "Ram_C/V_Tradesman",
  "make": ObjectId("550b28a0229533b02408407c"),
  "createdAt": ISODate("2015-03-19T19:57:26.478Z"),
  "updatedAt": ISODate("2015-03-19T19:57:26.478Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2621fd96d81f8662ba"),
  "name": "CV Tradesman",
  "niceName": "cv-tradesman",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Ram_CV_Tradesman",
  "make": ObjectId("550b28a0229533b02408407c"),
  "createdAt": ISODate("2015-03-19T19:57:26.479Z"),
  "updatedAt": ISODate("2015-03-19T19:57:26.479Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2621fd96d81f8662bb"),
  "name": "Dakota",
  "niceName": "dakota",
  "years": [
    "2011"
  ],
  "edmundsId": "Ram_Dakota",
  "make": ObjectId("550b28a0229533b02408407c"),
  "createdAt": ISODate("2015-03-19T19:57:26.479Z"),
  "updatedAt": ISODate("2015-03-19T19:57:26.479Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2621fd96d81f8662bc"),
  "name": "Promaster Cargo Van",
  "niceName": "promaster-cargo-van",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Ram_Promaster_Cargo_Van",
  "make": ObjectId("550b28a0229533b02408407c"),
  "createdAt": ISODate("2015-03-19T19:57:26.480Z"),
  "updatedAt": ISODate("2015-03-19T19:57:26.480Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2621fd96d81f8662bd"),
  "name": "Promaster City",
  "niceName": "promaster-city",
  "years": [
    "2015"
  ],
  "edmundsId": "Ram_Promaster_City",
  "make": ObjectId("550b28a0229533b02408407c"),
  "createdAt": ISODate("2015-03-19T19:57:26.480Z"),
  "updatedAt": ISODate("2015-03-19T19:57:26.480Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2621fd96d81f8662be"),
  "name": "Promaster Window Van",
  "niceName": "promaster-window-van",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Ram_Promaster_Window_Van",
  "make": ObjectId("550b28a0229533b02408407c"),
  "createdAt": ISODate("2015-03-19T19:57:26.481Z"),
  "updatedAt": ISODate("2015-03-19T19:57:26.481Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2821fd96d81f8664e7"),
  "name": "Corniche",
  "niceName": "corniche",
  "years": [
    "2001",
    "2002"
  ],
  "edmundsId": "Rolls_Royce_Corniche",
  "make": ObjectId("550b28a0229533b02408407d"),
  "createdAt": ISODate("2015-03-19T19:57:28.517Z"),
  "updatedAt": ISODate("2015-03-19T19:57:28.517Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2821fd96d81f8664e8"),
  "name": "Ghost",
  "niceName": "ghost",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Rolls_Royce_Ghost",
  "make": ObjectId("550b28a0229533b02408407d"),
  "createdAt": ISODate("2015-03-19T19:57:28.518Z"),
  "updatedAt": ISODate("2015-03-19T19:57:28.518Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2821fd96d81f8664e9"),
  "name": "Ghost Series II",
  "niceName": "ghost-series-ii",
  "years": [
    "2015"
  ],
  "edmundsId": "Rolls_Royce_Ghost_Series_II",
  "make": ObjectId("550b28a0229533b02408407d"),
  "createdAt": ISODate("2015-03-19T19:57:28.518Z"),
  "updatedAt": ISODate("2015-03-19T19:57:28.518Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2821fd96d81f8664ea"),
  "name": "Park Ward",
  "niceName": "park-ward",
  "years": [
    "2001",
    "2002"
  ],
  "edmundsId": "Rolls_Royce_Park_Ward",
  "make": ObjectId("550b28a0229533b02408407d"),
  "createdAt": ISODate("2015-03-19T19:57:28.519Z"),
  "updatedAt": ISODate("2015-03-19T19:57:28.519Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2821fd96d81f8664eb"),
  "name": "Phantom",
  "niceName": "phantom",
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
    "2015"
  ],
  "edmundsId": "Rolls_Royce_Phantom",
  "make": ObjectId("550b28a0229533b02408407d"),
  "createdAt": ISODate("2015-03-19T19:57:28.520Z"),
  "updatedAt": ISODate("2015-03-19T19:57:28.520Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2821fd96d81f8664ec"),
  "name": "Phantom Coupe",
  "niceName": "phantom-coupe",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Rolls_Royce_Phantom_Coupe",
  "make": ObjectId("550b28a0229533b02408407d"),
  "createdAt": ISODate("2015-03-19T19:57:28.520Z"),
  "updatedAt": ISODate("2015-03-19T19:57:28.520Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2821fd96d81f8664ed"),
  "name": "Phantom Drophead Coupe",
  "niceName": "phantom-drophead-coupe",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Rolls_Royce_Phantom_Drophead_Coupe",
  "make": ObjectId("550b28a0229533b02408407d"),
  "createdAt": ISODate("2015-03-19T19:57:28.521Z"),
  "updatedAt": ISODate("2015-03-19T19:57:28.521Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2821fd96d81f8664ee"),
  "name": "Silver Seraph",
  "niceName": "silver-seraph",
  "years": [
    "2001",
    "2002"
  ],
  "edmundsId": "Rolls_Royce_Silver_Seraph",
  "make": ObjectId("550b28a0229533b02408407d"),
  "createdAt": ISODate("2015-03-19T19:57:28.521Z"),
  "updatedAt": ISODate("2015-03-19T19:57:28.521Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2821fd96d81f8664ef"),
  "name": "Wraith",
  "niceName": "wraith",
  "years": [
    "2014",
    "2015"
  ],
  "edmundsId": "Rolls_Royce_Wraith",
  "make": ObjectId("550b28a0229533b02408407d"),
  "createdAt": ISODate("2015-03-19T19:57:28.522Z"),
  "updatedAt": ISODate("2015-03-19T19:57:28.522Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2a21fd96d81f866526"),
  "name": "9-2X",
  "niceName": "9-2x",
  "years": [
    "2005",
    "2006"
  ],
  "edmundsId": "Saab_9_2X",
  "make": ObjectId("550b28a0229533b02408407e"),
  "createdAt": ISODate("2015-03-19T19:57:30.816Z"),
  "updatedAt": ISODate("2015-03-19T19:57:30.816Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2a21fd96d81f866527"),
  "name": "9-3",
  "niceName": "9-3",
  "years": [
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
  "edmundsId": "Saab_9_3",
  "make": ObjectId("550b28a0229533b02408407e"),
  "createdAt": ISODate("2015-03-19T19:57:30.817Z"),
  "updatedAt": ISODate("2015-03-19T19:57:30.817Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2a21fd96d81f866528"),
  "name": "9-3 Griffin",
  "niceName": "9-3-griffin",
  "years": [
    "2012"
  ],
  "edmundsId": "Saab_9_3_Griffin",
  "make": ObjectId("550b28a0229533b02408407e"),
  "createdAt": ISODate("2015-03-19T19:57:30.817Z"),
  "updatedAt": ISODate("2015-03-19T19:57:30.817Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2a21fd96d81f866529"),
  "name": "9-4X",
  "niceName": "9-4x",
  "years": [
    "2011"
  ],
  "edmundsId": "Saab_9_4X",
  "make": ObjectId("550b28a0229533b02408407e"),
  "createdAt": ISODate("2015-03-19T19:57:30.818Z"),
  "updatedAt": ISODate("2015-03-19T19:57:30.818Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2a21fd96d81f86652a"),
  "name": "9-5",
  "niceName": "9-5",
  "years": [
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
  "edmundsId": "Saab_9_5",
  "make": ObjectId("550b28a0229533b02408407e"),
  "createdAt": ISODate("2015-03-19T19:57:30.819Z"),
  "updatedAt": ISODate("2015-03-19T19:57:30.819Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2a21fd96d81f86652b"),
  "name": "9-7X",
  "niceName": "9-7x",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Saab_9_7X",
  "make": ObjectId("550b28a0229533b02408407e"),
  "createdAt": ISODate("2015-03-19T19:57:30.820Z"),
  "updatedAt": ISODate("2015-03-19T19:57:30.820Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2a21fd96d81f86652c"),
  "name": "900",
  "niceName": "900",
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
  "edmundsId": "Saab_900",
  "make": ObjectId("550b28a0229533b02408407e"),
  "createdAt": ISODate("2015-03-19T19:57:30.821Z"),
  "updatedAt": ISODate("2015-03-19T19:57:30.821Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2a21fd96d81f86652d"),
  "name": "9000",
  "niceName": "9000",
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
  "edmundsId": "Saab_9000",
  "make": ObjectId("550b28a0229533b02408407e"),
  "createdAt": ISODate("2015-03-19T19:57:30.821Z"),
  "updatedAt": ISODate("2015-03-19T19:57:30.821Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2d21fd96d81f866669"),
  "name": "Astra",
  "niceName": "astra",
  "years": [
    "2008"
  ],
  "edmundsId": "Saturn_Astra",
  "make": ObjectId("550b28a0229533b02408407f"),
  "createdAt": ISODate("2015-03-19T19:57:33.690Z"),
  "updatedAt": ISODate("2015-03-19T19:57:33.690Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2d21fd96d81f86666a"),
  "name": "Aura",
  "niceName": "aura",
  "years": [
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Saturn_Aura",
  "make": ObjectId("550b28a0229533b02408407f"),
  "createdAt": ISODate("2015-03-19T19:57:33.690Z"),
  "updatedAt": ISODate("2015-03-19T19:57:33.690Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2d21fd96d81f86666b"),
  "name": "Aura Hybrid",
  "niceName": "aura-hybrid",
  "years": [
    "2008",
    "2009"
  ],
  "edmundsId": "Saturn_Aura_Hybrid",
  "make": ObjectId("550b28a0229533b02408407f"),
  "createdAt": ISODate("2015-03-19T19:57:33.700Z"),
  "updatedAt": ISODate("2015-03-19T19:57:33.700Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2d21fd96d81f86666c"),
  "name": "ION",
  "niceName": "ion",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Saturn_ION",
  "make": ObjectId("550b28a0229533b02408407f"),
  "createdAt": ISODate("2015-03-19T19:57:33.750Z"),
  "updatedAt": ISODate("2015-03-19T19:57:33.750Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2d21fd96d81f86666d"),
  "name": "L-Series",
  "niceName": "l-series",
  "years": [
    "2000",
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Saturn_L_Series",
  "make": ObjectId("550b28a0229533b02408407f"),
  "createdAt": ISODate("2015-03-19T19:57:33.760Z"),
  "updatedAt": ISODate("2015-03-19T19:57:33.760Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2d21fd96d81f86666e"),
  "name": "L300",
  "niceName": "l300",
  "years": [
    "2004",
    "2005"
  ],
  "edmundsId": "Saturn_L300",
  "make": ObjectId("550b28a0229533b02408407f"),
  "createdAt": ISODate("2015-03-19T19:57:33.760Z"),
  "updatedAt": ISODate("2015-03-19T19:57:33.760Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2d21fd96d81f86666f"),
  "name": "Outlook",
  "niceName": "outlook",
  "years": [
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Saturn_Outlook",
  "make": ObjectId("550b28a0229533b02408407f"),
  "createdAt": ISODate("2015-03-19T19:57:33.770Z"),
  "updatedAt": ISODate("2015-03-19T19:57:33.770Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2d21fd96d81f866670"),
  "name": "Relay",
  "niceName": "relay",
  "years": [
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Saturn_Relay",
  "make": ObjectId("550b28a0229533b02408407f"),
  "createdAt": ISODate("2015-03-19T19:57:33.770Z"),
  "updatedAt": ISODate("2015-03-19T19:57:33.770Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2d21fd96d81f866671"),
  "name": "S-Series",
  "niceName": "s-series",
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
    "2002"
  ],
  "edmundsId": "Saturn_S_Series",
  "make": ObjectId("550b28a0229533b02408407f"),
  "createdAt": ISODate("2015-03-19T19:57:33.780Z"),
  "updatedAt": ISODate("2015-03-19T19:57:33.780Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2d21fd96d81f866672"),
  "name": "Sky",
  "niceName": "sky",
  "years": [
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Saturn_Sky",
  "make": ObjectId("550b28a0229533b02408407f"),
  "createdAt": ISODate("2015-03-19T19:57:33.790Z"),
  "updatedAt": ISODate("2015-03-19T19:57:33.790Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2d21fd96d81f866673"),
  "name": "VUE",
  "niceName": "vue",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Saturn_VUE",
  "make": ObjectId("550b28a0229533b02408407f"),
  "createdAt": ISODate("2015-03-19T19:57:33.790Z"),
  "updatedAt": ISODate("2015-03-19T19:57:33.790Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2d21fd96d81f866674"),
  "name": "VUE Hybrid",
  "niceName": "vue-hybrid",
  "years": [
    "2008",
    "2009"
  ],
  "edmundsId": "Saturn_VUE_Hybrid",
  "make": ObjectId("550b28a0229533b02408407f"),
  "createdAt": ISODate("2015-03-19T19:57:33.800Z"),
  "updatedAt": ISODate("2015-03-19T19:57:33.800Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2f21fd96d81f866777"),
  "name": "FR-S",
  "niceName": "fr-s",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Scion_FR_S",
  "make": ObjectId("550b28a0229533b024084080"),
  "createdAt": ISODate("2015-03-19T19:57:35.212Z"),
  "updatedAt": ISODate("2015-03-19T19:57:35.212Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2f21fd96d81f866778"),
  "name": "iM",
  "niceName": "im",
  "years": [
    "2016"
  ],
  "edmundsId": "Scion_iM",
  "make": ObjectId("550b28a0229533b024084080"),
  "createdAt": ISODate("2015-03-19T19:57:35.213Z"),
  "updatedAt": ISODate("2015-03-19T19:57:35.213Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2f21fd96d81f866779"),
  "name": "iQ",
  "niceName": "iq",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Scion_iQ",
  "make": ObjectId("550b28a0229533b024084080"),
  "createdAt": ISODate("2015-03-19T19:57:35.214Z"),
  "updatedAt": ISODate("2015-03-19T19:57:35.214Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2f21fd96d81f86677a"),
  "name": "tC",
  "niceName": "tc",
  "years": [
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
  "edmundsId": "Scion_tC",
  "make": ObjectId("550b28a0229533b024084080"),
  "createdAt": ISODate("2015-03-19T19:57:35.214Z"),
  "updatedAt": ISODate("2015-03-19T19:57:35.214Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2f21fd96d81f86677b"),
  "name": "xA",
  "niceName": "xa",
  "years": [
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Scion_xA",
  "make": ObjectId("550b28a0229533b024084080"),
  "createdAt": ISODate("2015-03-19T19:57:35.215Z"),
  "updatedAt": ISODate("2015-03-19T19:57:35.215Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2f21fd96d81f86677c"),
  "name": "xB",
  "niceName": "xb",
  "years": [
    "2004",
    "2005",
    "2006",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Scion_xB",
  "make": ObjectId("550b28a0229533b024084080"),
  "createdAt": ISODate("2015-03-19T19:57:35.215Z"),
  "updatedAt": ISODate("2015-03-19T19:57:35.215Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a2f21fd96d81f86677d"),
  "name": "xD",
  "niceName": "xd",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Scion_xD",
  "make": ObjectId("550b28a0229533b024084080"),
  "createdAt": ISODate("2015-03-19T19:57:35.216Z"),
  "updatedAt": ISODate("2015-03-19T19:57:35.216Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3121fd96d81f8667ef"),
  "name": "C8",
  "niceName": "c8",
  "years": [
    "2009"
  ],
  "edmundsId": "Spyker_C8",
  "make": ObjectId("550b28a0229533b024084081"),
  "createdAt": ISODate("2015-03-19T19:57:37.280Z"),
  "updatedAt": ISODate("2015-03-19T19:57:37.280Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f8667f4"),
  "name": "B9 Tribeca",
  "niceName": "b9-tribeca",
  "years": [
    "2006",
    "2007"
  ],
  "edmundsId": "Subaru_B9_Tribeca",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.416Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.416Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f8667f5"),
  "name": "BRZ",
  "niceName": "brz",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Subaru_BRZ",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.417Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.417Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f8667f6"),
  "name": "Baja",
  "niceName": "baja",
  "years": [
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Subaru_Baja",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.417Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.417Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f8667f7"),
  "name": "Forester",
  "niceName": "forester",
  "years": [
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
  "edmundsId": "Subaru_Forester",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.418Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.418Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f8667f8"),
  "name": "Impreza",
  "niceName": "impreza",
  "years": [
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
  "edmundsId": "Subaru_Impreza",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.419Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.419Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f8667f9"),
  "name": "Impreza WRX",
  "niceName": "impreza-wrx",
  "years": [
    "2013",
    "2014"
  ],
  "edmundsId": "Subaru_Impreza_WRX",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.420Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.420Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f8667fa"),
  "name": "Justy",
  "niceName": "justy",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Subaru_Justy",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.420Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.420Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f8667fb"),
  "name": "Legacy",
  "niceName": "legacy",
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
  "edmundsId": "Subaru_Legacy",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.421Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.421Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f8667fc"),
  "name": "Loyale",
  "niceName": "loyale",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Subaru_Loyale",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.422Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.422Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f8667fd"),
  "name": "Outback",
  "niceName": "outback",
  "years": [
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
  "edmundsId": "Subaru_Outback",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.423Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.423Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f8667fe"),
  "name": "SVX",
  "niceName": "svx",
  "years": [
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997"
  ],
  "edmundsId": "Subaru_SVX",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.424Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.424Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f8667ff"),
  "name": "Tribeca",
  "niceName": "tribeca",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Subaru_Tribeca",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.424Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.424Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f866800"),
  "name": "WRX",
  "niceName": "wrx",
  "years": [
    "2015"
  ],
  "edmundsId": "Subaru_WRX",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.425Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.425Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f866801"),
  "name": "XT",
  "niceName": "xt",
  "years": [
    "1991"
  ],
  "edmundsId": "Subaru_XT",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.426Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.426Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3421fd96d81f866802"),
  "name": "XV Crosstrek",
  "niceName": "xv-crosstrek",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Subaru_XV_Crosstrek",
  "make": ObjectId("550b28a0229533b024084082"),
  "createdAt": ISODate("2015-03-19T19:57:40.426Z"),
  "updatedAt": ISODate("2015-03-19T19:57:40.426Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c71"),
  "name": "Aerio",
  "niceName": "aerio",
  "years": [
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007"
  ],
  "edmundsId": "Suzuki_Aerio",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.490Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.490Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c72"),
  "name": "Equator",
  "niceName": "equator",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": "Suzuki_Equator",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.500Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.500Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c73"),
  "name": "Esteem",
  "niceName": "esteem",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "Suzuki_Esteem",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.510Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.510Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c74"),
  "name": "Forenza",
  "niceName": "forenza",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Suzuki_Forenza",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.510Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.510Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c75"),
  "name": "Grand Vitara",
  "niceName": "grand-vitara",
  "years": [
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
  "edmundsId": "Suzuki_Grand_Vitara",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.520Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.520Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c76"),
  "name": "Kizashi",
  "niceName": "kizashi",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Suzuki_Kizashi",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.520Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.520Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c77"),
  "name": "Reno",
  "niceName": "reno",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008"
  ],
  "edmundsId": "Suzuki_Reno",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.530Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.530Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c78"),
  "name": "SX4",
  "niceName": "sx4",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Suzuki_SX4",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.530Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.530Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c79"),
  "name": "Samurai",
  "niceName": "samurai",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Suzuki_Samurai",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.540Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.540Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c7a"),
  "name": "Sidekick",
  "niceName": "sidekick",
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
  "edmundsId": "Suzuki_Sidekick",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.550Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.550Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c7b"),
  "name": "Swift",
  "niceName": "swift",
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
  "edmundsId": "Suzuki_Swift",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.550Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.550Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c7c"),
  "name": "Verona",
  "niceName": "verona",
  "years": [
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Suzuki_Verona",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.560Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.560Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c7d"),
  "name": "Vitara",
  "niceName": "vitara",
  "years": [
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": "Suzuki_Vitara",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.560Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.560Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c7e"),
  "name": "X-90",
  "niceName": "x-90",
  "years": [
    "1996",
    "1997",
    "1998"
  ],
  "edmundsId": "Suzuki_X_90",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.570Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.570Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c7f"),
  "name": "XL-7",
  "niceName": "xl-7",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Suzuki_XL_7",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.570Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.570Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3721fd96d81f866c80"),
  "name": "XL7",
  "niceName": "xl7",
  "years": [
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Suzuki_XL7",
  "make": ObjectId("550b28a0229533b024084083"),
  "createdAt": ISODate("2015-03-19T19:57:43.580Z"),
  "updatedAt": ISODate("2015-03-19T19:57:43.580Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3921fd96d81f866f64"),
  "name": "Model S",
  "niceName": "model-s",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Tesla_Model_S",
  "make": ObjectId("550b28a0229533b024084084"),
  "createdAt": ISODate("2015-03-19T19:57:45.710Z"),
  "updatedAt": ISODate("2015-03-19T19:57:45.710Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3921fd96d81f866f65"),
  "name": "Model X",
  "niceName": "model-x",
  "years": [
    "2016"
  ],
  "edmundsId": "Tesla_Model_X",
  "make": ObjectId("550b28a0229533b024084084"),
  "createdAt": ISODate("2015-03-19T19:57:45.720Z"),
  "updatedAt": ISODate("2015-03-19T19:57:45.720Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3921fd96d81f866f66"),
  "name": "Roadster",
  "niceName": "roadster",
  "years": [
    "2008",
    "2010",
    "2011"
  ],
  "edmundsId": "Tesla_Roadster",
  "make": ObjectId("550b28a0229533b024084084"),
  "createdAt": ISODate("2015-03-19T19:57:45.730Z"),
  "updatedAt": ISODate("2015-03-19T19:57:45.730Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f7b"),
  "name": "4Runner",
  "niceName": "4runner",
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
  "edmundsId": "Toyota_4Runner",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.650Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.650Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f7c"),
  "name": "Avalon",
  "niceName": "avalon",
  "years": [
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
  "edmundsId": "Toyota_Avalon",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.660Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.660Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f7d"),
  "name": "Avalon Hybrid",
  "niceName": "avalon-hybrid",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Toyota_Avalon_Hybrid",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.670Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.670Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f7e"),
  "name": "Camry",
  "niceName": "camry",
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
  "edmundsId": "Toyota_Camry",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.670Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.670Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f7f"),
  "name": "Camry Hybrid",
  "niceName": "camry-hybrid",
  "years": [
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
  "edmundsId": "Toyota_Camry_Hybrid",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.680Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.680Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f80"),
  "name": "Camry Solara",
  "niceName": "camry-solara",
  "years": [
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
  "edmundsId": "Toyota_Camry_Solara",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.690Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.690Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f81"),
  "name": "Celica",
  "niceName": "celica",
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
    "2005"
  ],
  "edmundsId": "Toyota_Celica",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.690Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.690Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f82"),
  "name": "Corolla",
  "niceName": "corolla",
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
  "edmundsId": "Toyota_Corolla",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.700Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.700Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f83"),
  "name": "Cressida",
  "niceName": "cressida",
  "years": [
    "1990",
    "1991",
    "1992"
  ],
  "edmundsId": "Toyota_Cressida",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.700Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.700Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f84"),
  "name": "ECHO",
  "niceName": "echo",
  "years": [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005"
  ],
  "edmundsId": "Toyota_ECHO",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.710Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.710Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f85"),
  "name": "FJ Cruiser",
  "niceName": "fj-cruiser",
  "years": [
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Toyota_FJ_Cruiser",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.720Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.720Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f86"),
  "name": "Highlander",
  "niceName": "highlander",
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
  "edmundsId": "Toyota_Highlander",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.740Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.740Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f87"),
  "name": "Highlander Hybrid",
  "niceName": "highlander-hybrid",
  "years": [
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
  "edmundsId": "Toyota_Highlander_Hybrid",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.740Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.740Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f88"),
  "name": "Land Cruiser",
  "niceName": "land-cruiser",
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
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Toyota_Land_Cruiser",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.750Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.750Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f89"),
  "name": "MR2",
  "niceName": "mr2",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Toyota_MR2",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.760Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.760Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f8a"),
  "name": "MR2 Spyder",
  "niceName": "mr2-spyder",
  "years": [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005"
  ],
  "edmundsId": "Toyota_MR2_Spyder",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.770Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.770Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f8b"),
  "name": "Matrix",
  "niceName": "matrix",
  "years": [
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
  "edmundsId": "Toyota_Matrix",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.780Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.780Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f8c"),
  "name": "Mirai",
  "niceName": "mirai",
  "years": [
    "2016"
  ],
  "edmundsId": "Toyota_Mirai",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.790Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.790Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f8d"),
  "name": "Paseo",
  "niceName": "paseo",
  "years": [
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997"
  ],
  "edmundsId": "Toyota_Paseo",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.790Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.790Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f8e"),
  "name": "Pickup",
  "niceName": "pickup",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Toyota_Pickup",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.800Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.800Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f8f"),
  "name": "Previa",
  "niceName": "previa",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997"
  ],
  "edmundsId": "Toyota_Previa",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.800Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.800Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f90"),
  "name": "Prius",
  "niceName": "prius",
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
    "2015",
    "2016"
  ],
  "edmundsId": "Toyota_Prius",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.810Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.810Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f91"),
  "name": "Prius Plug-in",
  "niceName": "prius-plug-in",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Toyota_Prius_Plug_in",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.820Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.820Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f92"),
  "name": "Prius c",
  "niceName": "prius-c",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Toyota_Prius_c",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.820Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.820Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f93"),
  "name": "Prius v",
  "niceName": "prius-v",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Toyota_Prius_v",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.830Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.830Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f94"),
  "name": "RAV4",
  "niceName": "rav4",
  "years": [
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
  "edmundsId": "Toyota_RAV4",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.830Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.830Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f95"),
  "name": "RAV4 EV",
  "niceName": "rav4-ev",
  "years": [
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Toyota_RAV4_EV",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.840Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.840Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f96"),
  "name": "Sequoia",
  "niceName": "sequoia",
  "years": [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Toyota_Sequoia",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.840Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.840Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f97"),
  "name": "Sienna",
  "niceName": "sienna",
  "years": [
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
  "edmundsId": "Toyota_Sienna",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.850Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.850Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f98"),
  "name": "Supra",
  "niceName": "supra",
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
  "edmundsId": "Toyota_Supra",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.860Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.860Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f99"),
  "name": "T100",
  "niceName": "t100",
  "years": [
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998"
  ],
  "edmundsId": "Toyota_T100",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.860Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.860Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f9a"),
  "name": "Tacoma",
  "niceName": "tacoma",
  "years": [
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
  "edmundsId": "Toyota_Tacoma",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.870Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.870Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f9b"),
  "name": "Tercel",
  "niceName": "tercel",
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
  "edmundsId": "Toyota_Tercel",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.870Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.870Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f9c"),
  "name": "Tundra",
  "niceName": "tundra",
  "years": [
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
  "edmundsId": "Toyota_Tundra",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.880Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.880Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f9d"),
  "name": "Venza",
  "niceName": "venza",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Toyota_Venza",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.880Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.880Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a3d21fd96d81f866f9e"),
  "name": "Yaris",
  "niceName": "yaris",
  "years": [
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
  "edmundsId": "Toyota_Yaris",
  "make": ObjectId("550b28a0229533b024084085"),
  "createdAt": ISODate("2015-03-19T19:57:49.890Z"),
  "updatedAt": ISODate("2015-03-19T19:57:49.890Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a1d"),
  "name": "Alltrack",
  "niceName": "alltrack",
  "years": [
    "2016"
  ],
  "edmundsId": "Volkswagen_Alltrack",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.510Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.510Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a1e"),
  "name": "Beetle",
  "niceName": "beetle",
  "years": [
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Volkswagen_Beetle",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.520Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.520Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a1f"),
  "name": "Beetle Convertible",
  "niceName": "beetle-convertible",
  "years": [
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Volkswagen_Beetle_Convertible",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.530Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.530Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a20"),
  "name": "CC",
  "niceName": "cc",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Volkswagen_CC",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.580Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.580Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a21"),
  "name": "Cabrio",
  "niceName": "cabrio",
  "years": [
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002"
  ],
  "edmundsId": "Volkswagen_Cabrio",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.590Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.590Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a22"),
  "name": "Cabriolet",
  "niceName": "cabriolet",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Volkswagen_Cabriolet",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.600Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.600Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a23"),
  "name": "Corrado",
  "niceName": "corrado",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993",
    "1994"
  ],
  "edmundsId": "Volkswagen_Corrado",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.610Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.610Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a24"),
  "name": "CrossBlue",
  "niceName": "crossblue",
  "years": [
    "2017"
  ],
  "edmundsId": "Volkswagen_CrossBlue",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.610Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.610Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a25"),
  "name": "Eos",
  "niceName": "eos",
  "years": [
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
  "edmundsId": "Volkswagen_Eos",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.620Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.620Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a26"),
  "name": "EuroVan",
  "niceName": "eurovan",
  "years": [
    "1993",
    "1995",
    "1997",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003"
  ],
  "edmundsId": "Volkswagen_EuroVan",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.630Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.630Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a27"),
  "name": "Fox",
  "niceName": "fox",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Volkswagen_Fox",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.640Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.640Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a28"),
  "name": "GLI",
  "niceName": "gli",
  "years": [
    "2008",
    "2009",
    "2012"
  ],
  "edmundsId": "Volkswagen_GLI",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.650Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.650Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a29"),
  "name": "GTI",
  "niceName": "gti",
  "years": [
    "1990",
    "1991",
    "1992",
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
    "2014"
  ],
  "edmundsId": "Volkswagen_GTI",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.660Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.660Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a2a"),
  "name": "Golf",
  "niceName": "golf",
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
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Volkswagen_Golf",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.660Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.660Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a2b"),
  "name": "Golf GTI",
  "niceName": "golf-gti",
  "years": [
    "2015"
  ],
  "edmundsId": "Volkswagen_Golf_GTI",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.670Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.670Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a2c"),
  "name": "Golf R",
  "niceName": "golf-r",
  "years": [
    "2012",
    "2013",
    "2015"
  ],
  "edmundsId": "Volkswagen_Golf_R",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.680Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.680Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a2d"),
  "name": "Golf SportWagen",
  "niceName": "golf-sportwagen",
  "years": [
    "2015"
  ],
  "edmundsId": "Volkswagen_Golf_SportWagen",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.690Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.690Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a2e"),
  "name": "Jetta",
  "niceName": "jetta",
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
  "edmundsId": "Volkswagen_Jetta",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.700Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.700Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a2f"),
  "name": "Jetta GLI",
  "niceName": "jetta-gli",
  "years": [
    "2013",
    "2014"
  ],
  "edmundsId": "Volkswagen_Jetta_GLI",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.710Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.710Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a30"),
  "name": "Jetta Hybrid",
  "niceName": "jetta-hybrid",
  "years": [
    "2013",
    "2014"
  ],
  "edmundsId": "Volkswagen_Jetta_Hybrid",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.720Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.720Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a31"),
  "name": "Jetta SportWagen",
  "niceName": "jetta-sportwagen",
  "years": [
    "2011",
    "2012",
    "2013",
    "2014"
  ],
  "edmundsId": "Volkswagen_Jetta_SportWagen",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.770Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.770Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a32"),
  "name": "New Beetle",
  "niceName": "new-beetle",
  "years": [
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
  "edmundsId": "Volkswagen_New_Beetle",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.790Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.790Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a33"),
  "name": "Passat",
  "niceName": "passat",
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
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Volkswagen_Passat",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.800Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.800Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a34"),
  "name": "Phaeton",
  "niceName": "phaeton",
  "years": [
    "2004",
    "2005",
    "2006"
  ],
  "edmundsId": "Volkswagen_Phaeton",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.810Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.810Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a35"),
  "name": "R32",
  "niceName": "r32",
  "years": [
    "2004",
    "2008"
  ],
  "edmundsId": "Volkswagen_R32",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.820Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.820Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a36"),
  "name": "Rabbit",
  "niceName": "rabbit",
  "years": [
    "2006",
    "2007",
    "2008",
    "2009"
  ],
  "edmundsId": "Volkswagen_Rabbit",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.820Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.820Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a37"),
  "name": "Routan",
  "niceName": "routan",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012"
  ],
  "edmundsId": "Volkswagen_Routan",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.830Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.830Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a38"),
  "name": "Tiguan",
  "niceName": "tiguan",
  "years": [
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Volkswagen_Tiguan",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.840Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.840Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a39"),
  "name": "Touareg",
  "niceName": "touareg",
  "years": [
    "2004",
    "2005",
    "2006",
    "2007",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Volkswagen_Touareg",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.850Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.850Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a3a"),
  "name": "Touareg 2",
  "niceName": "touareg-2",
  "years": [
    "2008",
    "2009"
  ],
  "edmundsId": "Volkswagen_Touareg_2",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.850Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.850Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a3b"),
  "name": "Vanagon",
  "niceName": "vanagon",
  "years": [
    "1990",
    "1991"
  ],
  "edmundsId": "Volkswagen_Vanagon",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.860Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.860Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4321fd96d81f867a3c"),
  "name": "e-Golf",
  "niceName": "e-golf",
  "years": [
    "2015"
  ],
  "edmundsId": "Volkswagen_e_Golf",
  "make": ObjectId("550b28a0229533b024084086"),
  "createdAt": ISODate("2015-03-19T19:57:55.860Z"),
  "updatedAt": ISODate("2015-03-19T19:57:55.860Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682e6"),
  "name": "240",
  "niceName": "240",
  "years": [
    "1990",
    "1991",
    "1992",
    "1993"
  ],
  "edmundsId": "Volvo_240",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.648Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.648Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682e7"),
  "name": "740",
  "niceName": "740",
  "years": [
    "1990",
    "1991",
    "1992"
  ],
  "edmundsId": "Volvo_740",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.649Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.649Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682e8"),
  "name": "760",
  "niceName": "760",
  "years": [
    "1990"
  ],
  "edmundsId": "Volvo_760",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.650Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.650Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682e9"),
  "name": "780",
  "niceName": "780",
  "years": [
    "1990"
  ],
  "edmundsId": "Volvo_780",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.651Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.651Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682ea"),
  "name": "850",
  "niceName": "850",
  "years": [
    "1993",
    "1994",
    "1995",
    "1996",
    "1997"
  ],
  "edmundsId": "Volvo_850",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.652Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.652Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682eb"),
  "name": "940",
  "niceName": "940",
  "years": [
    "1991",
    "1992",
    "1993",
    "1994",
    "1995"
  ],
  "edmundsId": "Volvo_940",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.653Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.653Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682ec"),
  "name": "960",
  "niceName": "960",
  "years": [
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997"
  ],
  "edmundsId": "Volvo_960",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.653Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.653Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682ed"),
  "name": "C30",
  "niceName": "c30",
  "years": [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Volvo_C30",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.654Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.654Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682ee"),
  "name": "C70",
  "niceName": "c70",
  "years": [
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013"
  ],
  "edmundsId": "Volvo_C70",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.654Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.654Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682ef"),
  "name": "Coupe",
  "niceName": "coupe",
  "years": [
    "1991"
  ],
  "edmundsId": "Volvo_Coupe",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.655Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.655Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682f0"),
  "name": "S40",
  "niceName": "s40",
  "years": [
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
  "edmundsId": "Volvo_S40",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.655Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.655Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682f1"),
  "name": "S60",
  "niceName": "s60",
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
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Volvo_S60",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.656Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.656Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682f2"),
  "name": "S70",
  "niceName": "s70",
  "years": [
    "1998",
    "1999",
    "2000"
  ],
  "edmundsId": "Volvo_S70",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.657Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.657Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682f3"),
  "name": "S80",
  "niceName": "s80",
  "years": [
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
  "edmundsId": "Volvo_S80",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.657Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.657Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682f4"),
  "name": "S90",
  "niceName": "s90",
  "years": [
    "1997",
    "1998"
  ],
  "edmundsId": "Volvo_S90",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.658Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.658Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682f5"),
  "name": "V40",
  "niceName": "v40",
  "years": [
    "2000",
    "2001",
    "2002",
    "2003",
    "2004"
  ],
  "edmundsId": "Volvo_V40",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.659Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.659Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682f6"),
  "name": "V50",
  "niceName": "v50",
  "years": [
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011"
  ],
  "edmundsId": "Volvo_V50",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.659Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.659Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682f7"),
  "name": "V60",
  "niceName": "v60",
  "years": [
    "2015"
  ],
  "edmundsId": "Volvo_V60",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.660Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.660Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682f8"),
  "name": "V60 Cross Country",
  "niceName": "v60-cross-country",
  "years": [
    "2015"
  ],
  "edmundsId": "Volvo_V60_Cross_Country",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.660Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.660Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682f9"),
  "name": "V70",
  "niceName": "v70",
  "years": [
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
  "edmundsId": "Volvo_V70",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.661Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.661Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682fa"),
  "name": "V90",
  "niceName": "v90",
  "years": [
    "1997",
    "1998"
  ],
  "edmundsId": "Volvo_V90",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.662Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.662Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682fb"),
  "name": "XC",
  "niceName": "xc",
  "years": [
    "2002"
  ],
  "edmundsId": "Volvo_XC",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.662Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.662Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682fc"),
  "name": "XC60",
  "niceName": "xc60",
  "years": [
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015"
  ],
  "edmundsId": "Volvo_XC60",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.663Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.663Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682fd"),
  "name": "XC70",
  "niceName": "xc70",
  "years": [
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
  "edmundsId": "Volvo_XC70",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.663Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.663Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4621fd96d81f8682fe"),
  "name": "XC90",
  "niceName": "xc90",
  "years": [
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
    "2016"
  ],
  "edmundsId": "Volvo_XC90",
  "make": ObjectId("550b28a0229533b024084087"),
  "createdAt": ISODate("2015-03-19T19:57:58.664Z"),
  "updatedAt": ISODate("2015-03-19T19:57:58.664Z")
});
db.getCollection("models").insert({
  "_id": ObjectId("550b2a4821fd96d81f8684e3"),
  "name": "fortwo",
  "niceName": "fortwo",
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
  "edmundsId": "smart_fortwo",
  "make": ObjectId("550b28a0229533b024084088"),
  "createdAt": ISODate("2015-03-19T19:58:00.673Z"),
  "updatedAt": ISODate("2015-03-19T19:58:00.673Z")
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
  "ns": "car.trimsmodel"
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
