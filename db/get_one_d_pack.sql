select d.name, d.quantity, d.id from users u
join chars c on u.id = c.user_id
join dungeoneer_pack d on d.char_id = c.id
where u.id = $1 and c.char_name = $2