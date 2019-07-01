select p.name, p.id from users u
join chars c on u.id = c.user_id
join proficiencies p on p.char_id = c.id
where u.id = $1 and c.char_name = $2