DROP DATABASE IF EXISTS dbbarbershop2026;
CREATE DATABASE dbbarbershop2026;
USE dbbarbershop2026;

SELECT*FROM tuser;


USE dbbarbershop2026;

USE dbbarbershop2026;

ALTER TABLE tservice MODIFY COLUMN image LONGTEXT;
ALTER TABLE tgallery MODIFY COLUMN image LONGTEXT;
ALTER TABLE tuser MODIFY COLUMN photo LONGTEXT;
ALTER TABLE tsetting MODIFY COLUMN logo LONGTEXT;
-- =====================================
-- USUARIOS
-- =====================================
CREATE TABLE tuser(
    idUser CHAR(36) NOT NULL,
    firstName VARCHAR(70) NOT NULL,
    surName VARCHAR(70) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(2000) NOT NULL,
    role VARCHAR(100) NOT NULL,
    photo VARCHAR(2000) NULL,
    status TINYINT NOT NULL DEFAULT 1,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY(idUser)
) ENGINE=INNODB;
INSERT INTO tuser (idUser, firstName, surName, email, password, role, photo, status, createdAt, updatedAt)
VALUES (
    UUID(),
    'Laura',
    'Fernandez',
    'laura@barbershop.com',
    '$2b$10$QNZ3AL1DXBho632R2/SnDutwfRTgiQkTte1ZZI3ocSCzgPDmDi4ZG',
    'Administrador',
    '',
    1,
    NOW(),
    NOW()
);

-- password = admin123 (BCrypt)
INSERT INTO tuser (idUser, firstName, surName, email, password, role, photo, status, createdAt, updatedAt)
VALUES (
    UUID(),
    'Admin',
    'Barbershop',
    'admin@barbershop.com',
    '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
    'Administrador',
    '',
    1,
    NOW(),
    NOW()
);
SELECT*FROM tcustomer;
-- =====================================
-- CLIENTES
-- =====================================
CREATE TABLE tcustomer(
    idCustomer CHAR(36) NOT NULL,
    firstName VARCHAR(70) NOT NULL,
    surName VARCHAR(70) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NULL,
    password VARCHAR(2000) NULL,
    status TINYINT NOT NULL DEFAULT 1,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY(idCustomer)
) ENGINE=InnoDB;

-- =====================================
-- SERVICIOS
-- =====================================
CREATE TABLE tservice(
    idService CHAR(36) NOT NULL,
    name VARCHAR(150) NOT NULL,
    description VARCHAR(1000) NULL,
    price DECIMAL(10,2) NOT NULL,
    durationMinutes INT NOT NULL,
    image VARCHAR(2000) NULL,
    status TINYINT NOT NULL DEFAULT 1,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY(idService)
) ENGINE=InnoDB;

-- =====================================
-- HORARIOS DE BARBEROS
-- =====================================
CREATE TABLE tbarberschedule(
    idBarberSchedule CHAR(36) NOT NULL,
    idUser CHAR(36) NOT NULL,
    dayName VARCHAR(20) NOT NULL,
    startHour TIME NOT NULL,
    endHour TIME NOT NULL,
    status TINYINT NOT NULL DEFAULT 1,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY(idBarberSchedule),
    FOREIGN KEY(idUser) REFERENCES tuser(idUser) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =====================================
-- RESERVAS
-- =====================================
CREATE TABLE tappointment(
    idAppointment CHAR(36) NOT NULL,
    idCustomer CHAR(36) NOT NULL,
    idUser CHAR(36) NOT NULL,
    appointmentDate DATE NOT NULL,
    startHour TIME NOT NULL,
    endHour TIME NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) NOT NULL,
    observation VARCHAR(1000) NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY(idAppointment),
    FOREIGN KEY(idCustomer) REFERENCES tcustomer(idCustomer) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(idUser) REFERENCES tuser(idUser) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =====================================
-- DETALLE DE RESERVAS
-- =====================================
CREATE TABLE tappointmentdetail(
    idAppointmentDetail CHAR(36) NOT NULL,
    idAppointment CHAR(36) NOT NULL,
    idService CHAR(36) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY(idAppointmentDetail),
    FOREIGN KEY(idAppointment) REFERENCES tappointment(idAppointment) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(idService) REFERENCES tservice(idService) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =====================================
-- PAGOS
-- =====================================
CREATE TABLE tpayment(
    idPayment CHAR(36) NOT NULL,
    idAppointment CHAR(36) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    paymentMethod VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL,
    transactionDate DATETIME NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY(idPayment),
    FOREIGN KEY(idAppointment) REFERENCES tappointment(idAppointment) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =====================================
-- GALERIA
-- =====================================
CREATE TABLE tgallery(
    idGallery CHAR(36) NOT NULL,
    title VARCHAR(200) NOT NULL,
    image VARCHAR(2000) NOT NULL,
    description VARCHAR(1000) NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY(idGallery)
) ENGINE=InnoDB;

-- =====================================
-- CONFIGURACION DEL NEGOCIO
-- =====================================
CREATE TABLE tsetting(
    idSetting CHAR(36) NOT NULL,
    businessName VARCHAR(200) NOT NULL,
    address VARCHAR(500) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(100) NULL,
    logo VARCHAR(2000) NULL,
    openHour TIME NOT NULL,
    closeHour TIME NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY(idSetting)
) ENGINE=InnoDB;

-- =====================================
-- IMAGENES DE REFERENCIA DEL CLIENTE
-- =====================================
CREATE TABLE tappointmentfile(
    idAppointmentFile CHAR(36) NOT NULL,
    idAppointment CHAR(36) NOT NULL,
    fileName VARCHAR(2000) NOT NULL,
    extension VARCHAR(10) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY(idAppointmentFile),
    FOREIGN KEY(idAppointment) REFERENCES tappointment(idAppointment) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- =====================================
-- COMENTARIOS DE LA RESERVA
-- =====================================
CREATE TABLE tappointmentcomment(
    idAppointmentComment CHAR(36) NOT NULL,
    idAppointment CHAR(36) NOT NULL,
    idUser CHAR(36) NOT NULL,
    description VARCHAR(2000) NOT NULL,
    createdAt DATETIME NOT NULL,
    updatedAt DATETIME NOT NULL,
    PRIMARY KEY(idAppointmentComment),
    FOREIGN KEY(idAppointment) REFERENCES tappointment(idAppointment) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY(idUser) REFERENCES tuser(idUser) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;
