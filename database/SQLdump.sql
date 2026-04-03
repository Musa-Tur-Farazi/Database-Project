/*
 Source Server         : first
 Source Server Type    : Oracle
 Source Server Version : 190000
 Source Host           : localhost:1521
 Source Schema         : C##MyTour

 Target Server Type    : Oracle
 Target Server Version : 190000
 File Encoding         : 65001

*/

-- ----------------------------
-- Sequence structure for ISEQ$$_76780
-- ----------------------------
CREATE SEQUENCE "ISEQ$$_76780" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 CACHE 20;

-- ----------------------------
-- Sequence structure for ISEQ$$_78421
-- ----------------------------
CREATE SEQUENCE "ISEQ$$_78421" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 CACHE 20;

-- ----------------------------
-- Sequence structure for ISEQ$$_78424
-- ----------------------------
CREATE SEQUENCE "ISEQ$$_78424" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 CACHE 20;

-- ----------------------------
-- Sequence structure for ISEQ$$_78427
-- ----------------------------
CREATE SEQUENCE "ISEQ$$_78427" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 CACHE 20;

-- ----------------------------
-- Sequence structure for ISEQ$$_78430
-- ----------------------------
CREATE SEQUENCE "ISEQ$$_78430" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 CACHE 20;

-- ----------------------------
-- Sequence structure for ISEQ$$_78433
-- ----------------------------
CREATE SEQUENCE "ISEQ$$_78433" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 CACHE 20;

-- ----------------------------
-- Sequence structure for ISEQ$$_78436
-- ----------------------------
CREATE SEQUENCE "ISEQ$$_78436" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 CACHE 20;

-- ----------------------------
-- Sequence structure for ISEQ$$_78896
-- ----------------------------
CREATE SEQUENCE "ISEQ$$_78896" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 CACHE 20;

-- ----------------------------
-- Sequence structure for ISEQ$$_78899
-- ----------------------------
CREATE SEQUENCE "ISEQ$$_78899" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 CACHE 20;

-- ----------------------------
-- Sequence structure for ISEQ$$_79836
-- ----------------------------
CREATE SEQUENCE "ISEQ$$_79836" MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 CACHE 20;


-- ----------------------------
-- Table structure for ADMIN
-- ----------------------------
CREATE TABLE "ADMIN"
(
    "ADMIN_USERID" NUMBER VISIBLE DEFAULT "ISEQ$$_78430".nextval NOT NULL,
    "NAME"         VARCHAR2(20 BYTE) VISIBLE                                 NOT NULL,
    "CITY"         VARCHAR2(20 BYTE) VISIBLE                                 NOT NULL,
    "STREETNAME"   VARCHAR2(20 BYTE) VISIBLE                                 NOT NULL,
    "COUNTRY"      VARCHAR2(20 BYTE) VISIBLE                                 NOT NULL,
    "PHONENUMBER"  VARCHAR2(20 BYTE) VISIBLE                                 NOT NULL,
    "MAIL"         VARCHAR2(100 BYTE) VISIBLE                                NOT NULL,
    "PASSWORD"     VARCHAR2(20 BYTE) VISIBLE                                 NOT NULL
)
    LOGGING
    NOCOMPRESS
    PCTFREE 10
    INITRANS 1
    STORAGE
(
    INITIAL 65536
    NEXT 1048576
    MINEXTENTS 1
    MAXEXTENTS 2147483645
    BUFFER_POOL DEFAULT
)
    PARALLEL 1
    NOCACHE
    DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of ADMIN
-- ----------------------------
INSERT INTO "ADMIN"
VALUES ('501', 'Farazi', 'Dhaka', 'Shantinagar', 'Bangladesh', '01758813679', 'musatur330@gmail.com', '123456');
INSERT INTO "ADMIN"
VALUES ('502','Rifat', 'Dhaka', 'Mirpur', 'Bangladesh', '01603515915', 'rifathosain2@gmail.com', '123456');

-- ----------------------------
-- Table structure for BOOKED
-- ----------------------------
CREATE TABLE "BOOKED"
(
    "BOOKING_ID" NUMBER VISIBLE,
    "HOTEL_ID"   NUMBER VISIBLE,
    "ROOM_ID"    NUMBER VISIBLE
)
    LOGGING
    NOCOMPRESS
    PCTFREE 10
    INITRANS 1
    STORAGE
(
    INITIAL 65536
    NEXT 1048576
    MINEXTENTS 1
    MAXEXTENTS 2147483645
    BUFFER_POOL DEFAULT
)
    PARALLEL 1
    NOCACHE
    DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of BOOKED
