SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------

DROP TABLE IF EXISTS `wallets`;
CREATE TABLE `wallets` (
    `address` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`user_id`)
);

DROP TABLE IF EXISTS `players`;
CREATE TABLE `players` (
    `buyer_address` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`user_id`)
);