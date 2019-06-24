select o.name, o.quantity from users u
join chars c on u.id = c.user_id
join outlander_gear o on o.char_id = c.id
where u.id = $1 and c.char_name = $2