-- ----------------------------
INSERT INTO "BOOKED"
VALUES ('202', '403', '300');
INSERT INTO "BOOKED"
VALUES ('202', '403', '301');
INSERT INTO "BOOKED"
VALUES ('202', '403', '302');
INSERT INTO "BOOKED"
VALUES ('204', '401', '306');
INSERT INTO "BOOKED"
VALUES ('204', '401', '307');
INSERT INTO "BOOKED"
VALUES ('204', '401', '308');
INSERT INTO "BOOKED"
VALUES ('247', '401', '308');
INSERT INTO "BOOKED"
VALUES ('247', '401', '310');
INSERT INTO "BOOKED"
VALUES ('249', '402', '317');
INSERT INTO "BOOKED"
VALUES ('249', '402', '318');
INSERT INTO "BOOKED"
VALUES ('250', '401', '311');
INSERT INTO "BOOKED"
VALUES ('244', '401', '306');
INSERT INTO "BOOKED"
VALUES ('244', '401', '309');
INSERT INTO "BOOKED"
VALUES ('253', '401', '312');
INSERT INTO "BOOKED"
VALUES ('235', '401', '306');
INSERT INTO "BOOKED"
VALUES ('235', '401', '307');
INSERT INTO "BOOKED"
VALUES ('235', '401', '309');
INSERT INTO "BOOKED"
VALUES ('235', '401', '310');
INSERT INTO "BOOKED"
VALUES ('253', '401', '306');
INSERT INTO "BOOKED"
VALUES ('253', '401', '307');
INSERT INTO "BOOKED"
VALUES ('245', '401', '306');
INSERT INTO "BOOKED"
VALUES ('245', '401', '312');
INSERT INTO "BOOKED"
VALUES ('246', '401', '307');
INSERT INTO "BOOKED"
VALUES ('246', '401', '309');
INSERT INTO "BOOKED"
VALUES ('248', '402', '314');
INSERT INTO "BOOKED"
VALUES ('248', '402', '319');
INSERT INTO "BOOKED"
VALUES ('252', '402', '314');
INSERT INTO "BOOKED"
VALUES ('252', '402', '319');
INSERT INTO "BOOKED"
VALUES ('243', '401', '306');
INSERT INTO "BOOKED"
VALUES ('243', '401', '312');

-- ----------------------------
-- Table structure for BOOKING
-- ----------------------------
CREATE TABLE "BOOKING"
(
    "BOOKING_ID"    NUMBER VISIBLE DEFAULT "ISEQ$$_78436".nextval NOT NULL,
    "CHECK_INDATE"  DATE VISIBLE,
    "CHECK_OUTDATE" DATE VISIBLE,
    "CUSTOMER_ID"   NUMBER VISIBLE
)
    LOGGING
    NOCOMPRESS
    PCTFREE 10
    INITRANS 1
    STORAGE
(
    INITIAL 65536
    NEXT 1048576
    MINEXTENTS 1
    MAXEXTENTS 2147483645
    BUFFER_POOL DEFAULT
)
    PARALLEL 1
    NOCACHE
    DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of BOOKING
