
CREATE FUNCTION public.add_weight_Func()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
BEGIN INSERT INTO weights("userID","createdAt","updatedAt","value") values(new.id,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP,new.weight);
RETURN NEW;
END;
$BODY$;

ALTER FUNCTION public.add_weight_Func() 
    OWNER TO postgres;


CREATE TRIGGER add_weight
    AFTER INSERT
    ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION public.add_weight_Func();

   




CREATE FUNCTION public.sleep_time()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
BEGIN INSERT INTO "SleepDurations"("sleepTime","awakeTime","userID","createdAt","updatedAt") 
values(new."sleepTime",new."awakeTime",new."id",CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);
RETURN NEW;
END;
$BODY$;

ALTER FUNCTION public.sleep_time() 
    OWNER TO postgres;




 CREATE TRIGGER add_sleep_time
    AFTER INSERT
    ON public.users
    FOR EACH ROW
    EXECUTE FUNCTION public.sleep_time();






