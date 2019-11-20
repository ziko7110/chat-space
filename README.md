## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|


### Association
-  has_many :users,through: :users_tags
-  has_many :ｍessages
-  has_many :users_tags




## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|


### Association
-  has_many :has_many :groups,through: :user_tags
-  has_many :ｍessages
-  has_many :users_tags


## users_tagテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association

-  belongs_to :user
-  belongs_to :group



## ｍessagesテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|string|null: false, foreign_key: true|
|group_id|string|null: false, foreign_key: true|
|comment|string
|image|string

### Association
- belongs_to:user
- belongs_to:group