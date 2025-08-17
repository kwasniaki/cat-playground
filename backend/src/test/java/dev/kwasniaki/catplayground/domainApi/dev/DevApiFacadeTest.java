package dev.kwasniaki.catplayground.domainApi.dev;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class DevApiFacadeTest {

    @Autowired
    MockMvc mockMvc;

    @ParameterizedTest
    @ValueSource(strings = {"Hello World!", "123test", "   whitespaces test   ", "special!@#$%^&*()_+ characters"})
    void echo(String message) throws Exception {
        mockMvc.perform(get("/echo")
                        .queryParam("message", message))
                .andExpect(status().isOk())
                .andExpect(content().string("{\"message\":\"%s\"}".formatted(message)));

    }

    @Test
    void echoWithoutMessage_returnsDefaultValue() throws Exception {
        mockMvc.perform(get("/echo"))
                .andExpect(status().isOk())
                .andExpect(content().string("{\"message\":\"Hello, World!\"}"));

    }

}