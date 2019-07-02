delete from features f
where f.id = $1;

select f.id, f.name, f.description, f.uses from users u
join chars c on u.id = c.user_id
join features f on f.char_id = c.id
where u.id = $2 and c.char_name = $3