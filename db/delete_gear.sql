delete from outlander_gear o
where o.id = $1;

select o.id, o.name, o.quantity from users u
join chars c on u.id = c.user_id
join outlander_gear o on o.char_id = c.id
where u.id = $2 and c.char_name = $3