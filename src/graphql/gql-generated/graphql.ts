/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "avalon.players" */
export type Avalon_Players = {
  __typename?: 'avalon_players';
  connected: Scalars['Boolean'];
  playerName: Scalars['String'];
  role?: Maybe<Scalars['String']>;
  side?: Maybe<Scalars['String']>;
};

/** aggregated selection of "avalon.players" */
export type Avalon_Players_Aggregate = {
  __typename?: 'avalon_players_aggregate';
  aggregate?: Maybe<Avalon_Players_Aggregate_Fields>;
  nodes: Array<Avalon_Players>;
};

/** aggregate fields of "avalon.players" */
export type Avalon_Players_Aggregate_Fields = {
  __typename?: 'avalon_players_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Avalon_Players_Max_Fields>;
  min?: Maybe<Avalon_Players_Min_Fields>;
};


/** aggregate fields of "avalon.players" */
export type Avalon_Players_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Avalon_Players_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "avalon.players". All fields are combined with a logical 'AND'. */
export type Avalon_Players_Bool_Exp = {
  _and?: InputMaybe<Array<Avalon_Players_Bool_Exp>>;
  _not?: InputMaybe<Avalon_Players_Bool_Exp>;
  _or?: InputMaybe<Array<Avalon_Players_Bool_Exp>>;
  connected?: InputMaybe<Boolean_Comparison_Exp>;
  playerName?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  side?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "avalon.players" */
export enum Avalon_Players_Constraint {
  /** unique or primary key constraint on columns "playerName" */
  PlayersPkey = 'players_pkey'
}

/** input type for inserting data into table "avalon.players" */
export type Avalon_Players_Insert_Input = {
  connected?: InputMaybe<Scalars['Boolean']>;
  playerName?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  side?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Avalon_Players_Max_Fields = {
  __typename?: 'avalon_players_max_fields';
  playerName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  side?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Avalon_Players_Min_Fields = {
  __typename?: 'avalon_players_min_fields';
  playerName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  side?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "avalon.players" */
export type Avalon_Players_Mutation_Response = {
  __typename?: 'avalon_players_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Avalon_Players>;
};

/** on_conflict condition type for table "avalon.players" */
export type Avalon_Players_On_Conflict = {
  constraint: Avalon_Players_Constraint;
  update_columns?: Array<Avalon_Players_Update_Column>;
  where?: InputMaybe<Avalon_Players_Bool_Exp>;
};

/** Ordering options when selecting data from "avalon.players". */
export type Avalon_Players_Order_By = {
  connected?: InputMaybe<Order_By>;
  playerName?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  side?: InputMaybe<Order_By>;
};

/** primary key columns input for table: avalon.players */
export type Avalon_Players_Pk_Columns_Input = {
  playerName: Scalars['String'];
};

/** select columns of table "avalon.players" */
export enum Avalon_Players_Select_Column {
  /** column name */
  Connected = 'connected',
  /** column name */
  PlayerName = 'playerName',
  /** column name */
  Role = 'role',
  /** column name */
  Side = 'side'
}

/** input type for updating data in table "avalon.players" */
export type Avalon_Players_Set_Input = {
  connected?: InputMaybe<Scalars['Boolean']>;
  playerName?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  side?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "avalon_players" */
export type Avalon_Players_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Avalon_Players_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Avalon_Players_Stream_Cursor_Value_Input = {
  connected?: InputMaybe<Scalars['Boolean']>;
  playerName?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  side?: InputMaybe<Scalars['String']>;
};

/** update columns of table "avalon.players" */
export enum Avalon_Players_Update_Column {
  /** column name */
  Connected = 'connected',
  /** column name */
  PlayerName = 'playerName',
  /** column name */
  Role = 'role',
  /** column name */
  Side = 'side'
}

export type Avalon_Players_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Avalon_Players_Set_Input>;
  /** filter the rows which have to be updated */
  where: Avalon_Players_Bool_Exp;
};

/** columns and relationships of "avalon.stage" */
export type Avalon_Stage = {
  __typename?: 'avalon_stage';
  id: Scalars['String'];
  stage: Scalars['String'];
};

/** aggregated selection of "avalon.stage" */
export type Avalon_Stage_Aggregate = {
  __typename?: 'avalon_stage_aggregate';
  aggregate?: Maybe<Avalon_Stage_Aggregate_Fields>;
  nodes: Array<Avalon_Stage>;
};

/** aggregate fields of "avalon.stage" */
export type Avalon_Stage_Aggregate_Fields = {
  __typename?: 'avalon_stage_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Avalon_Stage_Max_Fields>;
  min?: Maybe<Avalon_Stage_Min_Fields>;
};


/** aggregate fields of "avalon.stage" */
export type Avalon_Stage_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Avalon_Stage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "avalon.stage". All fields are combined with a logical 'AND'. */
export type Avalon_Stage_Bool_Exp = {
  _and?: InputMaybe<Array<Avalon_Stage_Bool_Exp>>;
  _not?: InputMaybe<Avalon_Stage_Bool_Exp>;
  _or?: InputMaybe<Array<Avalon_Stage_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  stage?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "avalon.stage" */
export enum Avalon_Stage_Constraint {
  /** unique or primary key constraint on columns "id" */
  StageIdKey = 'stage_id_key',
  /** unique or primary key constraint on columns "id" */
  StagePkey = 'stage_pkey'
}

/** input type for inserting data into table "avalon.stage" */
export type Avalon_Stage_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  stage?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Avalon_Stage_Max_Fields = {
  __typename?: 'avalon_stage_max_fields';
  id?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Avalon_Stage_Min_Fields = {
  __typename?: 'avalon_stage_min_fields';
  id?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "avalon.stage" */
export type Avalon_Stage_Mutation_Response = {
  __typename?: 'avalon_stage_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Avalon_Stage>;
};

/** on_conflict condition type for table "avalon.stage" */
export type Avalon_Stage_On_Conflict = {
  constraint: Avalon_Stage_Constraint;
  update_columns?: Array<Avalon_Stage_Update_Column>;
  where?: InputMaybe<Avalon_Stage_Bool_Exp>;
};

/** Ordering options when selecting data from "avalon.stage". */
export type Avalon_Stage_Order_By = {
  id?: InputMaybe<Order_By>;
  stage?: InputMaybe<Order_By>;
};

/** primary key columns input for table: avalon.stage */
export type Avalon_Stage_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "avalon.stage" */
export enum Avalon_Stage_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Stage = 'stage'
}

/** input type for updating data in table "avalon.stage" */
export type Avalon_Stage_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  stage?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "avalon_stage" */
export type Avalon_Stage_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Avalon_Stage_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Avalon_Stage_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
  stage?: InputMaybe<Scalars['String']>;
};

/** update columns of table "avalon.stage" */
export enum Avalon_Stage_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Stage = 'stage'
}

export type Avalon_Stage_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Avalon_Stage_Set_Input>;
  /** filter the rows which have to be updated */
  where: Avalon_Stage_Bool_Exp;
};

/** columns and relationships of "avalon.tasks" */
export type Avalon_Tasks = {
  __typename?: 'avalon_tasks';
  created_at?: Maybe<Scalars['timestamptz']>;
  electionCandidates: Scalars['jsonb'];
  electionResult?: Maybe<Scalars['Boolean']>;
  electionVotes?: Maybe<Scalars['jsonb']>;
  id: Scalars['uuid'];
  pollResult?: Maybe<Scalars['Boolean']>;
  pollVotes?: Maybe<Scalars['jsonb']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


/** columns and relationships of "avalon.tasks" */
export type Avalon_TasksElectionCandidatesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "avalon.tasks" */
export type Avalon_TasksElectionVotesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "avalon.tasks" */
export type Avalon_TasksPollVotesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "avalon.tasks" */
export type Avalon_Tasks_Aggregate = {
  __typename?: 'avalon_tasks_aggregate';
  aggregate?: Maybe<Avalon_Tasks_Aggregate_Fields>;
  nodes: Array<Avalon_Tasks>;
};

/** aggregate fields of "avalon.tasks" */
export type Avalon_Tasks_Aggregate_Fields = {
  __typename?: 'avalon_tasks_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Avalon_Tasks_Max_Fields>;
  min?: Maybe<Avalon_Tasks_Min_Fields>;
};


/** aggregate fields of "avalon.tasks" */
export type Avalon_Tasks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Avalon_Tasks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Avalon_Tasks_Append_Input = {
  electionCandidates?: InputMaybe<Scalars['jsonb']>;
  electionVotes?: InputMaybe<Scalars['jsonb']>;
  pollVotes?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "avalon.tasks". All fields are combined with a logical 'AND'. */
export type Avalon_Tasks_Bool_Exp = {
  _and?: InputMaybe<Array<Avalon_Tasks_Bool_Exp>>;
  _not?: InputMaybe<Avalon_Tasks_Bool_Exp>;
  _or?: InputMaybe<Array<Avalon_Tasks_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  electionCandidates?: InputMaybe<Jsonb_Comparison_Exp>;
  electionResult?: InputMaybe<Boolean_Comparison_Exp>;
  electionVotes?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  pollResult?: InputMaybe<Boolean_Comparison_Exp>;
  pollVotes?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "avalon.tasks" */
export enum Avalon_Tasks_Constraint {
  /** unique or primary key constraint on columns "id" */
  TasksPkey = 'tasks_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Avalon_Tasks_Delete_At_Path_Input = {
  electionCandidates?: InputMaybe<Array<Scalars['String']>>;
  electionVotes?: InputMaybe<Array<Scalars['String']>>;
  pollVotes?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Avalon_Tasks_Delete_Elem_Input = {
  electionCandidates?: InputMaybe<Scalars['Int']>;
  electionVotes?: InputMaybe<Scalars['Int']>;
  pollVotes?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Avalon_Tasks_Delete_Key_Input = {
  electionCandidates?: InputMaybe<Scalars['String']>;
  electionVotes?: InputMaybe<Scalars['String']>;
  pollVotes?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "avalon.tasks" */
export type Avalon_Tasks_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  electionCandidates?: InputMaybe<Scalars['jsonb']>;
  electionResult?: InputMaybe<Scalars['Boolean']>;
  electionVotes?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  pollResult?: InputMaybe<Scalars['Boolean']>;
  pollVotes?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Avalon_Tasks_Max_Fields = {
  __typename?: 'avalon_tasks_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Avalon_Tasks_Min_Fields = {
  __typename?: 'avalon_tasks_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "avalon.tasks" */
export type Avalon_Tasks_Mutation_Response = {
  __typename?: 'avalon_tasks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Avalon_Tasks>;
};

/** on_conflict condition type for table "avalon.tasks" */
export type Avalon_Tasks_On_Conflict = {
  constraint: Avalon_Tasks_Constraint;
  update_columns?: Array<Avalon_Tasks_Update_Column>;
  where?: InputMaybe<Avalon_Tasks_Bool_Exp>;
};

/** Ordering options when selecting data from "avalon.tasks". */
export type Avalon_Tasks_Order_By = {
  created_at?: InputMaybe<Order_By>;
  electionCandidates?: InputMaybe<Order_By>;
  electionResult?: InputMaybe<Order_By>;
  electionVotes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pollResult?: InputMaybe<Order_By>;
  pollVotes?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: avalon.tasks */
export type Avalon_Tasks_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Avalon_Tasks_Prepend_Input = {
  electionCandidates?: InputMaybe<Scalars['jsonb']>;
  electionVotes?: InputMaybe<Scalars['jsonb']>;
  pollVotes?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "avalon.tasks" */
export enum Avalon_Tasks_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ElectionCandidates = 'electionCandidates',
  /** column name */
  ElectionResult = 'electionResult',
  /** column name */
  ElectionVotes = 'electionVotes',
  /** column name */
  Id = 'id',
  /** column name */
  PollResult = 'pollResult',
  /** column name */
  PollVotes = 'pollVotes',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "avalon.tasks" */
export type Avalon_Tasks_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  electionCandidates?: InputMaybe<Scalars['jsonb']>;
  electionResult?: InputMaybe<Scalars['Boolean']>;
  electionVotes?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  pollResult?: InputMaybe<Scalars['Boolean']>;
  pollVotes?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "avalon_tasks" */
export type Avalon_Tasks_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Avalon_Tasks_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Avalon_Tasks_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  electionCandidates?: InputMaybe<Scalars['jsonb']>;
  electionResult?: InputMaybe<Scalars['Boolean']>;
  electionVotes?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['uuid']>;
  pollResult?: InputMaybe<Scalars['Boolean']>;
  pollVotes?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "avalon.tasks" */
export enum Avalon_Tasks_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ElectionCandidates = 'electionCandidates',
  /** column name */
  ElectionResult = 'electionResult',
  /** column name */
  ElectionVotes = 'electionVotes',
  /** column name */
  Id = 'id',
  /** column name */
  PollResult = 'pollResult',
  /** column name */
  PollVotes = 'pollVotes',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Avalon_Tasks_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Avalon_Tasks_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Avalon_Tasks_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Avalon_Tasks_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Avalon_Tasks_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Avalon_Tasks_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Avalon_Tasks_Set_Input>;
  /** filter the rows which have to be updated */
  where: Avalon_Tasks_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "avalon.players" */
  delete_avalon_players?: Maybe<Avalon_Players_Mutation_Response>;
  /** delete single row from the table: "avalon.players" */
  delete_avalon_players_by_pk?: Maybe<Avalon_Players>;
  /** delete data from the table: "avalon.stage" */
  delete_avalon_stage?: Maybe<Avalon_Stage_Mutation_Response>;
  /** delete single row from the table: "avalon.stage" */
  delete_avalon_stage_by_pk?: Maybe<Avalon_Stage>;
  /** delete data from the table: "avalon.tasks" */
  delete_avalon_tasks?: Maybe<Avalon_Tasks_Mutation_Response>;
  /** delete single row from the table: "avalon.tasks" */
  delete_avalon_tasks_by_pk?: Maybe<Avalon_Tasks>;
  /** insert data into the table: "avalon.players" */
  insert_avalon_players?: Maybe<Avalon_Players_Mutation_Response>;
  /** insert a single row into the table: "avalon.players" */
  insert_avalon_players_one?: Maybe<Avalon_Players>;
  /** insert data into the table: "avalon.stage" */
  insert_avalon_stage?: Maybe<Avalon_Stage_Mutation_Response>;
  /** insert a single row into the table: "avalon.stage" */
  insert_avalon_stage_one?: Maybe<Avalon_Stage>;
  /** insert data into the table: "avalon.tasks" */
  insert_avalon_tasks?: Maybe<Avalon_Tasks_Mutation_Response>;
  /** insert a single row into the table: "avalon.tasks" */
  insert_avalon_tasks_one?: Maybe<Avalon_Tasks>;
  /** update data of the table: "avalon.players" */
  update_avalon_players?: Maybe<Avalon_Players_Mutation_Response>;
  /** update single row of the table: "avalon.players" */
  update_avalon_players_by_pk?: Maybe<Avalon_Players>;
  /** update multiples rows of table: "avalon.players" */
  update_avalon_players_many?: Maybe<Array<Maybe<Avalon_Players_Mutation_Response>>>;
  /** update data of the table: "avalon.stage" */
  update_avalon_stage?: Maybe<Avalon_Stage_Mutation_Response>;
  /** update single row of the table: "avalon.stage" */
  update_avalon_stage_by_pk?: Maybe<Avalon_Stage>;
  /** update multiples rows of table: "avalon.stage" */
  update_avalon_stage_many?: Maybe<Array<Maybe<Avalon_Stage_Mutation_Response>>>;
  /** update data of the table: "avalon.tasks" */
  update_avalon_tasks?: Maybe<Avalon_Tasks_Mutation_Response>;
  /** update single row of the table: "avalon.tasks" */
  update_avalon_tasks_by_pk?: Maybe<Avalon_Tasks>;
  /** update multiples rows of table: "avalon.tasks" */
  update_avalon_tasks_many?: Maybe<Array<Maybe<Avalon_Tasks_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Avalon_PlayersArgs = {
  where: Avalon_Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Avalon_Players_By_PkArgs = {
  playerName: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Avalon_StageArgs = {
  where: Avalon_Stage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Avalon_Stage_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Avalon_TasksArgs = {
  where: Avalon_Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Avalon_Tasks_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Avalon_PlayersArgs = {
  objects: Array<Avalon_Players_Insert_Input>;
  on_conflict?: InputMaybe<Avalon_Players_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Avalon_Players_OneArgs = {
  object: Avalon_Players_Insert_Input;
  on_conflict?: InputMaybe<Avalon_Players_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Avalon_StageArgs = {
  objects: Array<Avalon_Stage_Insert_Input>;
  on_conflict?: InputMaybe<Avalon_Stage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Avalon_Stage_OneArgs = {
  object: Avalon_Stage_Insert_Input;
  on_conflict?: InputMaybe<Avalon_Stage_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Avalon_TasksArgs = {
  objects: Array<Avalon_Tasks_Insert_Input>;
  on_conflict?: InputMaybe<Avalon_Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Avalon_Tasks_OneArgs = {
  object: Avalon_Tasks_Insert_Input;
  on_conflict?: InputMaybe<Avalon_Tasks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Avalon_PlayersArgs = {
  _set?: InputMaybe<Avalon_Players_Set_Input>;
  where: Avalon_Players_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Avalon_Players_By_PkArgs = {
  _set?: InputMaybe<Avalon_Players_Set_Input>;
  pk_columns: Avalon_Players_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Avalon_Players_ManyArgs = {
  updates: Array<Avalon_Players_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Avalon_StageArgs = {
  _set?: InputMaybe<Avalon_Stage_Set_Input>;
  where: Avalon_Stage_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Avalon_Stage_By_PkArgs = {
  _set?: InputMaybe<Avalon_Stage_Set_Input>;
  pk_columns: Avalon_Stage_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Avalon_Stage_ManyArgs = {
  updates: Array<Avalon_Stage_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Avalon_TasksArgs = {
  _append?: InputMaybe<Avalon_Tasks_Append_Input>;
  _delete_at_path?: InputMaybe<Avalon_Tasks_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Avalon_Tasks_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Avalon_Tasks_Delete_Key_Input>;
  _prepend?: InputMaybe<Avalon_Tasks_Prepend_Input>;
  _set?: InputMaybe<Avalon_Tasks_Set_Input>;
  where: Avalon_Tasks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Avalon_Tasks_By_PkArgs = {
  _append?: InputMaybe<Avalon_Tasks_Append_Input>;
  _delete_at_path?: InputMaybe<Avalon_Tasks_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Avalon_Tasks_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Avalon_Tasks_Delete_Key_Input>;
  _prepend?: InputMaybe<Avalon_Tasks_Prepend_Input>;
  _set?: InputMaybe<Avalon_Tasks_Set_Input>;
  pk_columns: Avalon_Tasks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Avalon_Tasks_ManyArgs = {
  updates: Array<Avalon_Tasks_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "avalon.players" */
  avalon_players: Array<Avalon_Players>;
  /** fetch aggregated fields from the table: "avalon.players" */
  avalon_players_aggregate: Avalon_Players_Aggregate;
  /** fetch data from the table: "avalon.players" using primary key columns */
  avalon_players_by_pk?: Maybe<Avalon_Players>;
  /** fetch data from the table: "avalon.stage" */
  avalon_stage: Array<Avalon_Stage>;
  /** fetch aggregated fields from the table: "avalon.stage" */
  avalon_stage_aggregate: Avalon_Stage_Aggregate;
  /** fetch data from the table: "avalon.stage" using primary key columns */
  avalon_stage_by_pk?: Maybe<Avalon_Stage>;
  /** fetch data from the table: "avalon.tasks" */
  avalon_tasks: Array<Avalon_Tasks>;
  /** fetch aggregated fields from the table: "avalon.tasks" */
  avalon_tasks_aggregate: Avalon_Tasks_Aggregate;
  /** fetch data from the table: "avalon.tasks" using primary key columns */
  avalon_tasks_by_pk?: Maybe<Avalon_Tasks>;
};


export type Query_RootAvalon_PlayersArgs = {
  distinct_on?: InputMaybe<Array<Avalon_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Avalon_Players_Order_By>>;
  where?: InputMaybe<Avalon_Players_Bool_Exp>;
};


export type Query_RootAvalon_Players_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Avalon_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Avalon_Players_Order_By>>;
  where?: InputMaybe<Avalon_Players_Bool_Exp>;
};


export type Query_RootAvalon_Players_By_PkArgs = {
  playerName: Scalars['String'];
};


export type Query_RootAvalon_StageArgs = {
  distinct_on?: InputMaybe<Array<Avalon_Stage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Avalon_Stage_Order_By>>;
  where?: InputMaybe<Avalon_Stage_Bool_Exp>;
};


export type Query_RootAvalon_Stage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Avalon_Stage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Avalon_Stage_Order_By>>;
  where?: InputMaybe<Avalon_Stage_Bool_Exp>;
};


export type Query_RootAvalon_Stage_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootAvalon_TasksArgs = {
  distinct_on?: InputMaybe<Array<Avalon_Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Avalon_Tasks_Order_By>>;
  where?: InputMaybe<Avalon_Tasks_Bool_Exp>;
};


export type Query_RootAvalon_Tasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Avalon_Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Avalon_Tasks_Order_By>>;
  where?: InputMaybe<Avalon_Tasks_Bool_Exp>;
};


export type Query_RootAvalon_Tasks_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "avalon.players" */
  avalon_players: Array<Avalon_Players>;
  /** fetch aggregated fields from the table: "avalon.players" */
  avalon_players_aggregate: Avalon_Players_Aggregate;
  /** fetch data from the table: "avalon.players" using primary key columns */
  avalon_players_by_pk?: Maybe<Avalon_Players>;
  /** fetch data from the table in a streaming manner: "avalon.players" */
  avalon_players_stream: Array<Avalon_Players>;
  /** fetch data from the table: "avalon.stage" */
  avalon_stage: Array<Avalon_Stage>;
  /** fetch aggregated fields from the table: "avalon.stage" */
  avalon_stage_aggregate: Avalon_Stage_Aggregate;
  /** fetch data from the table: "avalon.stage" using primary key columns */
  avalon_stage_by_pk?: Maybe<Avalon_Stage>;
  /** fetch data from the table in a streaming manner: "avalon.stage" */
  avalon_stage_stream: Array<Avalon_Stage>;
  /** fetch data from the table: "avalon.tasks" */
  avalon_tasks: Array<Avalon_Tasks>;
  /** fetch aggregated fields from the table: "avalon.tasks" */
  avalon_tasks_aggregate: Avalon_Tasks_Aggregate;
  /** fetch data from the table: "avalon.tasks" using primary key columns */
  avalon_tasks_by_pk?: Maybe<Avalon_Tasks>;
  /** fetch data from the table in a streaming manner: "avalon.tasks" */
  avalon_tasks_stream: Array<Avalon_Tasks>;
};


export type Subscription_RootAvalon_PlayersArgs = {
  distinct_on?: InputMaybe<Array<Avalon_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Avalon_Players_Order_By>>;
  where?: InputMaybe<Avalon_Players_Bool_Exp>;
};


export type Subscription_RootAvalon_Players_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Avalon_Players_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Avalon_Players_Order_By>>;
  where?: InputMaybe<Avalon_Players_Bool_Exp>;
};


export type Subscription_RootAvalon_Players_By_PkArgs = {
  playerName: Scalars['String'];
};


export type Subscription_RootAvalon_Players_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Avalon_Players_Stream_Cursor_Input>>;
  where?: InputMaybe<Avalon_Players_Bool_Exp>;
};


export type Subscription_RootAvalon_StageArgs = {
  distinct_on?: InputMaybe<Array<Avalon_Stage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Avalon_Stage_Order_By>>;
  where?: InputMaybe<Avalon_Stage_Bool_Exp>;
};


export type Subscription_RootAvalon_Stage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Avalon_Stage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Avalon_Stage_Order_By>>;
  where?: InputMaybe<Avalon_Stage_Bool_Exp>;
};


export type Subscription_RootAvalon_Stage_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAvalon_Stage_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Avalon_Stage_Stream_Cursor_Input>>;
  where?: InputMaybe<Avalon_Stage_Bool_Exp>;
};


export type Subscription_RootAvalon_TasksArgs = {
  distinct_on?: InputMaybe<Array<Avalon_Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Avalon_Tasks_Order_By>>;
  where?: InputMaybe<Avalon_Tasks_Bool_Exp>;
};


export type Subscription_RootAvalon_Tasks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Avalon_Tasks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Avalon_Tasks_Order_By>>;
  where?: InputMaybe<Avalon_Tasks_Bool_Exp>;
};


export type Subscription_RootAvalon_Tasks_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAvalon_Tasks_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Avalon_Tasks_Stream_Cursor_Input>>;
  where?: InputMaybe<Avalon_Tasks_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type SubscribePlayersSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribePlayersSubscription = { __typename?: 'subscription_root', avalon_players: Array<{ __typename?: 'avalon_players', connected: boolean, playerName: string, role?: string | null, side?: string | null }> };

export type GetPlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlayersQuery = { __typename?: 'query_root', avalon_players: Array<{ __typename?: 'avalon_players', connected: boolean, playerName: string, role?: string | null, side?: string | null }> };

export type InsertPlayerMutationVariables = Exact<{
  playerName?: InputMaybe<Scalars['String']>;
  connected?: InputMaybe<Scalars['Boolean']>;
}>;


export type InsertPlayerMutation = { __typename?: 'mutation_root', insert_avalon_players_one?: { __typename?: 'avalon_players', playerName: string, connected: boolean, role?: string | null, side?: string | null } | null };

export type DeleteAllPlayersMutationVariables = Exact<{
  where?: InputMaybe<Avalon_Players_Bool_Exp>;
}>;


export type DeleteAllPlayersMutation = { __typename?: 'mutation_root', delete_avalon_players?: { __typename?: 'avalon_players_mutation_response', affected_rows: number } | null };

export type UpdatePlayersMutationVariables = Exact<{
  updates?: InputMaybe<Array<Avalon_Players_Updates> | Avalon_Players_Updates>;
}>;


export type UpdatePlayersMutation = { __typename?: 'mutation_root', update_avalon_players_many?: Array<{ __typename?: 'avalon_players_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'avalon_players', connected: boolean, playerName: string, role?: string | null, side?: string | null }> } | null> | null };

export type UpdateStageMutationVariables = Exact<{
  stage?: InputMaybe<Scalars['String']>;
}>;


export type UpdateStageMutation = { __typename?: 'mutation_root', update_avalon_stage?: { __typename?: 'avalon_stage_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'avalon_stage', id: string, stage: string }> } | null };

export type SubscribeStageSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeStageSubscription = { __typename?: 'subscription_root', avalon_stage_by_pk?: { __typename?: 'avalon_stage', id: string, stage: string } | null };

export type GetTaskByIdQueryVariables = Exact<{
  id?: InputMaybe<Scalars['uuid']>;
}>;


export type GetTaskByIdQuery = { __typename?: 'query_root', avalon_tasks: Array<{ __typename?: 'avalon_tasks', created_at?: any | null, electionCandidates: any, electionResult?: boolean | null, electionVotes?: any | null, id: any, pollResult?: boolean | null, pollVotes?: any | null, updated_at?: any | null }> };

export type InsertTaskMutationVariables = Exact<{
  electionCandidates?: InputMaybe<Scalars['jsonb']>;
}>;


export type InsertTaskMutation = { __typename?: 'mutation_root', insert_avalon_tasks?: { __typename?: 'avalon_tasks_mutation_response', affected_rows: number } | null };

export type DeleteAllTasksMutationVariables = Exact<{
  where?: InputMaybe<Avalon_Tasks_Bool_Exp>;
}>;


export type DeleteAllTasksMutation = { __typename?: 'mutation_root', delete_avalon_tasks?: { __typename?: 'avalon_tasks_mutation_response', affected_rows: number } | null };

export type UpdateElectionVotesMutationVariables = Exact<{
  electionVotes1?: InputMaybe<Scalars['jsonb']>;
  electionResult?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Avalon_Tasks_Bool_Exp>;
}>;


export type UpdateElectionVotesMutation = { __typename?: 'mutation_root', update_avalon_tasks?: { __typename?: 'avalon_tasks_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'avalon_tasks', created_at?: any | null, electionCandidates: any, electionResult?: boolean | null, electionVotes?: any | null, id: any, pollResult?: boolean | null, pollVotes?: any | null, updated_at?: any | null }> } | null };

export type UpdatePollVotesMutationVariables = Exact<{
  pollVotes1?: InputMaybe<Scalars['jsonb']>;
  pollResult?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<Avalon_Tasks_Bool_Exp>;
}>;


export type UpdatePollVotesMutation = { __typename?: 'mutation_root', update_avalon_tasks?: { __typename?: 'avalon_tasks_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'avalon_tasks', created_at?: any | null, electionCandidates: any, electionResult?: boolean | null, electionVotes?: any | null, id: any, pollResult?: boolean | null, pollVotes?: any | null, updated_at?: any | null }> } | null };

export type SubscribeTaskSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type SubscribeTaskSubscription = { __typename?: 'subscription_root', avalon_tasks: Array<{ __typename?: 'avalon_tasks', updated_at?: any | null, pollVotes?: any | null, pollResult?: boolean | null, id: any, electionVotes?: any | null, electionResult?: boolean | null, created_at?: any | null, electionCandidates: any }> };


export const SubscribePlayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SubscribePlayers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avalon_players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"connected"}},{"kind":"Field","name":{"kind":"Name","value":"playerName"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"side"}}]}}]}}]} as unknown as DocumentNode<SubscribePlayersSubscription, SubscribePlayersSubscriptionVariables>;
export const GetPlayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlayers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avalon_players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"connected"}},{"kind":"Field","name":{"kind":"Name","value":"playerName"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"side"}}]}}]}}]} as unknown as DocumentNode<GetPlayersQuery, GetPlayersQueryVariables>;
export const InsertPlayerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertPlayer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"playerName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"connected"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_avalon_players_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"playerName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"playerName"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"connected"},"value":{"kind":"Variable","name":{"kind":"Name","value":"connected"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"on_conflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"update_columns"},"value":{"kind":"EnumValue","value":"connected"}},{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"players_pkey"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"playerName"}},{"kind":"Field","name":{"kind":"Name","value":"connected"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"side"}}]}}]}}]} as unknown as DocumentNode<InsertPlayerMutation, InsertPlayerMutationVariables>;
export const DeleteAllPlayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAllPlayers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"avalon_players_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_avalon_players"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeleteAllPlayersMutation, DeleteAllPlayersMutationVariables>;
export const UpdatePlayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePlayers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updates"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"avalon_players_updates"}}}},"defaultValue":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"playerName"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"","block":false}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"role"},"value":{"kind":"StringValue","value":"","block":false}}]}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_avalon_players_many"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"connected"}},{"kind":"Field","name":{"kind":"Name","value":"playerName"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"side"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePlayersMutation, UpdatePlayersMutationVariables>;
export const UpdateStageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateStage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stage"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_avalon_stage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"stage","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"stage"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stage"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateStageMutation, UpdateStageMutationVariables>;
export const SubscribeStageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SubscribeStage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avalon_stage_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"StringValue","value":"stage","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"stage"}}]}}]}}]} as unknown as DocumentNode<SubscribeStageSubscription, SubscribeStageSubscriptionVariables>;
export const GetTaskByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTaskById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avalon_tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"electionCandidates"}},{"kind":"Field","name":{"kind":"Name","value":"electionResult"}},{"kind":"Field","name":{"kind":"Name","value":"electionVotes"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pollResult"}},{"kind":"Field","name":{"kind":"Name","value":"pollVotes"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]} as unknown as DocumentNode<GetTaskByIdQuery, GetTaskByIdQueryVariables>;
export const InsertTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InsertTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"electionCandidates"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"jsonb"}},"defaultValue":{"kind":"ListValue","values":[{"kind":"StringValue","value":"","block":false}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_avalon_tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"electionCandidates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"electionCandidates"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<InsertTaskMutation, InsertTaskMutationVariables>;
export const DeleteAllTasksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteAllTasks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"avalon_tasks_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_avalon_tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<DeleteAllTasksMutation, DeleteAllTasksMutationVariables>;
export const UpdateElectionVotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateElectionVotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"electionVotes1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"jsonb"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"electionResult"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"avalon_tasks_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"updated_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_avalon_tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_append"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"electionVotes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"electionVotes1"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"electionResult"},"value":{"kind":"Variable","name":{"kind":"Name","value":"electionResult"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"electionCandidates"}},{"kind":"Field","name":{"kind":"Name","value":"electionResult"}},{"kind":"Field","name":{"kind":"Name","value":"electionVotes"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pollResult"}},{"kind":"Field","name":{"kind":"Name","value":"pollVotes"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateElectionVotesMutation, UpdateElectionVotesMutationVariables>;
export const UpdatePollVotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdatePollVotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pollVotes1"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"jsonb"}},"defaultValue":{"kind":"StringValue","value":"","block":false}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pollResult"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"avalon_tasks_bool_exp"}},"defaultValue":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_and"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"updated_at"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"","block":false}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_avalon_tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_append"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pollVotes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pollVotes1"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"pollResult"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pollResult"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}},{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"electionCandidates"}},{"kind":"Field","name":{"kind":"Name","value":"electionResult"}},{"kind":"Field","name":{"kind":"Name","value":"electionVotes"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"pollResult"}},{"kind":"Field","name":{"kind":"Name","value":"pollVotes"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]}}]}}]} as unknown as DocumentNode<UpdatePollVotesMutation, UpdatePollVotesMutationVariables>;
export const SubscribeTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"SubscribeTask"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avalon_tasks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"updated_at"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"pollVotes"}},{"kind":"Field","name":{"kind":"Name","value":"pollResult"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"electionVotes"}},{"kind":"Field","name":{"kind":"Name","value":"electionResult"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"electionCandidates"}}]}}]}}]} as unknown as DocumentNode<SubscribeTaskSubscription, SubscribeTaskSubscriptionVariables>;