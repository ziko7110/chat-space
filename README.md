## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|menber|string|null: false|
|group_name|string|null: false|


### Association
-  has_many :user_tag,through: :user_tags
-  has_many :ｍessages




## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|user_name|string|null: false|
|email|string|null: false|
|password|string|null: false|


### Association
-  has_many :user_tag,through: :user_tags
-  has_many :ｍessages


## users_tagテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association

-  belongs_to :users 
-  belongs_to :groups



## ｍessagesテーブル

|Column|Type|Options|
|------|----|-------|
|comments|string|null: false|
|group_id|integer|null: false|
|group_id|integer|null: false|
|image|string

### Association
- has_many :user
- belongs_to:ｍessages