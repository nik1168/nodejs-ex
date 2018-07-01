
INSERT INTO smartfit.role (id, name, createdAt, modifiedAt) VALUES (1, 'admin', '2018-04-01 21:06:07', '2018-04-01 21:06:09');
INSERT INTO smartfit.role (id, name, createdAt, modifiedAt) VALUES (2, 'client', '2018-04-01 21:06:13', '2018-04-01 21:06:14');


INSERT INTO smartfit.os (id, name) VALUES (1, 'ios');
INSERT INTO smartfit.os (id, name) VALUES (2, 'android');


INSERT INTO smartfit.category (id, name, createdAt, modifiedAt) VALUES (1, 'alimentación', '2018-04-01 20:01:33', '2018-04-01 20:01:35');
INSERT INTO smartfit.category (id, name, createdAt, modifiedAt) VALUES (2, 'rutina', '2018-04-01 20:01:42', '2018-04-01 20:01:43');
INSERT INTO smartfit.category (id, name, createdAt, modifiedAt) VALUES (3, 'general', '2018-04-01 20:01:42', '2018-04-01 20:01:43');
INSERT INTO smartfit.category (id, name, createdAt, modifiedAt) VALUES (4, 'motivación', '2018-04-01 20:01:42', '2018-04-01 20:01:43');


INSERT INTO smartfit.routine (id, name, createdAt, modifiedAt, image, description) VALUES (1, 'Rutina para perder grasa', '2018-04-01 20:57:18', '2018-04-01 20:57:19', null, 'Idealmente, debéis hacer esta rutina para perder grasa en tres días semanales alternos de 30 a 45 minutos de pesas (aeróbicos aparte).Lo ideal sería entrenar lunes-miércoles-viernes, pero no siempre se puede, sobre todo durante las fiestas.');


INSERT INTO smartfit.day (id, name) VALUES (1, 'lunes');
INSERT INTO smartfit.day (id, name) VALUES (2, 'martes');
INSERT INTO smartfit.day (id, name) VALUES (3, 'miércoles');
INSERT INTO smartfit.day (id, name) VALUES (4, 'jueves');
INSERT INTO smartfit.day (id, name) VALUES (5, 'viernes');
INSERT INTO smartfit.day (id, name) VALUES (6, 'sábado');
INSERT INTO smartfit.day (id, name) VALUES (7, 'domingo');


INSERT INTO smartfit.muscular_group (id, name, createdAt, modifiedAt) VALUES (1, 'pecho', '2018-04-01 20:51:08', '2018-04-01 20:51:10');
INSERT INTO smartfit.muscular_group (id, name, createdAt, modifiedAt) VALUES (2, 'espalda', '2018-04-01 20:51:21', '2018-04-01 20:51:23');
INSERT INTO smartfit.muscular_group (id, name, createdAt, modifiedAt) VALUES (3, 'hombros', '2018-04-01 20:54:53', '2018-04-01 20:54:54');
INSERT INTO smartfit.muscular_group (id, name, createdAt, modifiedAt) VALUES (4, 'pierna', '2018-04-01 20:55:14', '2018-04-01 20:55:16');
INSERT INTO smartfit.muscular_group (id, name, createdAt, modifiedAt) VALUES (5, 'abdominales', '2018-04-01 20:55:34', '2018-04-01 20:55:35');
INSERT INTO smartfit.muscular_group (id, name, createdAt, modifiedAt) VALUES (6, 'brazos', '2018-04-01 20:55:49', '2018-04-01 20:55:51');


INSERT INTO smartfit.exercise (id, name, createdAt, modifiedAt) VALUES (1, 'press de banca plano', '2018-04-01 21:02:56', '2018-04-01 21:02:57');
INSERT INTO smartfit.exercise (id, name, createdAt, modifiedAt) VALUES (2, 'press de banca inclinado', '2018-04-01 21:02:56', '2018-04-01 21:02:57');
INSERT INTO smartfit.exercise (id, name, createdAt, modifiedAt) VALUES (3, 'press de banca declinado', '2018-04-01 21:02:56', '2018-04-01 21:02:57');
INSERT INTO smartfit.exercise (id, name, createdAt, modifiedAt) VALUES (4, 'flexiones de brazos en el suelo', '2018-04-01 21:02:56', '2018-04-01 21:02:57');
INSERT INTO smartfit.exercise (id, name, createdAt, modifiedAt) VALUES (5, 'fondos en paralelas', '2018-04-01 21:02:56', '2018-04-01 21:02:57');
INSERT INTO smartfit.exercise (id, name, createdAt, modifiedAt) VALUES (6, 'press con mancuernas', '2018-04-01 21:02:56', '2018-04-01 21:02:57');
INSERT INTO smartfit.exercise (id, name, createdAt, modifiedAt) VALUES (7, 'aperturas con mancuernas', '2018-04-01 21:02:56', '2018-04-01 21:02:57');
INSERT INTO smartfit.exercise (id, name, createdAt, modifiedAt) VALUES (8, 'cruces en poleas', '2018-04-01 21:02:56', '2018-04-01 21:02:57');
INSERT INTO smartfit.exercise (id, name, createdAt, modifiedAt) VALUES (9, 'pull-over con mancuerna', '2018-04-01 21:02:56', '2018-04-01 21:02:57');
INSERT INTO smartfit.exercise (id, name, createdAt, modifiedAt) VALUES (10, 'pull-over con barra en banco plano', '2018-04-01 21:02:56', '2018-04-01 21:02:57');


