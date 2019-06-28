delete from attacks a
where a.name = $1;

select a.name, a.atk_bonus, a.damage, a.type from users u
join chars c on u.id = c.user_id
join attacks a on a.char_id = c.id
where u.id = $2 and c.char_name = $3