-- ----------------------------
INSERT INTO "BOOKING"
VALUES ('202', TO_DATE('2023-01-05 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-01-07 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '2');
INSERT INTO "BOOKING"
VALUES ('203', TO_DATE('2023-02-05 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-02-15 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '2');
INSERT INTO "BOOKING"
VALUES ('204', TO_DATE('2023-02-09 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-02-13 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '3');
INSERT INTO "BOOKING"
VALUES ('205', TO_DATE('2023-02-10 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-03-10 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '3');
INSERT INTO "BOOKING"
VALUES ('249', TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '2');
INSERT INTO "BOOKING"
VALUES ('244', TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), NULL, '2');
INSERT INTO "BOOKING"
VALUES ('247', TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '2');
INSERT INTO "BOOKING"
VALUES ('250', TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), NULL);
INSERT INTO "BOOKING"
VALUES ('235', TO_DATE('2023-02-13 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-02-15 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '1');
INSERT INTO "BOOKING"
VALUES ('253', TO_DATE('2023-02-24 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-02-26 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '2');
INSERT INTO "BOOKING"
VALUES ('245', TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '2');
INSERT INTO "BOOKING"
VALUES ('246', TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '2');
INSERT INTO "BOOKING"
VALUES ('248', TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '2');
INSERT INTO "BOOKING"
VALUES ('251', TO_DATE('2023-02-23 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-02-23 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '2');
INSERT INTO "BOOKING"
VALUES ('252', TO_DATE('2023-02-24 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'),
        TO_DATE('2023-02-28 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), '2');
INSERT INTO "BOOKING"
VALUES ('242', TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), NULL, NULL);
INSERT INTO "BOOKING"
VALUES ('243', TO_DATE('2023-02-21 00:00:00', 'SYYYY-MM-DD HH24:MI:SS'), NULL, NULL);

-- ----------------------------
-- Table structure for CUSTOMER
-- ----------------------------
CREATE TABLE "CUSTOMER"
(
    "CUSTOMER_ID" NUMBER VISIBLE DEFAULT "ISEQ$$_78424".nextval NOT NULL,
    "NAME"        VARCHAR2(20 BYTE) VISIBLE                                 NOT NULL,
    "CITY"        VARCHAR2(20 BYTE) VISIBLE,
    "STREETNAME"  VARCHAR2(20 BYTE) VISIBLE,
    "COUNTRY"     VARCHAR2(20 BYTE) VISIBLE,
    "PHONENUMBER" VARCHAR2(20 BYTE) VISIBLE                                 NOT NULL,
    "MAIL"        VARCHAR2(100 BYTE) VISIBLE                                NOT NULL,
    "PASSWORD"    VARCHAR2(20 BYTE) VISIBLE                                 NOT NULL
)
    LOGGING
    NOCOMPRESS
    PCTFREE 10
    INITRANS 1
    STORAGE
(
    INITIAL 65536
    NEXT 1048576
    MINEXTENTS 1
    MAXEXTENTS 2147483645
    BUFFER_POOL DEFAULT
)
    PARALLEL 1
    NOCACHE
    DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of CUSTOMER
-- ----------------------------
INSERT INTO "CUSTOMER"
VALUES ('1', 'Promi', 'Khulna', 'Fultoli', 'Bangladesh', '0175757575', 'promiii@gmail.com', '1234');
INSERT INTO "CUSTOMER"
VALUES ('2', 'Rafi', 'Dhaka', 'Dholairpar', 'Bangladesh', '01819942650', 'rafi000@gmail.com', '1234');
INSERT INTO "CUSTOMER"
VALUES ('3', 'Riha', 'Chittagong', 'Fulbazar', 'Bangladesh', '0199887728', 'riha61@gmail.com', '1234');
INSERT INTO "CUSTOMER"
VALUES ('4', 'Anik', 'Dhaka', 'Malibag', 'Bangladesh', '01819944639', 'imanik420@gmail.com', '1234');
INSERT INTO "CUSTOMER"
VALUES ('5', 'Somik', 'Dhaka', 'Uttora', 'Bangladesh', '01758813365', 'Somik12@gmail.com', '12345');

-- ----------------------------
-- Table structure for HOTEL
-- ----------------------------
CREATE TABLE "HOTEL"
(
    "HOTEL_ID"     NUMBER VISIBLE DEFAULT "ISEQ$$_78433".nextval NOT NULL,
    "NAME"         VARCHAR2(20 BYTE) VISIBLE                                 NOT NULL,
    "STREETNAME"   VARCHAR2(20 BYTE) VISIBLE                                 NOT NULL,
    "CITY"         VARCHAR2(20 BYTE) VISIBLE                                 NOT NULL,
    "COUNTRY"      VARCHAR2(20 BYTE) VISIBLE                                 NOT NULL,
    "RATING"       NUMBER(2, 1) VISIBLE,
    "REVIEW"       VARCHAR2(1000 BYTE) VISIBLE,
    "ADMIN_USERID" NUMBER VISIBLE
)
    LOGGING
    NOCOMPRESS
    PCTFREE 10
    INITRANS 1
    STORAGE
(
    INITIAL 65536
    NEXT 1048576
    MINEXTENTS 1
    MAXEXTENTS 2147483645
    BUFFER_POOL DEFAULT
)
    PARALLEL 1
    NOCACHE
    DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of HOTEL
-- ----------------------------
INSERT INTO "HOTEL"
VALUES ('401', 'Taz', 'Halishahar', 'Chittagong', 'Bangladesh', '4.2', 'This hotel is indeed best in the town!', '501');
INSERT INTO "HOTEL"
VALUES ('402', 'Hotel_hill_view', 'Synga', 'Bandarban', 'Bangladesh', '4.5', 'Had a nice experience!', '501');
INSERT INTO "HOTEL"
VALUES ('403', 'Hotel Square Park', 'Doyel Chattar', 'Rangamati', 'Bangladesh', '4.2', 'This hotel is best fitted for all!', '501');
INSERT INTO "HOTEL"
VALUES ('404', 'Paradise', 'Eiffle tower', 'Paris', 'France', '4.8', 'Well enough!', '502');
INSERT INTO "HOTEL"
VALUES ('405', 'Queens Hotel', 'Queens', 'New York', 'USA', '5', 'This hotel is luxurious!', '502');

-- ----------------------------
-- Table structure for HOTEL_PIC
-- ----------------------------
CREATE TABLE "HOTEL_PIC"
(
    "HOTEL_ID" NUMBER VISIBLE,
    "IMAGE"    VARCHAR2(500 BYTE) VISIBLE
)
    LOGGING
    NOCOMPRESS
    PCTFREE 10
    INITRANS 1
    STORAGE
(
    INITIAL 65536
    NEXT 1048576
    MINEXTENTS 1
    MAXEXTENTS 2147483645
    BUFFER_POOL DEFAULT
)
    PARALLEL 1
    NOCACHE
    DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of HOTEL_PIC
-- ----------------------------
INSERT INTO "HOTEL_PIC"
VALUES ('401',
        'F:\2-2_Database_project\MyTour\MyTour\frontend\src\images\background2.jpg'); 

INSERT INTO "HOTEL_PIC"
VALUES ('402',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(408).png?alt=media&token=48e5ad7b-4624-4502-babe-a8f35ac3e061');
INSERT INTO "HOTEL_PIC"
VALUES ('403',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(409).png?alt=media&token=f1cce345-4c3f-4f39-8128-3591d4c62819');
INSERT INTO "HOTEL_PIC"
VALUES ('404',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(410).png?alt=media&token=72a50234-64dd-4936-8aa3-f78fa74724da');
INSERT INTO "HOTEL_PIC"
VALUES ('405',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(411).png?alt=media&token=c7fab380-ae12-46c5-9213-c1fa61840d6e');

-- ----------------------------
-- Table structure for IMAGE_COST
-- ----------------------------
CREATE TABLE "IMAGE_COST"
(
    "HOTEL_ID"       NUMBER VISIBLE,
    "ROOM_TYPE"      VARCHAR2(20 BYTE) VISIBLE,
    "COST_PER_NIGHT" NUMBER VISIBLE,
    "IMAGE"          VARCHAR2(500 BYTE) VISIBLE
)
    LOGGING
    NOCOMPRESS
    PCTFREE 10
    INITRANS 1
    STORAGE
(
    INITIAL 65536
    NEXT 1048576
    MINEXTENTS 1
    MAXEXTENTS 2147483645
    BUFFER_POOL DEFAULT
)
    PARALLEL 1
    NOCACHE
    DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of IMAGE_COST
-- ----------------------------
INSERT INTO "IMAGE_COST"
VALUES ('403', 'villa', '1000',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(385).png?alt=media&token=84c541cc-ac18-43df-8313-7f85984e9fca');
INSERT INTO "IMAGE_COST"
VALUES ('403', 'regular', '2000',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(386).png?alt=media&token=af8ff487-a21a-40f4-93da-3e6c3a292ee0');
INSERT INTO "IMAGE_COST"
VALUES ('401', 'ifsjdfg', '3000',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(387).png?alt=media&token=b9aa942e-2e9f-47d5-86d2-087a89d0c7c2');
INSERT INTO "IMAGE_COST"
VALUES ('401', 'regular', '4000',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(396).png?alt=media&token=288adf69-df35-4544-a77d-d52bd0ed184f');
INSERT INTO "IMAGE_COST"
VALUES ('401', 'suites', '5000',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(397).png?alt=media&token=fb47d486-84b8-4729-9a7f-908bd5a48a0e');
INSERT INTO "IMAGE_COST"
VALUES ('402', 'villa', '6000',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(398).png?alt=media&token=cd43bacf-5897-4b4e-9e8a-78f1cb99952a');
INSERT INTO "IMAGE_COST"
VALUES ('402', 'regular', '7000',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(399).png?alt=media&token=19819ca1-0916-4278-ae38-dac5232007b5');
INSERT INTO "IMAGE_COST"
VALUES ('402', 'suites', '8000',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(400).png?alt=media&token=833cd319-4bff-4b4e-9bef-cd92dadd5afe');
INSERT INTO "IMAGE_COST"
VALUES ('404', 'suites', '9000',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(401).png?alt=media&token=0ec486c6-e3df-4c38-82e1-6e8cd89cb561');
INSERT INTO "IMAGE_COST"
VALUES ('404', 'villa', '10000',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(387).png?alt=media&token=b9aa942e-2e9f-47d5-86d2-087a89d0c7c2');
INSERT INTO "IMAGE_COST"
VALUES ('405', 'suites', '20000',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(398).png?alt=media&token=cd43bacf-5897-4b4e-9e8a-78f1cb99952a');
INSERT INTO "IMAGE_COST"
VALUES ('405', 'villa', '30000',
        'https://firebasestorage.googleapis.com/v0/b/touron-c8928.appspot.com/o/Screenshot%20(401).png?alt=media&token=0ec486c6-e3df-4c38-82e1-6e8cd89cb561');

-- ----------------------------
-- Table structure for PAYMENT
-- ----------------------------
CREATE TABLE "PAYMENT"
(
    "PAYMENT_ID"        NUMBER VISIBLE DEFAULT "ISEQ$$_79836".nextval NOT NULL,
    "PAYMENT_METHOD"    VARCHAR2(100 BYTE) VISIBLE,
    "CARD_PHONE_NUMBER" VARCHAR2(100 BYTE) VISIBLE,
    "BOOKING_ID"        NUMBER VISIBLE,
    "PAYMENT_DATE"      DATE VISIBLE,
    "AMMOUNT"           NUMBER(8, 2) VISIBLE
)
    LOGGING
    NOCOMPRESS
    PCTFREE 10
    INITRANS 1
    STORAGE
(
    INITIAL 65536
    NEXT 1048576
    MINEXTENTS 1
    MAXEXTENTS 2147483645
    BUFFER_POOL DEFAULT
)
    PARALLEL 1
    NOCACHE
    DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of PAYMENT
-- ----------------------------
INSERT INTO "PAYMENT"
VALUES ('102', 'rocket', '678954', '249', TO_DATE('2023-02-02 13:15:12', 'SYYYY-MM-DD HH24:MI:SS'), '19000');
INSERT INTO "PAYMENT"
VALUES ('103', 'nogod', '678', '250', TO_DATE('2023-02-19 16:02:54', 'SYYYY-MM-DD HH24:MI:SS'), '6000');
INSERT INTO "PAYMENT"
VALUES ('100', 'bkash', '0199', '244', TO_DATE('2023-03-21 11:51:55', 'SYYYY-MM-DD HH24:MI:SS'), '500');
INSERT INTO "PAYMENT"
VALUES ('106', 'nogod', '46547', '253', TO_DATE('2023-02-23 16:39:06', 'SYYYY-MM-DD HH24:MI:SS'), '72000');
INSERT INTO "PAYMENT"
VALUES ('101', 'rocket', '8888', '248', TO_DATE('2023-02-21 12:13:49', 'SYYYY-MM-DD HH24:MI:SS'), NULL);
INSERT INTO "PAYMENT"
VALUES ('104', NULL, NULL, '251', TO_DATE('2023-02-23 02:11:13', 'SYYYY-MM-DD HH24:MI:SS'), '0');
INSERT INTO "PAYMENT"
VALUES ('105', 'paypal', '460987357', '252', TO_DATE('2023-02-23 13:14:35', 'SYYYY-MM-DD HH24:MI:SS'), '71250');

-- ----------------------------
-- Table structure for ROOMS
-- ----------------------------
CREATE TABLE "ROOMS"
(
    "ROOM_ID"   NUMBER VISIBLE            NOT NULL,
    "HOTEL_ID"  NUMBER VISIBLE            NOT NULL,
    "ROOM_TYPE" VARCHAR2(20 BYTE) VISIBLE NOT NULL
)
    LOGGING
    NOCOMPRESS
    PCTFREE 10
    INITRANS 1
    STORAGE
(
    INITIAL 65536
    NEXT 1048576
    MINEXTENTS 1
    MAXEXTENTS 2147483645
    BUFFER_POOL DEFAULT
)
    PARALLEL 1
    NOCACHE
    DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of ROOMS
-- ----------------------------
INSERT INTO "ROOMS"
VALUES ('300', '403', 'villa');
INSERT INTO "ROOMS"
VALUES ('301', '403', 'villa');
INSERT INTO "ROOMS"
VALUES ('302', '403', 'villa');
INSERT INTO "ROOMS"
VALUES ('303', '403', 'regular');
INSERT INTO "ROOMS"
VALUES ('304', '403', 'studio apartment');
INSERT INTO "ROOMS"
VALUES ('305', '403', 'regular');
INSERT INTO "ROOMS"
VALUES ('306', '401', 'villa');
INSERT INTO "ROOMS"
VALUES ('307', '401', 'regular');
INSERT INTO "ROOMS"
VALUES ('308', '401', 'villa');
INSERT INTO "ROOMS"
VALUES ('309', '401', 'regular');
INSERT INTO "ROOMS"
VALUES ('310', '401', 'regular');
INSERT INTO "ROOMS"
VALUES ('311', '401', 'studio apartment');
INSERT INTO "ROOMS"
VALUES ('312', '401', 'suites');
INSERT INTO "ROOMS"
VALUES ('313', '401', 'presidential suites');
INSERT INTO "ROOMS"
VALUES ('314', '402', 'villa');
INSERT INTO "ROOMS"
VALUES ('315', '402', 'villa');
INSERT INTO "ROOMS"
VALUES ('316', '402', 'villa');
INSERT INTO "ROOMS"
VALUES ('317', '402', 'regular');
INSERT INTO "ROOMS"
VALUES ('318', '402', 'regular');
INSERT INTO "ROOMS"
VALUES ('319', '402', 'duplex');
INSERT INTO "ROOMS"
VALUES ('320', '402', 'executive suites');
INSERT INTO "ROOMS"
VALUES ('321', '404', 'villa suite');
INSERT INTO "ROOMS"
VALUES ('322', '404', 'villa suite');
INSERT INTO "ROOMS"
VALUES ('323', '404', 'villa');
INSERT INTO "ROOMS"
VALUES ('324', '404', 'suites');
INSERT INTO "ROOMS"
VALUES ('325', '404', 'suites');
INSERT INTO "ROOMS"
VALUES ('326', '405', 'villa');
INSERT INTO "ROOMS"
VALUES ('327', '405', 'villa');
INSERT INTO "ROOMS"
VALUES ('328', '405', 'villa');
INSERT INTO "ROOMS"
VALUES ('329', '405', 'suites');
INSERT INTO "ROOMS"
VALUES ('330', '405', 'suites');
INSERT INTO "ROOMS"
VALUES ('450', '402', 'villa');
INSERT INTO "ROOMS"
VALUES ('340', '402', 'villa');
INSERT INTO "ROOMS"
VALUES ('451', '402', 'villa');
INSERT INTO "ROOMS"
VALUES ('452', '402', 'adjoining');
INSERT INTO "ROOMS"
VALUES ('456', '402', 'suites');
INSERT INTO "ROOMS"
VALUES ('678', '401', 'regular');

-- ----------------------------
-- Table structure for SERVICES
-- ----------------------------
CREATE TABLE "SERVICES"
(
    "SERVICE_ID"  NUMBER VISIBLE DEFAULT "ISEQ$$_78899".nextval NOT NULL,
    "HOTEL_ID"    NUMBER VISIBLE,
    "COST"        NUMBER VISIBLE                                            NOT NULL,
    "DESCRIPTION" VARCHAR2(500 BYTE) VISIBLE                                NOT NULL
)
    LOGGING
    NOCOMPRESS
    PCTFREE 10
    INITRANS 1
    STORAGE
(
    INITIAL 65536
    NEXT 1048576
    MINEXTENTS 1
    MAXEXTENTS 2147483645
    BUFFER_POOL DEFAULT
)
    PARALLEL 1
    NOCACHE
    DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of SERVICES
-- ----------------------------
INSERT INTO "SERVICES"
VALUES ('200', '401', '50', 'Breakfast+lunch');
INSERT INTO "SERVICES"
VALUES ('201', '401', '1000', 'Breakfast+lunch+Dinner');
INSERT INTO "SERVICES"
VALUES ('202', '401', '300', 'Dinner');
INSERT INTO "SERVICES"
VALUES ('203', '402', '200', 'Breakfast');
INSERT INTO "SERVICES"
VALUES ('204', '402', '50', 'Breakfast+lunch');
INSERT INTO "SERVICES"
VALUES ('205', '402', '1000', 'lunch+Dinner');
INSERT INTO "SERVICES"
VALUES ('206', '403', '50', 'Breakfast+lunch');
INSERT INTO "SERVICES"
VALUES ('207', '403', '1000', 'Breakfast+lunch+Dinner');
INSERT INTO "SERVICES"
VALUES ('208', '404', '300', 'Dinner');
INSERT INTO "SERVICES"
VALUES ('209', '404', '200', 'Breakfast');
INSERT INTO "SERVICES"
VALUES ('210', '405', '50', 'Breakfast+lunch');
INSERT INTO "SERVICES"
VALUES ('211', '405', '1000', 'lunch+Dinner');
INSERT INTO "SERVICES"
VALUES ('213', '401', '0', 'swimming pool');
INSERT INTO "SERVICES"
VALUES ('214', '401', '0', 'room cleaning');
INSERT INTO "SERVICES"
VALUES ('215', '402', '0', 'wifi');
INSERT INTO "SERVICES"
VALUES ('216', '402', '0', 'room cleaning');
INSERT INTO "SERVICES"
VALUES ('217', '403', '0', 'car parking');
INSERT INTO "SERVICES"
VALUES ('218', '403', '0', 'laundry');
INSERT INTO "SERVICES"
VALUES ('219', '403', '0', 'room cleaning');
INSERT INTO "SERVICES"
VALUES ('220', '404', '0', 'wifi');
INSERT INTO "SERVICES"
VALUES ('221', '404', '0', 'swimming pool');
INSERT INTO "SERVICES"
VALUES ('222', '404', '0', 'car parking');
INSERT INTO "SERVICES"
VALUES ('223', '405', '0', 'wifi');
INSERT INTO "SERVICES"
VALUES ('224', '405', '0', 'swimming pool');
INSERT INTO "SERVICES"
VALUES ('225', '405', '0', 'room cleaning');

-- ----------------------------
-- Table structure for TOOK
-- ----------------------------
CREATE TABLE "TOOK"
(
    "BOOKING_ID" NUMBER VISIBLE,
    "SERVICE_ID" NUMBER VISIBLE
)
    LOGGING
    NOCOMPRESS
    PCTFREE 10
    INITRANS 1
    STORAGE
(
    INITIAL 65536
    NEXT 1048576
    MINEXTENTS 1
    MAXEXTENTS 2147483645
    BUFFER_POOL DEFAULT
)
    PARALLEL 1
    NOCACHE
    DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of TOOK
-- ----------------------------
INSERT INTO "TOOK"
VALUES ('247', '202');
INSERT INTO "TOOK"
VALUES ('249', '204');
INSERT INTO "TOOK"
VALUES ('249', '205');
INSERT INTO "TOOK"
VALUES ('250', '200');
INSERT INTO "TOOK"
VALUES ('253', '201');
INSERT INTO "TOOK"
VALUES ('245', '201');
INSERT INTO "TOOK"
VALUES ('246', '200');
INSERT INTO "TOOK"
VALUES ('248', '204');
INSERT INTO "TOOK"
VALUES ('252', '204');

-- ----------------------------
-- Function structure for ADMINUPDATE
-- ----------------------------
CREATE OR REPLACE PROCEDURE "ADMINUPDATE"(AID IN NUMBER, ANAME IN VARCHAR2, AMAIL IN VARCHAR2,
                                                      APHONE IN VARCHAR2, APASS IN VARCHAR2, ACITY IN VARCHAR2,
                                                      ASTREET IN VARCHAR2, ACOUNTRY IN VARCHAR2) IS
    ID2          NUMBER;
    MAIL2        VARCHAR2(100);
    PASSWORD2    VARCHAR2(100);
    PHONENUMBER2 VARCHAR2(100);
    NAME2        VARCHAR2(100);
    CITY2        VARCHAR2(100);
    STREETNAME2  VARCHAR2(100);
    COUNTRY2     VARCHAR2(100);
BEGIN
    SELECT MAIL INTO MAIL2 FROM ADMIN WHERE ADMIN_USERID = AID;
    SELECT NAME INTO NAME2 FROM ADMIN WHERE ADMIN_USERID = AID;
    SELECT PASSWORD INTO PASSWORD2 FROM ADMIN WHERE ADMIN_USERID = AID;
    SELECT PHONENUMBER INTO PHONENUMBER2 FROM ADMIN WHERE ADMIN_USERID = AID;
    SELECT CITY INTO CITY2 FROM ADMIN WHERE ADMIN_USERID = AID;
    SELECT STREETNAME INTO STREETNAME2 FROM ADMIN WHERE ADMIN_USERID = AID;
    SELECT COUNTRY INTO COUNTRY2 FROM ADMIN WHERE ADMIN_USERID = AID;

    UPDATE ADMIN
    SET MAIL=NVL(AMAIL, MAIL2),
        NAME=NVL(ANAME, NAME2),
        PASSWORD=NVL(APASS, PASSWORD2),
        PHONENUMBER=NVL(APHONE, PHONENUMBER2),
        CITY=NVL(ACITY, CITY2),
        STREETNAME=NVL(ASTREET, STREETNAME2),
        COUNTRY=NVL(ACOUNTRY, COUNTRY2)
    WHERE ADMIN_USERID = AID;
END;
/



-- ----------------------------
-- Function structure for USERUPDATE
-- ----------------------------
CREATE OR REPLACE PROCEDURE "USERUPDATE"(AID IN NUMBER, ANAME IN VARCHAR2, AMAIL IN VARCHAR2,
                                                     APHONE IN VARCHAR2, APASS IN VARCHAR2, ACITY IN VARCHAR2,
                                                     ASTREET IN VARCHAR2, ACOUNTRY IN VARCHAR2) IS
    ID2          NUMBER;
    MAIL2        VARCHAR2(100);
    PASSWORD2    VARCHAR2(100);
    PHONENUMBER2 VARCHAR2(100);
    NAME2        VARCHAR2(100);
    CITY2        VARCHAR2(100);
    STREETNAME2  VARCHAR2(100);
    COUNTRY2     VARCHAR2(100);
BEGIN
    SELECT MAIL INTO MAIL2 FROM CUSTOMER WHERE CUSTOMER_ID = AID;
    SELECT NAME INTO NAME2 FROM CUSTOMER WHERE CUSTOMER_ID = AID;
    SELECT PASSWORD INTO PASSWORD2 FROM CUSTOMER WHERE CUSTOMER_ID = AID;
    SELECT PHONENUMBER INTO PHONENUMBER2 FROM CUSTOMER WHERE CUSTOMER_ID = AID;
    SELECT CITY INTO CITY2 FROM CUSTOMER WHERE CUSTOMER_ID = AID;
    SELECT STREETNAME INTO STREETNAME2 FROM CUSTOMER WHERE CUSTOMER_ID = AID;
    SELECT COUNTRY INTO COUNTRY2 FROM CUSTOMER WHERE CUSTOMER_ID = AID;

    UPDATE CUSTOMER
    SET MAIL=NVL(AMAIL, MAIL2),
        NAME=NVL(ANAME, NAME2),
        PASSWORD=NVL(APASS, PASSWORD2),
        PHONENUMBER=NVL(APHONE, PHONENUMBER2),
        CITY=NVL(ACITY, CITY2),
        STREETNAME=NVL(ASTREET, STREETNAME2),
        COUNTRY=NVL(ACOUNTRY, COUNTRY2)
    WHERE CUSTOMER_ID = AID;
END;
/
-- ----------------------------
-- Primary Key structure for table ADMIN
-- ----------------------------
ALTER TABLE "ADMIN"
    ADD CONSTRAINT "SYS_C008105" PRIMARY KEY ("ADMIN_USERID");

-- ----------------------------
-- Checks structure for table ADMIN
-- ----------------------------
ALTER TABLE "ADMIN"
    ADD CONSTRAINT "SYS_C008097" CHECK ("ADMIN_USERID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ADMIN"
    ADD CONSTRAINT "SYS_C008098" CHECK ("NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ADMIN"
    ADD CONSTRAINT "SYS_C008099" CHECK ("CITY" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ADMIN"
    ADD CONSTRAINT "SYS_C008100" CHECK ("STREETNAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ADMIN"
    ADD CONSTRAINT "SYS_C008101" CHECK ("COUNTRY" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ADMIN"
    ADD CONSTRAINT "SYS_C008102" CHECK ("PHONENUMBER" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ADMIN"
    ADD CONSTRAINT "SYS_C008103" CHECK ("MAIL" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ADMIN"
    ADD CONSTRAINT "SYS_C008104" CHECK ("PASSWORD" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table BOOKING
-- ----------------------------
ALTER TABLE "BOOKING"
    ADD CONSTRAINT "SYS_C008114" PRIMARY KEY ("BOOKING_ID");

-- ----------------------------
-- Checks structure for table BOOKING
-- ----------------------------
ALTER TABLE "BOOKING"
    ADD CONSTRAINT "SYS_C008113" CHECK ("BOOKING_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table CUSTOMER
-- ----------------------------
ALTER TABLE "CUSTOMER"
    ADD CONSTRAINT "SYS_C008093" PRIMARY KEY ("CUSTOMER_ID");

-- ----------------------------
-- Checks structure for table CUSTOMER
-- ----------------------------
ALTER TABLE "CUSTOMER"
    ADD CONSTRAINT "SYS_C008088" CHECK ("CUSTOMER_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "CUSTOMER"
    ADD CONSTRAINT "SYS_C008089" CHECK ("NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "CUSTOMER"
    ADD CONSTRAINT "SYS_C008090" CHECK ("PHONENUMBER" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "CUSTOMER"
    ADD CONSTRAINT "SYS_C008091" CHECK ("MAIL" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "CUSTOMER"
    ADD CONSTRAINT "SYS_C008092" CHECK ("PASSWORD" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table HOTEL
-- ----------------------------
ALTER TABLE "HOTEL"
    ADD CONSTRAINT "SYS_C008111" PRIMARY KEY ("HOTEL_ID");

-- ----------------------------
-- Checks structure for table HOTEL
-- ----------------------------
ALTER TABLE "HOTEL"
    ADD CONSTRAINT "SYS_C008106" CHECK ("HOTEL_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "HOTEL"
    ADD CONSTRAINT "SYS_C008107" CHECK ("NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "HOTEL"
    ADD CONSTRAINT "SYS_C008108" CHECK ("STREETNAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "HOTEL"
    ADD CONSTRAINT "SYS_C008109" CHECK ("CITY" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "HOTEL"
    ADD CONSTRAINT "SYS_C008110" CHECK ("COUNTRY" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Triggers structure for table IMAGE_COST
-- ----------------------------
CREATE TRIGGER "ROOMUPDATE"
    AFTER UPDATE OF "ROOM_TYPE"
    ON "IMAGE_COST"
    REFERENCING OLD AS "OLD" NEW AS "NEW"
    FOR EACH ROW
BEGIN
    UPDATE ROOMS
    SET ROOM_TYPE=:NEW.ROOM_TYPE
    WHERE HOTEL_ID = :OLD.HOTEL_ID
      AND UPPER(:OLD.ROOM_TYPE) = UPPER(ROOM_TYPE);
END;
/

-- ----------------------------
-- Primary Key structure for table PAYMENT
-- ----------------------------
ALTER TABLE "PAYMENT"
    ADD CONSTRAINT "SYS_C008251" PRIMARY KEY ("PAYMENT_ID");

-- ----------------------------
-- Checks structure for table PAYMENT
-- ----------------------------
ALTER TABLE "PAYMENT"
    ADD CONSTRAINT "SYS_C008250" CHECK ("PAYMENT_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table ROOMS
-- ----------------------------
ALTER TABLE "ROOMS"
    ADD CONSTRAINT "SYS_C008122" PRIMARY KEY ("ROOM_ID", "HOTEL_ID");

-- ----------------------------
-- Checks structure for table ROOMS
-- ----------------------------
ALTER TABLE "ROOMS"
    ADD CONSTRAINT "SYS_C008121" CHECK ("ROOM_TYPE" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table SERVICES
-- ----------------------------
ALTER TABLE "SERVICES"
    ADD CONSTRAINT "SYS_C008170" PRIMARY KEY ("SERVICE_ID");

-- ----------------------------
-- Checks structure for table SERVICES
-- ----------------------------
ALTER TABLE "SERVICES"
    ADD CONSTRAINT "SYS_C008167" CHECK ("SERVICE_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "SERVICES"
    ADD CONSTRAINT "SYS_C008168" CHECK ("COST" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "SERVICES"
    ADD CONSTRAINT "SYS_C008169" CHECK ("DESCRIPTION" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table BOOKED
-- ----------------------------
ALTER TABLE "BOOKED"
    ADD CONSTRAINT "SYS_C008126" FOREIGN KEY ("BOOKING_ID") REFERENCES "BOOKING" ("BOOKING_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "BOOKED"
    ADD CONSTRAINT "SYS_C008127" FOREIGN KEY ("ROOM_ID", "HOTEL_ID") REFERENCES "ROOMS" ("ROOM_ID", "HOTEL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table BOOKING
-- ----------------------------
ALTER TABLE "BOOKING"
    ADD CONSTRAINT "SYS_C008115" FOREIGN KEY ("CUSTOMER_ID") REFERENCES "CUSTOMER" ("CUSTOMER_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table HOTEL
-- ----------------------------
ALTER TABLE "HOTEL"
    ADD CONSTRAINT "SYS_C008112" FOREIGN KEY ("ADMIN_USERID") REFERENCES "ADMIN" ("ADMIN_USERID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table HOTEL_PIC
-- ----------------------------
ALTER TABLE "HOTEL_PIC"
    ADD CONSTRAINT "SYS_C008137" FOREIGN KEY ("HOTEL_ID") REFERENCES "HOTEL" ("HOTEL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table IMAGE_COST
-- ----------------------------
ALTER TABLE "IMAGE_COST"
    ADD CONSTRAINT "SYS_C008132" FOREIGN KEY ("HOTEL_ID") REFERENCES "HOTEL" ("HOTEL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table PAYMENT
-- ----------------------------
ALTER TABLE "PAYMENT"
    ADD CONSTRAINT "SYS_C008252" FOREIGN KEY ("BOOKING_ID") REFERENCES "BOOKING" ("BOOKING_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table ROOMS
-- ----------------------------
ALTER TABLE "ROOMS"
    ADD CONSTRAINT "SYS_C008123" FOREIGN KEY ("HOTEL_ID") REFERENCES "HOTEL" ("HOTEL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table SERVICES
-- ----------------------------
ALTER TABLE "SERVICES"
    ADD CONSTRAINT "SYS_C008171" FOREIGN KEY ("HOTEL_ID") REFERENCES "HOTEL" ("HOTEL_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table TOOK
-- ----------------------------
ALTER TABLE "TOOK"
    ADD CONSTRAINT "SYS_C008192" FOREIGN KEY ("BOOKING_ID") REFERENCES "BOOKING" ("BOOKING_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "TOOK"
    ADD CONSTRAINT "SYS_C008193" FOREIGN KEY ("SERVICE_ID") REFERENCES "SERVICES" ("SERVICE_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

COMMIT;

