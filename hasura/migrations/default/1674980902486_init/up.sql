SET check_function_bodies = false;
CREATE SCHEMA avalon;
CREATE FUNCTION avalon.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE avalon.players (
    "playerName" text NOT NULL,
    connected boolean NOT NULL,
    side text,
    role text
);
CREATE TABLE avalon.stage (
    stage text DEFAULT 'WAITING'::text NOT NULL,
    id text DEFAULT 'stage'::text NOT NULL
);
CREATE TABLE avalon.tasks (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "electionCandidates" jsonb DEFAULT jsonb_build_array() NOT NULL,
    "electionVotes" jsonb DEFAULT jsonb_build_array(),
    "electionResult" boolean,
    "pollVotes" jsonb DEFAULT jsonb_build_array(),
    "pollResult" boolean,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);
ALTER TABLE ONLY avalon.players
    ADD CONSTRAINT players_pkey PRIMARY KEY ("playerName");
ALTER TABLE ONLY avalon.stage
    ADD CONSTRAINT stage_id_key UNIQUE (id);
ALTER TABLE ONLY avalon.stage
    ADD CONSTRAINT stage_pkey PRIMARY KEY (id);
ALTER TABLE ONLY avalon.tasks
    ADD CONSTRAINT tasks_pkey PRIMARY KEY (id);
CREATE TRIGGER set_avalon_tasks_updated_at BEFORE UPDATE ON avalon.tasks FOR EACH ROW EXECUTE FUNCTION avalon.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_avalon_tasks_updated_at ON avalon.tasks IS 'trigger to set value of column "updated_at" to current timestamp on row update';
