package dev.kwasniaki.catplayground.domainApi.dev;

import dev.kwasniaki.catplayground.infrastructure.dev.DevConfig;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = DevConfig.class)
@WebAppConfiguration
class DevApiFacadeTest {

    MockMvc mockMvc;

    @Test
    void echo() throws Exception {
        mockMvc.perform(
                        get("/echo")
                                .queryParam("message", "Hello World!"))
                .andExpect(status().isOk())
                .andExpect(content().string("{\"message\":\"Hello World!\"}"));

    }

}