CREATE FUNCTION public.add_Calories_Burn_Rates()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
BEGIN INSERT INTO "Calories_Burn_Rates"("activity_id","createdAt","updatedAt","burnRate") values(new.id,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,new."burnRate");
RETURN NEW;
END;
$BODY$;

ALTER FUNCTION public.add_Calories_Burn_Rates() 
    OWNER TO postgres;


CREATE TRIGGER add_Calories
    AFTER INSERT
    ON public."Activities"
    FOR EACH ROW
    EXECUTE FUNCTION public.add_Calories_Burn_Rates();

CREATE FUNCTION public.Heart_Points()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
BEGIN INSERT INTO "HeartPoints"("activity_id", "points","createdAt","updatedAt") values(new.id,new."heartPoints",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
RETURN NEW;
END;
$BODY$;

ALTER FUNCTION public.Heart_Points() 
    OWNER TO postgres;


CREATE TRIGGER add_Heart_Points
    AFTER INSERT
    ON public."Activities"
    FOR EACH ROW
    EXECUTE FUNCTION public.Heart_Points();

   
-- CREATE FUNCTION public.Heart_Points()
--     RETURNS trigger
--     LANGUAGE 'plpgsql'
--     COST 100
--     VOLATILE NOT LEAKPROOF
-- AS $BODY$
-- BEGIN INSERT INTO 'HeartPoints'("activity_id","points", "createdAt","updatedAt",) values(new.id, new."heartPoints",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
-- RETURN NEW;
-- END;
-- $BODY$;


-- ALTER FUNCTION public.Heart_Points() 
--     OWNER TO postgres;


-- CREATE TRIGGER add_Heart_Points
--     AFTER INSERT
--     ON public."Activities"
--     FOR EACH ROW
--     EXECUTE FUNCTION public.Heart_Points();







