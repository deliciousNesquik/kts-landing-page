select *
from notification_chats;

drop table notification_chats;

create table notification_chats
(
    id INTEGER not null constraint notification_chats_pk primary key autoincrement,
    chat_id BIGINT not null,
    is_active BOOLEAN default false not null,
    created_at DATE,
    chat_name TEXT default 'Тестовый' not null
);

insert into notification_chats values (1, 808224610, 1, '11.02.2026T10:00:00', 'Артем');
insert into notification_chats values (2, 1231884983, 1, '11.02.2026T10:00:00', 'Андрей');
insert into notification_chats values (3, 8234571540, 1, '11.02.2026T10:00:00', 'Рабочий');