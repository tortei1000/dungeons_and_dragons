create table users (
id serial primary key,
username varchar(50),
password varchar
);
create table chars (
id serial primary key,
user_id int references users(id),
char_name	varchar,
char_class	varchar,
char_level	varchar,
race	varchar,
background	varchar,
alignment	varchar,
player_name	varchar,
experience_points	varchar,
str	int,
dex	int,
con	int,
intel	int,
wis	int,
cha	int,
inspiration	int,
proficiency_bonus	int,
sav_str	int,
sav_dex	int,
sav_con	int,
sav_int	int,
sav_wis	int,
sav_cha	int,
armor_class	int,
initiative	int,
speed	int,
hit_point_max	int,
current_hit_points	int,
temporary_hit_points	int,
hit_dice	varchar,
success_1	boolean,
success_2	boolean,
success_3	boolean,
failures_1	boolean,
failures_2	boolean,
failures_3	boolean,
personality_trait varchar,
ideal varchar,
bond varchar,
flaw varchar,
str_bonus int,
dex_bonus int,
con_bonus int,
int_bonus int,
wis_bonus int,
cha_bonus int,
passive_perception int,
acrobatics int,
animal_handling	int,
arcana int,
athletics int,
deception int,
history	int,
insight	int,
intimidation int,
investigation int,
medicine int,
nature int,
perception int,
performance	int,
persuation int,
religion int,
sleight_of_hand	int,
stealth	int,
survival int
);

create table languages (
id serial primary key,
char_id int references chars(id),
name varchar
);

create table proficiencies (
id serial primary key,
char_id int references chars(id),
name varchar
);

create table attacks (
id serial primary key,
char_id int references chars(id),
name varchar,
atk_bonus int,
damage varchar,
type VARCHAR
);

create table dungeoneer_pack (
id serial primary key,
char_id int references chars(id),
name varchar,
quantity int
);

create table outlander_gear (
id serial primary key,
char_id int references chars(id),
name varchar,
quantity int
);

create table features (
id serial primary key,
char_id int references chars(id),
name varchar,
description varchar,
uses int
);
