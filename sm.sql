SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
	`user_id` VARCHAR(100) NOT NULL,
    `email` VARCHAR(50) NOT NULL UNIQUE,
    `name` VARCHAR(100) NOT NULL,
    `password` VARCHAR(1000) NOT NULL,
    `rf_token` VARCHAR(200),
    PRIMARY KEY (`user_id`)
);