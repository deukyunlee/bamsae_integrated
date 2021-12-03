ALTER TABLE auditorium DROP FOREIGN KEY audit_FK;
ALTER TABLE schedule DROP FOREIGN KEY sched_audit_PK;

SET FOREIGN_KEY_CHECKS=0;
alter table auditorium add foreign key (theater_id) references theater2(theater_id);
SET FOREIGN_KEY_CHECKS=1;

insert into auditorium (theater_id, audit_no, audit_type) VALUES("BU01",3,NULL);
insert into auditorium (theater_id, audit_no, audit_type) VALUES("CC01",1,NULL);
insert into auditorium (theater_id, audit_no, audit_type) VALUES("GG01",2,NULL);
insert into auditorium (theater_id, audit_no, audit_type) VALUES("GS01",2,NULL);
insert into auditorium (theater_id, audit_no, audit_type) VALUES("GW01",1,NULL);
insert into auditorium (theater_id, audit_no, audit_type) VALUES("JR01",5,NULL);
insert into auditorium (theater_id, audit_no, audit_type) VALUES("SE01",4,NULL);
insert into auditorium (theater_id, audit_no, audit_type) VALUES("SE02",2,NULL);

insert into schedule (audit_id, movie_id, screen_beg, screen_fin) VALUES (1,1,"2021-12-10 18:00:00", "2021-01-01 21:00:00");
insert into schedule (audit_id, movie_id, screen_beg, screen_fin) VALUES (1,2,"2021-12-10 19:00:00", "2021-01-01 22:00:00");
insert into schedule (audit_id, movie_id, screen_beg, screen_fin) VALUES (1,3,"2021-12-10 21:00:00", "2021-01-01 23:30:00");
insert into schedule (audit_id, movie_id, screen_beg, screen_fin) VALUES (2,2,"2021-12-10 18:00:00", "2021-01-01 21:00:00");
insert into schedule (audit_id, movie_id, screen_beg, screen_fin) VALUES (3,3,"2021-12-10 18:00:00", "2021-01-01 21:00:00");
insert into schedule (audit_id, movie_id, screen_beg, screen_fin) VALUES (4,4,"2021-12-10 18:00:00", "2021-01-01 21:00:00");
insert into schedule (audit_id, movie_id, screen_beg, screen_fin) VALUES (5,5,"2021-12-10 18:00:00", "2021-01-01 21:00:00");
insert into schedule (audit_id, movie_id, screen_beg, screen_fin) VALUES (6,6,"2021-12-10 18:00:00", "2021-01-01 21:00:00");
insert into schedule (audit_id, movie_id, screen_beg, screen_fin) VALUES (7,7,"2021-12-10 18:00:00", "2021-01-01 21:00:00");
insert into schedule (audit_id, movie_id, screen_beg, screen_fin) VALUES (8,8,"2021-12-10 18:00:00", "2021-01-01 21:00:00");