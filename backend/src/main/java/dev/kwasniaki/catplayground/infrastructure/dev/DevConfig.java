package dev.kwasniaki.catplayground.infrastructure.dev;

import dev.kwasniaki.catplayground.domainApi.dev.DevApiFacade;
import dev.kwasniaki.catplayground.generated.catplayground.external.api.DevApiDelegate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DevConfig {

    @Bean
    DevApiDelegate devApiDelegate() {
        return new DevApiFacade();
    }

}
