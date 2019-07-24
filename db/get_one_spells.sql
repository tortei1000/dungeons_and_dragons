select s.name, s.level, s.id from users u
join chars c on u.id = c.user_id
join spells s on s.char_id = c.id
where char_name = $1 and u.id = $2