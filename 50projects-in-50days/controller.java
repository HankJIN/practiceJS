@RestController
@CrosssOrigin(origins = "*", allowedHeadrs = "*")
@RequestMapping(value = "/api/v1")
@RequiredArgsConstructor

public class UserDataController{

    private final service1;
    private final service2;

    @RequestMapping(value = "/user/{user_no}", method = RequestMethod.Get)
    public DTO1 getDTO1info(@PathVariable("user_no")String user_no){
        DTO1 ret = service1.getDTO1(user_no);
        return ret;
    }

    @RequestMapping(value = "/user/{user_no}/usage/summary", method = RequestMethod.GET)
  // http://local:port/api/v1/user/${USERNO}/usage/summary?ptype=${_ptype}
  public DTO2 getData2(@PathVariable("user_no")String user_no, @RequestParam("ptype") int ptype){
    
  }

    @RequestMapping(/user/{asdad}/... , .. = GET)
  public MAP<String, Object;
  
}

// -------------
userService interface
  ...
Servceimpl 
  @RequriedArgsConstructor
  public class impl implements userservice{
    @AutoWired
  private final UserMapper userMapper;

  @Overrid
  public DTO1 
  
  }
