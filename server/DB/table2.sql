CREATE TABLE `theater2` (
  `theater_id` VARCHAR(20) NOT NULL,
  `theater_name` VARCHAR(45) NULL,
  `theater_loc` VARCHAR(45) NULL,
  `theater_address` VARCHAR(45) NULL,
  `theater_call` VARCHAR(45) NULL,
  `theater_info` TEXT NULL,
  PRIMARY KEY (`theater_id`));

INSERT INTO `theater2` (`theater_id`, `theater_name`, `theater_loc`, `theater_address`, `theater_call`, `theater_info`) VALUES ('SE01', 'BS시네마 강남점', '서울', '서울특별시 강남구 역삼동 814-6 스타플렉스', '1544-1122', '강남에 중심하여 최상의 view를 제공하는 로맨틱 멀티플렉스!');
INSERT INTO `theater2` (`theater_id`, `theater_name`, `theater_loc`, `theater_address`, `theater_call`, `theater_info`) VALUES ('SE02', 'BS시네마 신촌점', '서울', '서울특별시 서대문구 신촌역로 30 신촌민자역사 5층', '1544-1249', '고급화된 인테리어의 안락함을 즐길 수 있는 신촌의 멀티플렉스');
INSERT INTO `theater2` (`theater_id`, `theater_name`, `theater_loc`, `theater_address`, `theater_call`, `theater_info`) VALUES ('GG01', 'BS시네마 안산중앙점', '경기', '경기도 안산시 단원구 고잔동 고잔2길 41 신양복합빌딩', '1544-1243', '총 12개관의 1200석을 보유한 대규모 극장! ');
INSERT INTO `theater2` (`theater_id`, `theater_name`, `theater_loc`, `theater_address`, `theater_call`, `theater_info`) VALUES ('CC01', 'BS시네마 공주점', '충청', '충청남도 공주시 신관동 흑수골길 12', '1544-1890', '충청도 공주시의 랜드마크로 자리한 BS시네마 공주점!');
INSERT INTO `theater2` (`theater_id`, `theater_name`, `theater_loc`, `theater_address`, `theater_call`, `theater_info`) VALUES ('GW01', 'BS시네마 춘천점', '강원', '강원도 춘천시 춘천로17번길 17', '1544-2195', '탁트인 공간과 양팔걸이 좌석을 배치한 여유로운 문화생활의 장');
INSERT INTO `theater2` (`theater_id`, `theater_name`, `theater_loc`, `theater_address`, `theater_call`, `theater_info`) VALUES ('BU01', 'BS시네마 해운대', '부산', '부산광역시 해운대구 해운대로 813', '1544-9521', 'Sound, Screen, Seat의 완벽한 조율');
INSERT INTO `theater2` (`theater_id`, `theater_name`, `theater_loc`, `theater_address`, `theater_call`, `theater_info`) VALUES ('GS01', 'BS시네마 김천점', '경상', '경상북도 김천시 김천로74 한일빌딩4층', '1544-2912', '김천역 3분 거리의 김천 유일 멀티플렉스!');
INSERT INTO `theater2` (`theater_id`, `theater_name`, `theater_loc`, `theater_address`, `theater_call`, `theater_info`) VALUES ('JR01', 'BS시네마 목포점', '전라', '전라남도 목포시 옥암로 95 (상동) 포르모큐브몰 3층', '1544-9802', '6채널 분리방식의 돌비 서라운드 음향시설을 보유한 전라도 최고의 멀티플렉스');

ALTER TABLE `theater2` 
ADD COLUMN `theater_seatnum` INT NULL AFTER `theater_info`;
UPDATE `theater2` SET `theater_seatnum` = '874' WHERE (`theater_id` = 'SE01');
UPDATE `theater2` SET `theater_seatnum` = '624' WHERE (`theater_id` = 'SE02');
UPDATE `theater2` SET `theater_seatnum` = '526' WHERE (`theater_id` = 'BU01');
UPDATE `theater2` SET `theater_seatnum` = '724' WHERE (`theater_id` = 'CC01');
UPDATE `theater2` SET `theater_seatnum` = '1196' WHERE (`theater_id` = 'GG01');
UPDATE `theater2` SET `theater_seatnum` = '553' WHERE (`theater_id` = 'GS01');
UPDATE `theater2` SET `theater_seatnum` = '896' WHERE (`theater_id` = 'GW01');
UPDATE `theater2` SET `theater_seatnum` = '326' WHERE (`theater_id` = 'JR01');

