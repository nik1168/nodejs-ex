
INSERT INTO smartfit.role (id, name, createdAt, modifiedAt) VALUES (1, 'admin', '2018-04-01 21:06:07', '2018-04-01 21:06:09');
INSERT INTO smartfit.role (id, name, createdAt, modifiedAt) VALUES (2, 'client', '2018-04-01 21:06:13', '2018-04-01 21:06:14');


INSERT INTO smartfit.os (id, name) VALUES (1, 'ios');
INSERT INTO smartfit.os (id, name) VALUES (2, 'android');


INSERT INTO smartfit.category (id, name, createdAt, modifiedAt) VALUES (1, 'alimentación', '2018-04-01 20:01:33', '2018-04-01 20:01:35');
INSERT INTO smartfit.category (id, name, createdAt, modifiedAt) VALUES (2, 'rutina', '2018-04-01 20:01:42', '2018-04-01 20:01:43');


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


INSERT INTO smartfit.exercise (id, name, createdAt, modifiedAt) VALUES (1, 'press de banca', '2018-04-01 21:02:56', '2018-04-01 21:02:57');


INSERT INTO smartfit.user (id, name, lastName, birthDate, token, role_id, username, password, email, gender, firstTime, image, createdAt, modifiedAt) VALUES (1, 'Niklaus', 'Geisser', '1994-01-26', 'qw', 2, 'nik1168', 'nik1168', 'ngeisser32@gmail.com', 'male', 1, 'https://pbs.twimg.com/profile_images/645602189403127808/biebd09F_400x400.jpg', '2018-04-01 21:05:35', '2018-04-01 21:05:37');


INSERT INTO smartfit.posts (id, title, content, image, category_id, createdAt, modifiedAt, video) VALUES (1, 'Quieres tener un abdomen plano?', 'Esta es la mejor dieta para poder tener el abdomen plano, consiste de lo siguiente:', null, 1, '2018-04-01 21:14:12', '2018-04-01 21:14:14', '');


INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (1, 'pectoral superior', '2018-04-01 20:59:39', '2018-04-01 20:59:40', 1);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (2, 'pectoral inferior', '2018-04-01 21:00:34', '2018-04-01 21:00:38', 1);
INSERT INTO smartfit.muscle (id, name, createdAt, modifiedAt, muscular_group_id) VALUES (3, 'deltoides', '2018-04-01 21:02:01', '2018-04-01 21:02:04', 3);


INSERT INTO smartfit.exercise_has_muscle (id, exercise_id, muscle_id) VALUES (1, 1, 2);


INSERT INTO smartfit.routine_has_exercise (id, routine_id, exercise_id, day_id, image, reps, sets) VALUES (1, 1, 1, 1, null, 15, 3);


INSERT INTO smartfit.user_has_routine (id, user_id, routine_id, active, startDate, endDate) VALUES (1, 1, 1, 1, '2018-04-01', '2018-05-01');