INSERT INTO smartfit.user (id, name, lastName, birthDate, token, role_id, username, password, email, phoneNumber, gender, firstTime, image, createdAt, modifiedAt) VALUES (1, 'Niklaus', 'Geisser', '1994-01-26', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik5pa2xhdXMiLCJsYXN0TmFtZSI6IkdlaXNzZXIiLCJiaXJ0aERhdGUiOiIxOTk0LTAxLTI2VDAwOjAwOjAwLjAwMFoiLCJ0b2tlbiI6InF3IiwidXNlcm5hbWUiOiJuaWsxMTY4IiwicGFzc3dvcmQiOiJuaWsxMTY4IiwiZW1haWwiOiJuZ2Vpc3NlcjMyQGdtYWlsLmNvbSIsInBob25lTnVtYmVyIjoiNzIwOTU1MzAiLCJnZW5kZXIiOiJtYWxlIiwiZmlyc3RUaW1lIjp0cnVlLCJyb2xlX2lkIjoyLCJpbWFnZSI6Imh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy82NDU2MDIxODk0MDMxMjc4MDgvYmllYmQwOUZfNDAweDQwMC5qcGciLCJjcmVhdGVkQXQiOiIyMDE4LTA0LTAxVDIxOjA1OjM1LjAwMFoiLCJtb2RpZmllZEF0IjoiMjAxOC0wNC0wMVQyMTowNTozNy4wMDBaIiwiaWF0IjoxNTMwNDgwOTUzLCJleHAiOjE1MzA0ODIzOTN9.WsdEr5BpWm1kVelRKYhgOalssLufx0pUwN2U6vW84sc', 2, 'nik1168', 'nik1168', 'ngeisser32@gmail.com', '72095530', 'male', 1, 'https://pbs.twimg.com/profile_images/645602189403127808/biebd09F_400x400.jpg', '2018-04-01 21:05:35', '2018-04-01 21:05:37');


INSERT INTO smartfit.posts (id, title, content, image, category_id, createdAt, modifiedAt, video) VALUES (1, 'Quieres tener un abdomen plano?', 'Esta es la mejor dieta para poder tener el abdomen plano, consiste de lo siguiente:', null, 1, '2018-04-01 21:14:12', '2018-04-01 21:14:14', '');


INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (1, 'pectoral superior', '2018-04-01 20:59:39', '2018-04-01 20:59:40', 1);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (2, 'pectoral inferior', '2018-04-01 21:00:34', '2018-04-01 21:00:38', 1);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (3, 'trapecio', '2018-04-01 21:00:34', '2018-04-01 21:00:38', 2);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (4, 'romboides mayor', '2018-04-01 21:00:34', '2018-04-01 21:00:38', 2);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (5, 'romboides menor', '2018-04-01 21:00:34', '2018-04-01 21:00:38', 2);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (6, 'redondo mayor', '2018-04-01 21:00:34', '2018-04-01 21:00:38', 2);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (7, 'redondo menor', '2018-04-01 21:00:34', '2018-04-01 21:00:38', 2);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (8, 'dorsal ancho', '2018-04-01 21:00:34', '2018-04-01 21:00:38', 2);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (9, 'fasia toracolumbar', '2018-04-01 21:00:34', '2018-04-01 21:00:38', 2);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (10, 'erector de columna', '2018-04-01 21:00:34', '2018-04-01 21:00:38', 2);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (11, 'deltoides anterior', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 3);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (12, 'deltoides medial', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 3);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (13, 'deltoides posterior', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 3);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (14, 'gluteos', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 4);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (15, 'cuádriceps', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 4);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (16, 'isquiotibiales', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 4);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (17, 'aductores', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 4);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (18, 'gemelos', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 4);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (19, 'femorales', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 4);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (20, 'biceps', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 6);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (21, 'triceps', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 6);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (22, 'ante brazos', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 6);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (23, 'abdominal superior', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 5);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (24, 'abdominal inferior', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 5);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (25, 'pectoral interior', '2018-04-01 21:00:34', '2018-04-01 21:00:38', 1);


INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (1, 1, 2);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (2, 1, 20);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (3, 2, 1);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (4, 2, 20);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (5, 3, 2);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (6, 3, 20);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (7, 4, 2);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (8, 4, 20);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (9, 5, 1);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (10, 5, 2);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (11, 5, 20);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (12, 6, 25);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (13, 7, 1);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (14, 7, 25);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (15, 8, 1);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (16, 8, 2);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (17, 8, 25);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (18, 9, 1);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (19, 9, 2);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (20, 9, 20);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (21, 9, 25);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (22, 9, 8);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (23, 9, 4);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (24, 10, 1);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (25, 10, 2);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (26, 10, 20);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (27, 10, 25);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (28, 10, 8);
INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (29, 10, 4);



INSERT INTO smartfit.routine_has_exercise (id, routine_id, exercise_id, day_id, image, reps, sets) VALUES (1, 1, 1, 1, null, 15, 3);


INSERT INTO smartfit.user_has_routine (id, user_id, routine_id, active, startDate, endDate) VALUES (1, 1, 1, 1, '2018-04-01', '2018-05-01');

INSERT INTO smartfit.diet (name, createdAt, modifiedAt, image, description) VALUES ('Dieta para bajar de peso', '2018-04-29 22:42:43', '2018-04-29 22:42:45', 'https://i.pinimg.com/originals/a5/fd/fa/a5fdfa93cf34949472440c2c51a36d4f.jpg', 'Poderosa dieta para bajar de peso en una semana.')