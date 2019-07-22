delete from spells s
where s.id = $1 and s.char_id = $1;

select * from users u
join chars c on u.id = c.user_id
join spells s on s.char_id = s.id
where u.id = $1