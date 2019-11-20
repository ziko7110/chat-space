## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|


### Association
-  has_many :users,through: :users_tags
-  has_many :ｍessages




## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
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

-  belongs_to :user
-  belongs_to :group



## ｍessagesテーブル

|Column|Type|Options|
|------|----|-------|
|comment|string
|image|string

### Association
- belongs_to:user
- belongs_to:group