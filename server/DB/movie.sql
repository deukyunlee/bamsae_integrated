INSERT INTO `member` (`mem_id`, `mem_pw`, `mem_lv`, `mem_name`, `mem_phone`, `mem_email`, `mem_birth`, `mem_gender`, `mem_city`, `mem_address`, `mem_point`, `mem_join`) VALUES ('baethwjd', '12345678b!', '1', '배소정', '010-9547-9798', 'baethwjd@naver.com', '2001-05-04', '1', '경기도 안산시 상록구', '한양대학로55', '0', '2015-12-02');

UPDATE `movie` SET `movie_title` = '듄', `movie_summary` = '.', `movie_pre` = '.', `movie_type` = '.' WHERE (`movie_id` = '2');
UPDATE `movie` SET `movie_summary` = '.', `movie_pre` = '.', `movie_type` = '.' WHERE (`movie_id` = '1');
INSERT INTO `movie` (`movie_id`, `movie_title`, `movie_summary`, `movie_pre`, `movie_type`) VALUES ('3', '장르만 로맨스', '.', '.', '.');
INSERT INTO `movie` (`movie_id`, `movie_title`, `movie_summary`, `movie_pre`, `movie_type`) VALUES ('4', '디어 에반 헨슨', '.', '.', '..');
INSERT INTO `movie` (`movie_id`, `movie_title`, `movie_summary`, `movie_pre`, `movie_type`) VALUES ('5', '프렌치 디스패치', '.', '.', '.');
INSERT INTO `movie` (`movie_id`, `movie_title`, `movie_summary`, `movie_pre`, `movie_type`) VALUES ('6', '유체이탈자', '.', '.', '.');
INSERT INTO `movie` (`movie_id`, `movie_title`, `movie_summary`, `movie_pre`, `movie_type`) VALUES ('7', '연애 빠진 로맨스', '.', '.', '.');
INSERT INTO `movie` (`movie_id`, `movie_title`, `movie_summary`, `movie_pre`, `movie_type`) VALUES ('8', '엔칸토:마법의세계', '.', '.', '.');
INSERT INTO `movie` (`movie_id`, `movie_title`, `movie_summary`, `movie_pre`, `movie_type`) VALUES ('9', '고스트버스터즈 라이즈', '.', '.', '.');
INSERT INTO `movie` (`movie_id`, `movie_title`, `movie_summary`, `movie_pre`, `movie_type`) VALUES ('10', '라스트 나잇 인 소호', '.', '.', '.');
INSERT INTO `movie` (`movie_id`, `movie_title`, `movie_summary`, `movie_pre`, `movie_type`) VALUES ('11', '태일이', '.', '.', '.');

INSERT INTO `wish` (`mem_id`, `movie_id`) VALUES ('baethwjd', '1');
INSERT INTO `wish` (`mem_id`, `movie_id`) VALUES ('baethwjd', '2');
INSERT INTO `wish` (`mem_id`, `movie_id`) VALUES ('baethwjd', '3');
INSERT INTO `wish` (`mem_id`, `movie_id`) VALUES ('baethwjd', '4');
INSERT INTO `wish` (`mem_id`, `movie_id`) VALUES ('baethwjd', '5');
INSERT INTO `wish` (`mem_id`, `movie_id`) VALUES ('baethwjd', '6');
INSERT INTO `wish` (`mem_id`, `movie_id`) VALUES ('baethwjd', '7');
INSERT INTO `wish` (`mem_id`, `movie_id`) VALUES ('baethwjd', '8');
INSERT INTO `wish` (`mem_id`, `movie_id`) VALUES ('baethwjd', '9');
INSERT INTO `wish` (`mem_id`, `movie_id`) VALUES ('baethwjd', '10');
INSERT INTO `wish` (`mem_id`, `movie_id`) VALUES ('baethwjd', '11');

