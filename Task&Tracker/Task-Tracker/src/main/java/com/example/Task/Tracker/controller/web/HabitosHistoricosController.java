package com.example.Task.Tracker.controller.web;

import com.example.Task.Tracker.model.HabitosHistoricos;
import com.example.Task.Tracker.service.HabitosHistoricosService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.time.LocalDate;
import java.util.List;

@Controller
public class HabitosHistoricosController {

    private final HabitosHistoricosService habitosHistoricosService;

    public HabitosHistoricosController(HabitosHistoricosService habitosHistoricosService) {
        this.habitosHistoricosService = habitosHistoricosService;
    }

//    @GetMapping("/{id}")
//    public String buscarHabitosHistoricos(@PathVariable Integer id, Model model) {
//        List<HabitosHistoricos> habitosHistoricos = habitosHistoricosService.getHabitosHistoricosByHabitoId(id);
//        model.addAttribute("habitosHistoricos", habitosHistoricos);
//
//        return "habitosHistoricos";
//    }

    @PostMapping("/habitos_historicos/save")
    public String saveHabitosHistoricos(@RequestParam("data") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate data,
                                        @RequestParam("habitosId") Integer habitosId,
                                        RedirectAttributes redirectAttributes) {
        // Converte LocalDate para java.sql.Date
        java.sql.Date sqlDate = java.sql.Date.valueOf(data);

        // Verifica se já existe um cadastro para a data e o ID do hábito
        if (habitosHistoricosService.existeCadastroParaData(sqlDate, habitosId)) {
            redirectAttributes.addFlashAttribute("errorMessage", "Essa data já tem um cadastro para o hábito selecionado.");
            return "redirect:/habitos"; // Redireciona de volta para a página de hábitos
        }

        // Criação e salvamento do novo registro se a data não existir
        HabitosHistoricos habitosHistoricos = new HabitosHistoricos();
        habitosHistoricos.setData(sqlDate); // Usa a data convertida
        habitosHistoricos.setHabitos_id(habitosId); // Atribui o ID do hábito

        habitosHistoricosService.save(habitosHistoricos); // Salva o objeto no banco de dados

        return "redirect:/habitos"; // Redireciona de volta para a lista de hábitos
    }




}
