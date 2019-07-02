delete from dungeoneer_pack d
where d.id = $1;

select d.id, d.name, d.quantity from users u
join chars c on u.id = c.user_id
join dungeoneer_pack d on d.char_id = c.id
where u.id = $2 and c.char_name = $3