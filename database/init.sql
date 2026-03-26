-- Create Table [ users ]
CREATE TABLE users (
	id BIGSERIAL PRIMARY KEY,
	email VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	username VARCHAR(30) NOT NULL,
	is_active BOOLEAN NOT NULL DEFAULT TRUE,
	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP,
	last_login_at TIMESTAMP
);
COMMENT ON COLUMN users.id IS 'ID';
COMMENT ON COLUMN users.email IS '이메일';
COMMENT ON COLUMN users.password IS '비밀번호';
COMMENT ON COLUMN users.username IS '사용자이름';
COMMENT ON COLUMN users.is_active IS '활성여부';
COMMENT ON COLUMN users.created_at IS '생성일시';
COMMENT ON COLUMN users.updated_at IS '수정일시';
COMMENT ON COLUMN users.last_login_at IS '최종로그인일시';

-- Init Data
INSERT INTO users (email, password, username, is_active, created_at)
VALUES ('test@example.com', '$2a$10$8.UnVuG9HHgffUDAlk8qfOuVGkqRzgVymGe07xd00dmxs.TVuHOnu', '테스트유저', TRUE, CURRENT_TIMESTAMP);