delete from proficiencies p
where p.id = $1;

select p.id, p.name from users u
join chars c on u.id = c.user_id
join proficiencies p on p.char_id = c.id
where u.id = $2 and c.char_name = $3