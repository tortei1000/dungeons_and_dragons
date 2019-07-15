delete from spells s
where s.id = $1;

select s.id, s.name, s.description, s.cost, s.level from users u
join chars c on u.id = c.user_id
join spells s on s.char_id = c.id
where u.id = $2 and c.char_name = $3